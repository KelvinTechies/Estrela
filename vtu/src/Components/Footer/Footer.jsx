import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="foot">
          <div className="hhh4">
            <h4>EazyCharge</h4>
            <p>
              We offer instant recharge of Airtime, Databundle, CableTV (DStv,
              GOtv & Startimes), Electricity Bill Payment
            </p>
          </div>
          <div className="QL">
            <h4>Quick Links</h4>

            <div className="qll">
              <ul>
                <li>Buy Data</li>
                <li>Buy Airtime</li>
                <li>Cable Subscription</li>
                <li>Buy Payment</li>
              </ul>
            </div>
          </div>

          <div className="conct">
            <div className="conc">
              <h4>Contact</h4>

              <div className="fa">
                <FaPhone />
                08162942636
              </div>
              <div className="fa">
                <MdEmail />
                <p>info@eazycharge.com.ng</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
