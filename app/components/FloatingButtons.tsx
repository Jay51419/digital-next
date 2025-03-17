"use client";

import { useEffect, useState } from "react";
import {
  FaQrcode,
  FaShareAlt,
  FaUserPlus,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaTelegram,
  FaEnvelope,
  FaTimes,
} from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";

import { QRCodeSVG } from "qrcode.react";
import Logo from "./Logo";
import html2canvas from "html2canvas-pro";

export default function FloatingButtons() {
  const [showQR, setShowQR] = useState(false);
  const [showShare, setShowShare] = useState(false);

  const shareOptions = [
    {
      icon: FaFacebook,
      label: "Facebook",
      color: "#1877F2",
      url: "https://www.facebook.com/sharer/sharer.php?u=",
    },
    {
      icon: FaTwitter,
      label: "Twitter",
      color: "#1DA1F2",
      url: "https://twitter.com/intent/tweet?url=",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      color: "#0A66C2",
      url: "https://www.linkedin.com/sharing/share-offsite/?url=",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      color: "#25D366",
      url: "https://wa.me/?text=",
    },
    {
      icon: FaTelegram,
      label: "Telegram",
      color: "#0088cc",
      url: "https://t.me/share/url?url=",
    },
    {
      icon: FaEnvelope,
      label: "Email",
      color: "#EA4335",
      url: "mailto:?body=",
    },
  ];
  useEffect(() => {
    if (showQR) {
      document.body.style.overflow = "hidden"; // Hide scrollbar
    } else {
      document.body.style.overflow = ""; // Restore scrollbar
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [showQR]);
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Digital Business Card",
          text: "Check out my digital business card",
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      setShowShare(true);
    }
  };

  const handleShareOption = (url: string) => {
    const shareUrl = url + encodeURIComponent(window.location.href);
    window.open(shareUrl, "_blank");
  };

  const handleAddContact = () => {
    // Create vCard data
    const vCard = `BEGIN:VCARD
                    VERSION:3.0
                    FN:Bipen Tiwari
                    TITLE:Founder and Director
                    ORG:A3B
                    TEL:+919320012999
                    EMAIL:enquiry@a3b.in
                    ADR:;;A 504, Universal Business Park, Chandivali Farm Road, Off Saki Vihar Road, Andheri (East), Mumbai – 400072.
                    END:VCARD`;

    // Create blob and download
    const blob = new Blob([vCard], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "contact.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const saveToGallery = async () => {
    console.log("saveToGallery");
    const contentElement = document.getElementById("capture-content");

    if (!contentElement) return;

    // Temporarily hide unwanted elements
    const hiddenElements = document.querySelectorAll(
      ".exclude-from-screenshot"
    );
    hiddenElements.forEach((el) => {
      (el as HTMLElement).style.display = "none";
    });

    // Capture the content
    const canvas = await html2canvas(contentElement);
    // Restore visibility after capture
    hiddenElements.forEach((el) => (el as HTMLElement).style.display = "");

    // Download Image
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "digital-business-card.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="fixed bottom-4 left-4 flex gap-4 z-50">
        <button
          onClick={() => setShowQR(true)}
          className="w-14 h-14 bg-[#2e3192] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-90 transition-colors border border-white/20"
        >
          <FaQrcode className="text-2xl" />
        </button>

        <button
          onClick={handleShare}
          className="w-14 h-14 bg-[#2e3192] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-90 transition-colors border border-white/20"
        >
          <FaShareAlt className="text-2xl" />
        </button>
      </div>

      <button
        onClick={handleAddContact}
        className="fixed bottom-4 right-4 z-50 bg-[#2e3192] text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg hover:bg-opacity-90 transition-colors"
      >
        <FaUserPlus className="text-xl" />
        <span>Add to Contact</span>
      </button>

      {/* QR Code Modal */}
      {showQR && (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50 overflow-scroll">
          <div
            id="capture-content"
            className="relative w-full max-w-md mx-4 bg-white rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowQR(false)}
              className=" exclude-from-screenshot absolute right-4 top-8 text-gray-500 hover:text-gray-700"
            >
              <FaTimes className="text-xl" />
            </button>

            <div className="py-10">
              {/* Profile Section */}
              <div className="text-center mb-6">
                <Logo />
                <h2 className="text-xl mt-4 font-medium mb-1">Bipen Tiwari</h2>
                <p className="text-gray-600 mb-1">Founder and Director</p>
                <p className="text-gray-500">A3B</p>
              </div>

              {/* QR Code */}
              <div className="flex justify-center mb-6">
                <QRCodeSVG value={window.location.href} size={200} level="H" />
              </div>

              {/* Action Buttons */}
              <div className="exclude-from-screenshot flex flex-col gap-3 px-4">
                <button
                  onClick={saveToGallery}
                  className="flex justify-center items-center gap-3 p-3 border border-[#2e3192] bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <div className="">
                    <IoMdPhotos className="text-2xl text-[#2e3192]" />
                  </div>
                  <span className="text-gray-700">Add to Gallery</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Share Modal */}
      {showShare && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowShare(false)}
        >
          <div
            className="bg-white rounded-2xl p-6 max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-medium text-center mb-4">
              Share Profile
            </h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {shareOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleShareOption(option.url)}
                  className="flex flex-col items-center gap-2"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: option.color }}
                  >
                    <option.icon className="text-white text-xl" />
                  </div>
                  <span className="text-sm text-gray-600">{option.label}</span>
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowShare(false)}
              className="w-full py-2 bg-[#2e3192] text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
