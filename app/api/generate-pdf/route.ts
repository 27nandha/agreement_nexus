import puppeteer from "puppeteer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { url, formData } = await request.json();

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Set an initial viewport
    await page.setViewport({ width: 1200, height: 800 });

    // Navigate to the page
    await page.goto(url, { waitUntil: "networkidle0" });

    // Fill form fields
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
    }

    // Handle ID card preview
    if (formData.idCardPreview) {
      await page.evaluate((idCardPreview) => {
        const dropZone = document.querySelector(".border-dashed");
        if (dropZone) {
          dropZone.innerHTML = `<img src="${idCardPreview}" alt="ID Card Preview" class="max-w-full h-auto rounded-lg shadow-md">`;
        }
      }, formData.idCardPreview);

      await page.waitForSelector('img[alt="ID Card Preview"]');
    }

    // Handle signature
    if (formData.digitalSignature) {
      await page.evaluate((signatureData) => {
        const canvas = document.querySelector("canvas");
        if (canvas) {
          const img = document.createElement("img");
          img.src = signatureData;
          img.style.width = canvas.style.width;
          img.style.height = canvas.style.height;
          canvas.replaceWith(img);
        }
      }, formData.digitalSignature);
    }

    // **Fix Extra White Space**  
    await page.evaluate(() => {
      // Remove elements that add extra space (if applicable)
      const footer = document.querySelector("footer");
      if (footer) footer.style.marginTop = "0";

      // Ensure body fits content exactly
      document.body.style.minHeight = "auto";
      document.documentElement.style.minHeight = "auto";
    });

    // **Fix Height Calculation**
    const height = await page.evaluate(() => {
      return document.documentElement.offsetHeight;
    });

    // Set exact height to remove empty space
    await page.setViewport({ width: 1200, height });

    // Generate PDF
    const pdf = await page.pdf({
      width: "1200px",
      height: `${height}px`,
      printBackground: true,
      margin: { top: "10px", bottom: "10px", left: "10px", right: "10px" },
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
