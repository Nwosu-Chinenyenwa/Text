import React from 'react'
import "../ui/Img.css"
import img1 from "../assets/microsoft.svg"
import img2 from "../assets/google.svg"
import img3 from "../assets/facebook.svg"
import img4 from "../assets/ibm.svg"

export default function Img() {
  return (
   <>
    <section>
        <div className="imgs">
            <img src={img1} alt="microsoft"/>
            <img src={img2} alt="google"/>
            <img src={img3} alt="facebook"/>
            <img src={img4} alt="ibm"/>
        </div>
    </section>
   </>
  )
}
