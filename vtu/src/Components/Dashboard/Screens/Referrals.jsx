import React from "react";
import { CiShare1, CiShare2, CiWallet } from "react-icons/ci";
import { FaCopy, FaUsers, FaWallet } from "react-icons/fa6";
import referral_img from "../../../dashboardAsset/logos/referrals.png";
import { IoCopyOutline } from "react-icons/io5";
function Referrals() {
  return (
    <div>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-5">
            <div className="col-sm-6 row align-items-center">
              <FaUsers size={30} color="rebeccapurple" />
              <h1 className="m-0 mx-3" style={{ color: "#A384C1" }}>
                Referrals
              </h1>
            </div>
            {/* /.col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="dashboard">Home</a>
                </li>
                <li className="breadcrumb-item active"> Referrals</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 ">
            <div className="card rounded">
              <div className="card-body">
                <div className="row align-items-center justify-content-between">
                  <div className="f mx-5">
                    <FaUsers size={50} color="rebeccapurple" />
                  </div>

                  <div className="r">
                    <p
                      className="card-text"
                      style={{
                        color: "rebeccapurple",
                        fontWeight: 700,
                        fontSize: 50,
                        marginRight: 35,
                      }}
                    >
                      0
                    </p>
                    <h5 style={{ color: "#A384C1" }}>Referrals</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="card rounded">
              <div className="card-body">
                <div className="row align-items-center justify-content-between">
                  <div className="f mx-5">
                    <CiWallet size={50} color="rebeccapurple" />
                  </div>

                  <div className="r">
                    <p
                      className="card-text"
                      style={{
                        color: "rebeccapurple",
                        fontWeight: 700,
                        fontSize: 50,
                        marginRight: 35,
                      }}
                    >
                      &#x20A6;0
                    </p>
                    <h5 style={{ color: "#A384C1" }}>Wallet Ballance</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <img src={referral_img} alt="" className="" />
            <div className="mt-5">
              <h3 style={{ fontWeight: 700 }}>Invite & Earn</h3>
              <div className="ep" style={{ color: "#A145FD", fontWeight: 600 }}>
                Earn Bonuses when your friend(s) sign(s) up with Estrela{" "}
              </div>
              <div className="form-group">
                <label>Your Referral Link:</label>
                <div
                  className="input-group date"
                  id="reservationdate"
                  data-target-input="nearest"
                >
                  <input
                    type="text"
                    className="form-control datetimepicker-input"
                    data-target="#reservationdate"
                  />
                  <div
                    className="input-group-append"
                    /* data-target="#reservationdate"
                    data-toggle="datetimepicker" */
                  >
                    <div className="input-group-text">
                      <IoCopyOutline />
                    </div>
                    <div className="input-group-text">
                      {/* <i className="fa fa-calendar" /> */}
                      <CiShare2 />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-block btn-outline-primary btn-lg"
                  >
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card col-md-6">
            <div className="card-header">
              <h3 className="card-title">Recent Referrals</h3>
            </div>
            <div className="card-body">
              <table
                id="example1"
                className="table table-bordered table-striped"
              >
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Misc</td>
                    <td>Embedded devices</td>
                  </tr>
                  <tr>
                    <td>Misc</td>
                    <td>Links</td>
                  </tr>
                  <tr>
                    <td>Misc</td>
                    <td>Lynx</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* /.card-body */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Referrals;
