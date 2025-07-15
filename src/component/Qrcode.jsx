import React, { useState, useEffect } from "react";
import "../ui/Qrcode.css";

export default function Qrcode() {
  const [temp, settemp] = useState("");
  const [size, setsize] = useState(200);
  const [qrcode, setqrcode] = useState("");
  const [bgcolor, setbgcolor] = useState("ffff");
  const [word, setword] = useState("");

  useEffect(() => {
    setqrcode(
      `http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgcolor}`
    );
  }, [word, size, bgcolor]);

  function handleClick() {
    setword(temp);
  }
  return (
    <>
      <section id="Qrcode">
        <div className="qrcode">
          <div>
            <h1>QR Code Generator</h1>
            <div className="qrcodeInput">
              <input
                type="text"
                onChange={(e) => settemp(e.target.value)}
                placeholder="Add your Link"
              />
              <button onClick={handleClick}>Generate</button>
            </div>
          </div>

          <div className="important">
            <div className="qrcodeinput">
              <span>
                {" "}
                <label>Backgorund Color</label>{" "}
                <input
                  type="color"
                  onChange={(e) => setbgcolor(e.target.value.substring(1))}
                />
              </span>

              <span>
                {" "}
                <label>Dimention</label>
                <input
                  type="range"
                  min={200}
                  max={400}
                  value={size}
                  onChange={(e) => setsize(e.target.value)}
                />
              </span>
            </div>
            <div className="qrcodeImg">
              <img src={qrcode} alt="" />
              <a href={qrcode} download="Qrcode">
                <button type="button">Download</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
