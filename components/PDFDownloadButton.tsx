"use client";

import { useState } from "react";

interface PDFDownloadButtonProps {
  disabled?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formData?: any;
}

export default function PDFDownloadButton({
  disabled = false,
  formData,
}: PDFDownloadButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    try {
      setIsLoading(true);

      // Get current signature if exists
      const signaturePad = document.querySelector("canvas");
      const currentSignature = signaturePad?.toDataURL("image/png");

      // Get current ID card preview image
      const idCardImg = document.querySelector(
        'img[alt="ID Card Preview"]'
      ) as HTMLImageElement;
      let idCardBase64 = "";

      if (idCardImg && idCardImg.complete) {
        // Create a canvas to get base64 from the image
        const canvas = document.createElement("canvas");
        canvas.width = idCardImg.naturalWidth;
        canvas.height = idCardImg.naturalHeight;
        const ctx = canvas.getContext("2d");
        ctx?.drawImage(idCardImg, 0, 0);
        idCardBase64 = canvas.toDataURL("image/jpeg", 0.7);
      }

      // Get current form data with signature and ID card
      const currentFormData = {
        ...formData,
        digitalSignature: currentSignature || "",
        idCardPreview: idCardBase64 || formData.idCardPreview || "",
        agreedToTerms: formData.agreedToTerms,
      };

      console.log("Sending data:", {
        signature: !!currentSignature,
        idCard: !!idCardBase64,
      });

      const response = await fetch("/api/generate-pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: window.location.href,
          formData: currentFormData,
        }),
      });

      // Clear the stored form data
      sessionStorage.removeItem("tempFormData");

      if (!response.ok) {
        throw new Error("PDF generation failed");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "employee-agreement.pdf";
      document.body.appendChild(a);
      a.click();

      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Download error:", error);
      alert("Failed to download PDF");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isLoading || disabled}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isLoading ? "Generating PDF..." : "Download PDF"}
    </button>
  );
}
