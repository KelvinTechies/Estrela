import React from "react";
import gyal from "../../Images/wepik-export-20231123121334yJG6.png";
import mtn from "../../Images/New-mtn-logo.jpg";
import nm from "../../Images/9-mobile.jpeg";
import glo from "../../Images/Globacom_Glo-Mobile-Nigeria-Logo-removebg-preview.png";
import airtel from "../../Images/1604481877-59-airtel-nigeria-customer-care.jpg";
import "./Hero.css";
function Hero() {
  return (
    <div>
      <div className="banner">
        <div className="banw">
          <div className="ban_1">
            <h1>Welcome to EazyCharge</h1>
            <p>
              A one stop shop for instant recharge of Airtime, Data, TV &
              Electricity bill payments, Conversion and many more.
            </p>
          </div>

          <div className="ban_2">
            <div className="ifd">
              <div className="imgBx">
                <div className="img">
                  <img src={gyal} alt="" />
                </div>
              </div>
              <div className="bd">
                <img className="mtn" src={mtn} alt="" />
              </div>
              <div className="ar">
                <img className="airtel" src={airtel} alt="" />
              </div>
              <div className="gl">
                <img className="glo" src={glo} alt="" />
              </div>
              <div className="nm">
                <img className="nm" src={nm} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
