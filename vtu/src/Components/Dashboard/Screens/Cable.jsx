import React from "react";
import dstv_logo from "../../../dashboardAsset/logos/dstv.png";
import gotv_logo from "../../../dashboardAsset/logos/gotv.png";
import startimes_logo from "../../../dashboardAsset/logos/startimes.png";
import { GiPlasmaBolt } from "react-icons/gi";
import { FaTv } from "react-icons/fa6";
import { IoStatsChart } from "react-icons/io5";

function Cable() {
  const startime_used = [
    { id: 1, name: "Nova" },
    { id: 2, name: "Basic" },
    { id: 3, name: "Smart" },
    { id: 4, name: "Classic" },
    { id: 5, name: "Super" },
  ];
  const gotv_used = [
    { id: 1, name: "Smallie" },
    { id: 2, name: "Jinja" },
    { id: 3, name: "Jolli" },
    { id: 4, name: "Max" },
    { id: 5, name: "Supa" },
  ];
  const dstv_used = [
    { id: 1, name: "Great Wall" },
    { id: 2, name: "Padi" },
    { id: 3, name: "Yanga" },
    { id: 4, name: "Confam" },
    { id: 5, name: "Asia" },
    { id: 6, name: "Compact" },
    { id: 7, name: "Compact Plus" },
    { id: 8, name: "Premium" },
    { id: 9, name: "Premium - Asia" },
    { id: 10, name: "Premium-French" },
    { id: 11, name: "Confam + ExtraView" },
    { id: 12, name: "Padi + ExtraView" },
    { id: 13, name: "Compact + Asia" },
    { id: 14, name: "Compact + Extra View" },
    { id: 15, name: "Compact + French Touch" },
    { id: 16, name: "Premium - Extra View" },
    { id: 17, name: "Compact Plus - Asia" },
    { id: 18, name: "Compact + French Touch + ExtraView" },
    { id: 19, name: "Compact + Asia + ExtraView" },
    { id: 20, name: "Compact Plus + French Plus" },
    { id: 21, name: "Compact Plus + French Touch" },
    { id: 22, name: "Compact Plus - Extra View" },
    { id: 23, name: "Compact Plus + FrenchPlus + Extra View" },
    { id: 24, name: "Compact + French Plus" },
    { id: 25, name: "Compact Plus + Asia + ExtraView" },
    { id: 26, name: "Premium + Asia + Extra View" },
    { id: 27, name: "Premium + French + Extra View" },
    { id: 28, name: "French Plus Add-on" },
    { id: 29, name: "Asian Add-on" },
    { id: 30, name: "French Touch Add-on" },
    { id: 31, name: "ExtraView Access" },
    { id: 32, name: "French 11" },
    { id: 33, name: "Yanga + ExtraView" },
    // { id: 29, name: "Compact Plus - Asia" },
  ];
  const cableArr = [
    {
      id: 1,
      cable_name: "DSTV",
      cable_logo: dstv_logo,
    },
    {
      id: 2,
      cable_name: "GOTV",
      cable_logo: gotv_logo,
    },
    {
      id: 3,
      cable_name: "Startimes",
      cable_logo: startimes_logo,
    },
  ];
  return (
    <div>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-5">
            <div className="col-sm-6">
              <h1 className="m-0">
                <FaTv />
                Cable
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
            {cableArr.map((cable, index) => {
              return (
                <>
                  <div
                    key={cable.id}
                    className="card col-md-4  "
                    data-toggle="modal"
                    data-target={`#${cable.cable_name}`} // Use curly braces and backticks for string interpolation
                  >
                    <div className="row align-items-center">
                      <div className="imgbx">
                        <img src={cable.cable_logo} width={100} alt="" />
                      </div>
                      <div className="txt col-md-9">
                        <h4 className="card-text">{cable.cable_name}</h4>
                      </div>
                    </div>
                  </div>

                  {/* modal */}

                  <div className="modal fade" id={cable.cable_name}>
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h4 className="modal-title">{cable.cable_name}</h4>
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
                              <label htmlFor="meter">
                                Smart Card / IUC number
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="meter"
                                placeholder="Enter Smart Card / IUC number"
                              />
                              <input
                                type="text"
                                className="form-control"
                                id=""
                                hidden
                                value={cable.cable_name}
                              />
                            </div>
                          </div>

                          <div className="col-md-12">
                            <div className="form-group">
                              <label>Bouquet/Package</label>
                              <select
                                className="form-control select2bs4 col-md-12"
                                style={{ width: "100%" }}
                              >
                                <option>---Select Product---</option>
                                {cable.id === 1 &&
                                  dstv_used.map((dstv) => {
                                    return (
                                      <>
                                        <option value={dstv.name} key={dstv.id}>
                                          {dstv.name}
                                        </option>
                                      </>
                                    );
                                  })}
                                {cable.id === 2 &&
                                  gotv_used.map((gotv) => {
                                    return (
                                      <>
                                        <option value={gotv.name} key={gotv.id}>
                                          {gotv.name}
                                        </option>
                                      </>
                                    );
                                  })}
                                {cable.id === 3 &&
                                  startime_used.map((startym) => {
                                    return (
                                      <>
                                        <option
                                          value={startym.name}
                                          key={startym.id}
                                        >
                                          {startym.name}
                                        </option>
                                      </>
                                    );
                                  })}
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
        <div className="card mt-5">
          <div className="card-header">
            <h3 className="card-title ">
              <IoStatsChart />
              Cable Subscription Records
            </h3>
          </div>
          <div className="card-body">
            <table id="example1" className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Customer</th>
                  <th>Decoder No</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Misc</td>
                  <td>Dillo 0.8</td>
                  <td>Dillo 0.8</td>
                  <td>Dillo 0.8</td>
                  <td>Dillo 0.8</td>
                  <td>Embedded devices</td>
                </tr>
                <tr>
                  <td>Misc</td>
                  <td>Links</td>
                  <td>Text only</td>
                  <td>Text only</td>
                  <td>Text only</td>
                  <td>Text only</td>
                </tr>
                <tr>
                  <td>Misc</td>
                  <td>Misc</td>
                  <td>Misc</td>
                  <td>Misc</td>
                  <td>Lynx</td>
                  <td>Text only</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* /.card-body */}
        </div>
      </div>
    </div>
  );
}

export default Cable;
