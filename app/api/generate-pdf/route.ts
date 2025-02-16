import chromium from '@sparticuz/chromium-min';
import puppeteer from 'puppeteer-core';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { url, formData } = await request.json();
    
    const browser = await puppeteer.launch({
      args: [
        ...chromium.args,
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
        '--single-process'
      ],
      defaultViewport: {
        width: 1200,
        height: 800,
        deviceScaleFactor: 1
      },
      executablePath: await chromium.executablePath(),
      headless: true,
    });
    
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    
    // Optimize memory usage
    await page.setCacheEnabled(false);
    
    // Generate PDF in chunks if needed
    const pdf = await page.pdf({
      width: '1200px',
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20px',
        bottom: '20px',
        left: '20px',
        right: '20px'
      },
      scale: 0.8
    });

    await browser.close();

    return new NextResponse(pdf, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=employee-agreement.pdf'
      }
    });
  } catch (error) {
    console.error('PDF generation error:', error);
    return NextResponse.json({ error: 'Failed to generate PDF' }, { status: 500 });
  }
}