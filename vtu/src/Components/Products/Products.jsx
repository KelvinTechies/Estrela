import React from "react";
import { GiNetworkBars } from "react-icons/gi";
import { MdWifiCalling3 } from "react-icons/md";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { FaRegLightbulb } from "react-icons/fa6";
import abtPh from "../../Images/ZMSLTtmAEjvG.jpeg";
import "./Products.css";
function Products() {
  return (
    <div className="proa">
      <div className="pe">
        <h3>What we Offer</h3>
        <p>
          We offer instant recharge of Airtime, Databundle, CableTV (DStv, GOtv
          & Startimes), Electricity Bill Payment and many more.
        </p>
      </div>
      <div className="pr">
        <div className="products">
          <div className="pr_1">
            <div className="pr_11">
              <GiNetworkBars color="royalblue" fontSize={30} />
              <p>Data</p>
              <span>
                Swiftly purchase Data for all networks at cheap rates with
                instant delivery.
              </span>
              <button>Buy Now</button>
            </div>
          </div>
          <div className="pr_2">
            <div className="pr_12">
              <MdWifiCalling3 color="royalblue" fontSize={30} />
              <p>Airtime</p>
              <span>
                We make Airtime recharge easy and cheap anytime, anywhere.
              </span>
              <br />
              <button>Buy Now</button>
            </div>
          </div>
          <div className="pr_3">
            <div className="pr_13">
              <PiTelevisionSimpleBold color="royalblue" fontSize={30} />
              <p>Cable Subscription</p>
              <span>
                Stay connected! Subscribe and Renew your Tv subscription
                instantly.
              </span>
              <button>Buy Now</button>
            </div>
          </div>
          <div className="pr_4">
            <div className="pr_14">
              <FaRegLightbulb color="royalblue" fontSize={30} />
              <p>Utility Bills</p>
              <span>Enjoy huge discount on Electricity Bill Payment.</span>
              <br />

              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="choose">
        <div className="ch">
          <h3>Why Choose us</h3>
          <p>
            EasyCharge helps you make payments for services you enjoy right from
            the comfort of your home or office. The experience of total
            convenience, fast service delivery and easy payment is just at your
            fingertips.
          </p>
        </div>
        <div className="chw">
          <div className="dcs">
            <h4>Easy Access</h4>
            <p>
              EazyCharge platform is a fully optimized platform for reliability
              and dependability. You get 100% value for any transaction with us.
            </p>
          </div>
          <div className="dcs">
            <h4>Cheap and Reliable</h4>
            <p>
              EazyCharge platform is a fully optimized platform for reliability
              and dependability. You get 100% value for any transaction with us.
            </p>
          </div>
          <div className="dcs">
            <h4> 24/7 Support</h4>
            <p>
              Our customer service is just a click away, don't hesitate to
              contact us on anything as our system is fully automated.
            </p>
          </div>
        </div>
      </div>

      <div className="about">
        <div className="hh4">
          <h4>ABOUT US</h4>
          <p>
            EazyCharge helps you make payments for services you enjoy right from
            the comfort of your home or office. The experience of total
            convenience, fast service delivery and easy payment is just at your
            fingertips. We are playing a major role in the distribution, sales
            of affordable and cheapest data, airtime, Dstv subscription, Gotv
            subscription, Startimes subscription, and Electricity subscription.
          </p>
        </div>

        <div className="myImg">
          <div className="imm">
            <img src={abtPh} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
