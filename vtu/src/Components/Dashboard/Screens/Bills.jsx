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
  const BillsArray = [
    {
      id: 1,
      bill_logo: aedc_logo,
      bill_name: "Abuja Electricity",
      bill_used:
        "Pay Abuja, Niger State, Kogi State, and Nassarawa State PHCNBills",
    },

    {
      id: 2,
      bill_logo: ekedc_logo,
      bill_name: "Eko Electricity",
      bill_used: "Pay Eko PHCN Bills",
    },
    {
      id: 3,
      bill_logo: bedc_logo,
      bill_name: "Benin City Electricity",
      bill_used:
        "Pay Edo State, Delta State, Ekiti State, and Ondo State PHCN Bills",
    },
    {
      id: 4,
      bill_logo: phed_logo,
      bill_name: "Portharcourt Electricity",
      bill_used: "Pay Rivers, Bayelsa, Cross River and Akwa Ibom PHCN Bills",
    },
    {
      id: 5,
      bill_logo: kaedco_logo,
      bill_name: "Kano Electricity",
      bill_used: "Pay Kano, Katsina, and Jigawa states PHCN Bills",
    },
    {
      id: 6,
      bill_logo: eedc_logo,
      bill_name: "Enugu Electricity",
      bill_used: "Pay Abia, Anambra, Ebonyi, Enugu and Imo State PHCN Bills",
    },
    {
      id: 7,
      bill_logo: jed_logo,
      bill_name: "Jos Electricity",
      bill_used: "Pay Plateau, Gombe, Bauchi and Benue States PHCN Bills",
    },
    {
      id: 8,
      bill_logo: ibedc_logo,
      bill_name: "Ibadan Electricity",
      bill_used:
        "Pay Kwara, Ogun, Osun and Oyo states and some parts of Ekiti, Kogi, and Niger states PHCN Bills",
    },
    {
      id: 9,
      bill_logo: ikeja_logo,
      bill_name: "Ikeja Electricity",
      bill_used: "Pay Ikeja PHCN Bills",
    },
    {
      id: 10,
      bill_logo: kaduna_logo,
      bill_name: "Kaduna Electricity",
      bill_used: "Pay Kaduna, Kebbi, Sokoto and Zamfara States PHCN Bills",
    },
  ];
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
        <div className="row col-md-12 m-auto  ">
          {BillsArray.map((utility) => {
            return (
              <>
                {/*  <div
                  className="card col-md-4 p-3"
                  data-toggle="modal"
                  data-target={`#${utility.bill_name}`}
                >
                  <div className="row ">
                    <div className="imgbx">
                      <img src={utility.bill_logo} width={100} alt="" />
                    </div>
                    <div className="txt col-md-9">
                      <h4 className="card-text">{utility.bill_name}</h4>
                      <p className="card-text" style={{ fontWeight: "700" }}>
                        {utility.bill_used}
                      </p>
                    </div>
                  </div>
                </div> */}
                <div
                  className="card col-md-4  "
                  data-toggle="modal"
                  data-target={`#${utility.bill_name}`} // Use curly braces and backticks for string interpolation
                  // data-target={`#${utility.bill_name}`} // Use curly braces and backticks for string interpolation
                >
                  <div className="row ">
                    <div className="imgbx">
                      <img src={utility.bill_logo} width={100} alt="" />
                    </div>
                    <div className="txt col-md-9">
                      <h4 className="card-text">{utility.bill_name}</h4>
                      <p className="card-text" style={{ fontWeight: "700" }}>
                        {utility.bill_used}
                      </p>
                    </div>
                  </div>
                </div>

                {/* modal */}

                <div className="modal fade" id={utility.bill_name}>
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title">{utility.bill_name}</h4>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="meter">Meter Number</label>
                            <input
                              type="text"
                              className="form-control"
                              id="meter"
                              placeholder="Enter Meter Number"
                            />
                            <input
                              type="text"
                              className="form-control"
                              id=""
                              // hidden
                              value={utility.bill_name}
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Variation</label>
                            <select
                              className="form-control select2bs4 col-md-12"
                              style={{ width: "100%" }}
                            >
                              <option>Prepaid</option>
                              <option>Postpaid</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="exampleInputPassword1">
                              Transaction Pin
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="exampleInputPassword1"
                              placeholder="Enter Transaction Pin"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer justify-content-between">
                        <button
                          type="button"
                          className="btn btn-default"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-success">
                          Verify
                        </button>
                      </div>
                    </div>
                    {/* /.modal-content */}
                  </div>
                  {/* /.modal-dialog */}
                </div>
              </>
            );
          })}

          {/*  <div
            className="card col-md-4 p-3"
            data-toggle="modal"
            data-target="#modal-default-eko"
          >
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
          </div> */}
        </div>
        {/* <div className="row col-md-12 mt-4 justify-content-around">
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
        </div> */}
      </div>
    </div>
  );
}

export default Bills;
