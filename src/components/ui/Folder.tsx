"use client";
import React, { useState } from "react";

interface FolderProps {
  color?: string;
  size?: number;
  className?: string;
  icon: JSX.Element;
  description?: string;
}

const darkenColor = (hex: string, percent: number): string => {
  let color = hex.startsWith("#") ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color
      .split("")
      .map((c) => c + c)
      .join("");
  }
  const num = parseInt(color, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
  return (
    "#" +
    ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
  );
};

const Folder: React.FC<FolderProps> = ({
  color = "#c0f48c",
  size = 1,
  className = "",
  icon,
  description = "",
}) => {
  const [open, setOpen] = useState(false);
  const [paperOffset, setPaperOffset] = useState({ x: 0, y: 0 });

  const folderBackColor = darkenColor(color, 0.08);
  const paperColor = "#ffffff";

  const handleClick = () => {
    setOpen((prev) => !prev);
    if (open) {
      setPaperOffset({ x: 0, y: 0 });
    }
  };

  const handlePaperMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!open) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) * 0.15;
    const offsetY = (e.clientY - centerY) * 0.15;
    setPaperOffset({ x: offsetX, y: offsetY });
  };

  const handlePaperMouseLeave = () => {
    setPaperOffset({ x: 0, y: 0 });
  };

  const folderStyle: React.CSSProperties = {
    "--folder-color": color,
    "--folder-back-color": folderBackColor,
    "--paper-color": paperColor,
  } as React.CSSProperties;

  // Outer scale style
  const scaleStyle = { transform: `scale(${size})` };

  return (
    <div style={scaleStyle} className={className}>
      <div
        className={`group relative transition-all duration-200 ease-in cursor-pointer ${
          !open ? "hover:-translate-y-1" : ""
        }`}
        style={{
          ...folderStyle,
          transform: open ? "translateY(-8px)" : undefined,
        }}
        onClick={handleClick}
      >
        <div
          className="relative w-[100px] h-[80px] rounded-tl-0 rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]"
          style={{ backgroundColor: folderBackColor }}
        >
          <span
            className="absolute z-0 bottom-[98%] left-0 w-[30px] h-[10px] rounded-tl-[5px] rounded-tr-[5px] rounded-bl-0 rounded-br-0"
            style={{ backgroundColor: folderBackColor }}
          ></span>
          <div
            onMouseMove={handlePaperMouseMove}
            onMouseLeave={handlePaperMouseLeave}
            className={`absolute z-20 p-2 transition-all duration-300 ease-in-out bg-white rounded-lg
              ${
                open
                  ? "w-[120px] h-auto min-h-[90px] -translate-x-1/2 left-1/2"
                  : "w-[90%] h-[80%] bottom-[10%] left-1/2 -translate-x-1/2 translate-y-[10%] group-hover:translate-y-0"
              }`}
            style={{
              backgroundColor: paperColor,
              transform: open
                ? `translate(-50%, -75%) rotate(0deg) translate(${paperOffset.x}px, ${paperOffset.y}px)`
                : undefined,
              boxShadow: open ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
              opacity: description || open ? 1 : 0,
            }}
          >
            {open && (
              <div className="flex flex-col items-center">
                <p className="text-center text-[8px] text-black">
                  {description}
                </p>
              </div>
            )}
          </div>

          <div
            className={`absolute z-30 w-full h-full origin-bottom transition-all duration-300 ease-in-out shadow-2xl ${
              !open ? "group-hover:[transform:skew(15deg)_scaleY(0.6)]" : ""
            }`}
            style={{
              backgroundColor: color,
              borderRadius: "5px 10px 10px 10px",
              ...(open && { transform: "skew(15deg) scaleY(0.6)" }),
            }}
          ></div>
          <div
            className={`absolute z-30 w-full h-full origin-bottom transition-all duration-300 ease-in-out ${
              !open ? "group-hover:[transform:skew(-15deg)_scaleY(0.6)]" : ""
            }`}
            style={{
              backgroundColor: color,
              borderRadius: "5px 10px 10px 10px",
              ...(open && { transform: "skew(-15deg) scaleY(0.6)" }),
            }}
          >
            <div className="size-8 absolute bottom-1.5 right-1.5">{icon}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Folder;
