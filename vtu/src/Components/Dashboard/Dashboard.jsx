import React from "react";
import gyal from "../../Images/wepik-export-20231123121334yJG6.png";
import { MdNetworkCell, MdNotifications, MdWifiCalling3 } from "react-icons/md";
import "./Dashboard.css";
import { GiNetworkBars } from "react-icons/gi";
import { IoTvSharp } from "react-icons/io5";
import {
  FaEye,
  FaEyeSlash,
  FaIdCard,
  FaMobile,
  FaMobileButton,
  FaPhone,
  FaPhoneFlip,
  FaRegLightbulb,
  FaUser,
  FaWallet,
} from "react-icons/fa6";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { CiMobile2 } from "react-icons/ci";
function Dashboard() {
  return (
    <>
      <div className="">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Dashboard</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Dashboard</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <section className="content">
          <div className="container-fluid">
            <div className="row d-flex justify-content-space-around">
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-white">
                  <div className="inner">
                    <h3>Wallet</h3>
                    <div className="round_d row align-items-center justify-content-center">
                      <FaWallet />
                    </div>
                  </div>
                  <div className="icon">
                    <i className="ion ion-person-add" />
                  </div>
                  {/*  <a href="#" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </a> */}
                </div>
              </div>
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-white">
                  <div className="inner">
                    <h3>Verified</h3>
                    <div className="round_d row align-items-center justify-content-center">
                      <FaIdCard />
                    </div>
                  </div>
                  <div className="icon">
                    <i className="ion ion-person-add" />
                  </div>
                  {/*  <a href="#" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </a> */}
                </div>
              </div>
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-white">
                  <div className="inner">
                    <h3>Referrals</h3>
                    <div className="round_d  row align-items-center justify-content-center">
                      <FaUser />
                    </div>
                  </div>
                  <div className="icon">
                    <i className="ion ion-stats-bars" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-white">
                  <div className="inner">
                    <h3>Transactions</h3>
                    <div className="round_d row align-items-center justify-content-center">
                      <FaUser />
                    </div>
                  </div>
                  <div className="icon">
                    <i className="ion ion-person-add" />
                  </div>
                  {/*  <a href="#" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content">
          {/* <div className="container-fluid"> */}
          <div className="row  justify-content-around ">
            <div className="card text-center col-md-7">
              <div className="card-header">
                <h3>Quick Access</h3>
              </div>
              <div className="row  p-4">
                <div className="col-md-6 ">
                  <div className="card text-center ">
                    <div className="card-body ">
                      <h5 className="card-title">AIRTIME</h5>
                      <p className="card-text">
                        <CiMobile2 size={40} />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">SME DATA</h5>
                      <p className="card-text">
                        <GiNetworkBars size={40} />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row  p-4">
                <div className="col-md-6 ">
                  <div className="card text-center ">
                    <div className="card-body ">
                      <h5 className="card-title">Cable</h5>
                      <p className="card-text">
                        <PiTelevisionSimpleBold size={40} />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Electricity</h5>
                      <p className="card-text">
                        <FaRegLightbulb size={40} />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" col-md-4">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-body">
                    <h3 className="">Commissions</h3>
                    <p className="card-text cm_b">
                      <span className="span">N</span>200
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </section>
      </div>
    </>
  );
}

export default Dashboard;
