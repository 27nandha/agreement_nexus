import { NextResponse } from "next/server";
import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer-core";

export async function POST(request: Request) {
  try {
    const { url, formData } = await request.json();

    const browser = await puppeteer.launch({
      args: [...chromium.args, "--hide-scrollbars", "--disable-web-security"],
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: true,
    });

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle0" });

    // Fill form data
    if (formData) {
      await page.evaluate((data) => {
        Object.entries(data).forEach(([key, value]) => {
          const element = document.querySelector(`[name="${key}"]`);
          if (element) {
            if (element instanceof HTMLInputElement) {
              if (element.type === "checkbox") {
                element.checked = value as boolean;
              } else {
                element.value = value as string;
              }
            }
          }
        });
      }, formData);

      // Handle ID card preview
      if (formData.idCardPreview) {
        await page.evaluate((preview) => {
          const dropZone = document.querySelector(".border-dashed");
          if (dropZone) {
            dropZone.innerHTML = `<img src="${preview}" alt="ID Card Preview" class="max-w-full h-auto rounded-lg shadow-md">`;
          }
        }, formData.idCardPreview);
      }

      // Handle signature
      if (formData.digitalSignature) {
        await page.evaluate((signature) => {
          const canvas = document.querySelector("canvas");
          if (canvas) {
            const img = document.createElement("img");
            img.src = signature;
            img.style.width = canvas.style.width;
            img.style.height = canvas.style.height;
            canvas.replaceWith(img);
          }
        }, formData.digitalSignature);
      }
    }

    // Generate PDF
    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: { top: "20px", right: "20px", bottom: "20px", left: "20px" },
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
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 }
    );
  }
}
