import React, { useState, useEffect, useRef } from "react";
import "../ui/Qrcode.css";
import { useInView, motion } from "framer-motion";

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
  const ref = useRef(null);
  const review = useInView(ref, { once: true });
  return (
    <>
      <section id="Qrcode">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={review ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="Accordion-Item"
        >
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
        </motion.div>
      </section>
    </>
  );
}
