import React, { useRef, useState } from "react";

export default function CopyLink() {
  const inputRef = useRef(null);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCopyLink = () => {
    inputRef.current.select();
    navigator.clipboard.writeText(inputRef.current.value).then(() => {
      setShowTooltip(true);
      setTimeout(() => {
        setShowTooltip(false);
      }, 2000);
    });
  };

  return (
    <div className="link-container">
      <input type="url" ref={inputRef} value="https://jouebfrybjaxianicbfrybjaxianicnsfjbewrokweku" />
      <button onClick={handleCopyLink}>Copy link</button>
      <span className={`tooltip ${showTooltip ? "show" : ""}`}>Copied!</span>
    </div>
  );
}
