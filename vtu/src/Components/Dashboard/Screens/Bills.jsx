import React from "react";
import { IoBulbOutline } from "react-icons/io5";
import aedc_logo from "../../../dashboardAsset/logos/aedc.png";
import ekedc_logo from "../../../dashboardAsset/logos/ekedc.png";
import bedc_logo from "../../../dashboardAsset/logos/bedc.png";
import ibedc_logo from "../../../dashboardAsset/logos/ibedc.png";
import ikeja_logo from "../../../dashboardAsset/logos/ikeja.png";
import kaduna_logo from "../../../dashboardAsset/logos/kaduna.png";
import phed_logo from "../../../dashboardAsset/logos/phed.png";
import kaedco_logo from "../../../dashboardAsset/logos/kaedco.png";
import eedc_logo from "../../../dashboardAsset/logos/eedc.png";
import jed_logo from "../../../dashboardAsset/logos/jed.png";

function Bills() {
  return (
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-5">
          <div className="col-sm-6">
            <h1 className="m-0">
              <IoBulbOutline />
              Utility Bill
            </h1>
          </div>
          {/* /.col */}
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item">
                <a href="/dashboard">Home</a>
              </li>
              <li className="breadcrumb-item active">Utility Bill Payment</li>
            </ol>
          </div>
        </div>
        <div className="row col-md-12  justify-content-around">
          <div className="card col-md-4 p-3">
            <div className="row ">
              <div className="imgbx">
                <img src={aedc_logo} width={100} alt="" />
              </div>
              <div className="txt col-md-9">
                <h4 className="card-text">Abuja Electricity</h4>
                <p className="card-text" style={{ fontWeight: "700" }}>
                  Pay Abuja, Niger State, Kogi State, and Nassarawa State PHCN
                  Bills
                </p>
              </div>
            </div>
          </div>
          <div className="card col-md-4 p-3">
            <div className="row ">
              <div className="imgbx">
                <img src={ekedc_logo} width={100} alt="" />
              </div>
              <div className="txt col-md-9">
                <h4 className="card-text">Eko Electricity</h4>
                <p className="card-text" style={{ fontWeight: "700" }}>
                  Pay Eko PHCN Bills
                </p>
              </div>
            </div>
          </div>
          <div className="card col-md-4 p-3">
            <div className="row ">
              <div className="imgbx">
                <img src={bedc_logo} width={100} alt="" />
              </div>
              <div className="txt col-md-9">
                <h4 className="card-text">Benin City Electricity</h4>
                <p className="card-text" style={{ fontWeight: "700" }}>
                  Pay Edo State, Delta State, Ekiti State, and Ondo State PHCN
                  Bills
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row col-md-12 mt-4 justify-content-around">
          <div className="card col-md-4 p-3">
            <div className="row ">
              <div className="imgbx">
                <img src={ibedc_logo} width={100} alt="" />
              </div>
              <div className="txt col-md-9">
                <h4 className="card-text">Ibadan Electricity</h4>
                <p className="card-text" style={{ fontWeight: "700" }}>
                  Pay Kwara, Ogun, Osun and Oyo states and some parts of Ekiti,
                  Kogi and Niger states PHCN Bills
                </p>
              </div>
            </div>
          </div>
          <div className="card col-md-4 p-3">
            <div className="row ">
              <div className="imgbx">
                <img src={ikeja_logo} width={100} alt="" />
              </div>
              <div className="txt col-md-9">
                <h4 className="card-text">Ikeja Electricity</h4>
                <p className="card-text" style={{ fontWeight: "700" }}>
                  Pay Ikeja PHCN Bills
                </p>
              </div>
            </div>
          </div>
          <div className="card col-md-4 p-3">
            <div className="row ">
              <div className="imgbx">
                <img src={kaduna_logo} width={100} alt="" />
              </div>
              <div className="txt col-md-9">
                <h4 className="card-text">Kaduna Electricity</h4>
                <p className="card-text" style={{ fontWeight: "700" }}>
                  Pay Kaduna, Kebbi, Sokoto and Zamfara States PHCN Bills
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row col-md-12 mt-4 justify-content-around">
          <div className="card col-md-4 p-3">
            <div className="row ">
              <div className="imgbx">
                <img src={phed_logo} width={100} alt="" />
              </div>
              <div className="txt col-md-9">
                <h4 className="card-text">PortHarcourt Electricity</h4>
                <p className="card-text" style={{ fontWeight: "700" }}>
                  Pay Rivers, Bayelsa, Cross River and Akwa Ibom PHCN Bills
                </p>
              </div>
            </div>
          </div>
          <div className="card col-md-4 p-3">
            <div className="row ">
              <div className="imgbx">
                <img src={kaedco_logo} width={100} alt="" />
              </div>
              <div className="txt col-md-9">
                <h4 className="card-text">Kano Electricity</h4>
                <p className="card-text" style={{ fontWeight: "700" }}>
                  Pay Kano, Katsina, and Jigawa states PHCN Bills
                </p>
              </div>
            </div>
          </div>
          <div className="card col-md-4 p-3">
            <div className="row ">
              <div className="imgbx">
                <img src={eedc_logo} width={100} alt="" />
              </div>
              <div className="txt col-md-9">
                <h4 className="card-text">Enugu Electricity</h4>
                <p className="card-text" style={{ fontWeight: "700" }}>
                  Pay Abia, Anambra, Ebonyi, Enugu and Imo State PHCN Bills
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row col-md-12 mt-4 ">
          <div className="card col-md-4 p-3">
            <div className="row ">
              <div className="imgbx">
                <img src={jed_logo} width={100} alt="" />
              </div>
              <div className="txt col-md-9">
                <h4 className="card-text">Jos Electricity</h4>
                <p className="card-text" style={{ fontWeight: "700" }}>
                  Pay Plateau, Gombe, Bauchi and Benue States PHCN Bills
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bills;
