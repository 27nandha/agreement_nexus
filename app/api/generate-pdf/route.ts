import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { url, formData } = await request.json();

    // Launch Puppeteer with Vercel-compatible Chromium
    const browser = await puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: true,
      defaultViewport: {
        width: 1200,
        height: 800
      }
    });

    const page = await browser.newPage();

    // Set viewport to a large size
    await page.setViewport({ width: 1200, height: 800 });

    // Load the page
    await page.goto(url, { waitUntil: "networkidle0" });

    // Fill form and handle images/signatures (unchanged logic)
    if (formData) {
      await page.evaluate((data) => {
        Object.entries(data).forEach(([key, value]) => {
          const element = document.querySelector(`[name="${key}"]`) as HTMLInputElement;
          if (element) {
            if (element.type === "checkbox") {
              element.checked = value as boolean;
            } else {
              element.value = value as string;
            }
          }
        });
      }, formData);

      if (formData.idCardPreview) {
        await page.evaluate((idCardPreview) => {
          const dropZone = document.querySelector(".border-dashed");
          if (dropZone) {
            dropZone.innerHTML = "";
            const img = document.createElement("img");
            img.src = idCardPreview;
            img.alt = "ID Card Preview";
            img.className = "max-w-full h-auto rounded-lg shadow-md";
            dropZone.appendChild(img);
          }
        }, formData.idCardPreview);

        await page.waitForSelector('img[alt="ID Card Preview"]');
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      if (formData.digitalSignature) {
        await page.evaluate((signatureData) => {
          const canvas = document.querySelector("canvas");
          if (canvas) {
            const img = document.createElement("img");
            img.src = signatureData;
            img.style.width = canvas.style.width;
            img.style.height = canvas.style.height;
            canvas.parentNode?.replaceChild(img, canvas);
          }
        }, formData.digitalSignature);
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    // Get full page height
    const height = await page.evaluate(() => {
      const body = document.body;
      const html = document.documentElement;
      return Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
    });

    await page.setViewport({ width: 1200, height });

    await page.waitForSelector("img", { timeout: 5000 }).catch(() => {});
    await page.waitForSelector("canvas", { timeout: 5000 }).catch(() => {});

    // Generate PDF
    const pdf = await page.pdf({
      width: "1200px",
      height: `${height}px`,
      printBackground: true,
      margin: { top: "20px", bottom: "20px", left: "20px", right: "20px" },
      scale: 0.8,
    });

    await browser.close();

    return new NextResponse(pdf, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=employee-agreement.pdf",
      },
    });
  } catch (error) {
    console.error("PDF generation error:", error);
    return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 });
  }
}
