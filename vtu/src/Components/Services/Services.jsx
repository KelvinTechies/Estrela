import React from "react";
import abtPh from "../../Images/ZMSLTtmAEjvG.jpeg";
import "./Services.css";
function Services() {
  return (
    <div className="sercva">
      <div className="mhhh4">
        <h4>our Services</h4>
      </div>
      <div className="services">
        <div className="serv_">
          <div className="ser_img">
            <div className="s_img">
              <img src={abtPh} alt="" />
            </div>
          </div>
          <div className="sd">
            <h4>Buy Data</h4>
            <p>
              Data is life, Don't run out of it. Topup your data instantly with
              a click.
            </p>
          </div>
        </div>
        <div className="serv_">
          <div className="ser_img">
            <div className="s_img">
              <img src={abtPh} alt="" />
            </div>
          </div>
          <div className="sd">
            <h4>CABLE SUBSCRIPTION</h4>
            <p>
              Instant Activation of Cable subscription with favourable discount
            </p>
          </div>
        </div>
        <div className="serv_">
          <div className="ser_img">
            <div className="s_img">
              <img src={abtPh} alt="" />
            </div>
          </div>
          <div className="sd">
            <h4>AIRTIME RECHARGE</h4>
            <p>We make Airtime recharge easy and cheap anytime, anywhere.</p>
          </div>
        </div>
        <div className="serv_">
          <div className="ser_img">
            <div className="s_img">
              <img src={abtPh} alt="" />
            </div>
          </div>
          <div className="sd">
            <h4>UTILITY BILLS</h4>
            <p>Enjoy huge discount on Electricity Bill Payment.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
