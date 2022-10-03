import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";

export const QRCode = (props: { url: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenQRCode = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleOpenQRCode}>QR</button>
      {isOpen && (
        <div className="fixed top-1/4 left-1/4 h-1/2 w-1/2 bg-white rounded-xl flex items-center justify-center flex-col shadow-xl border-t border-gray-100">
          <button
            onClick={handleOpenQRCode}
            className="text-black absolute top-4 right-4"
          >
            閉じる
          </button>
          <QRCodeSVG value={props.url} className="opacity-100" />
        </div>
      )}
    </div>
  );
};
