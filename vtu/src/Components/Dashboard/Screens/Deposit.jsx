import React from "react";
import { FaWallet } from "react-icons/fa6";
import opay_logo from "../../../dashboardAsset/logos/download-removebg-preview (15).png";
import polaris_logo_1 from "../../../dashboardAsset/logos/download-removebg-preview (16).png";
import polaris_logo from "../../../dashboardAsset/logos/polaris.png";
import { IoStatsChart } from "react-icons/io5";
function Deposit() {
  return (
    <>
      <div className="">
        <div className="">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h2 className="m-0">
                  <FaWallet /> Deposit
                </h2>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="/dashboard">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Deposit</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-body">
              <h5>choose funding Options</h5>
              <div className="bg-info p-5 mt-3">
                <p>Deposit/Transfer Money into our various bank Account(s)</p>
                <p>
                  Your wallet will be{" "}
                  <span className="myfs">Credited Automatically.</span>Note, you
                  will be charged &#x20A6;30 for each transaction, this method
                  does not have minimum funding account
                </p>
              </div>
            </div>
          </div>

          <div className="card ">
            <ul
              className="nav col-md-12 nav-tabs bg-white"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="home-tab-pane"
                  aria-selected="true"
                >
                  Opay
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="profile-tab-pane"
                  aria-selected="false"
                >
                  Polaris Bank
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabIndex={0}
              >
                <div className="card-body ">
                  <h1 className="text-center">
                    <img src={opay_logo} width={150} alt="" /> Opay Acct No.
                  </h1>
                  <div className="alert alert-primary p-1">
                    <p style={{ fontSize: 20 }}>
                      {" "}
                      &#x20A6;30 bank charges apply
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="card-text msr">8070774277</p>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="profile-tab-pane"
                role="tabpanel"
                aria-labelledby="profile-tab"
                tabIndex={0}
              >
                <div className="card-body ">
                  <h1 className="text-center">
                    <img src={polaris_logo} width={150} alt="" /> Acct No.
                  </h1>
                  <div className="alert alert-primary p-1">
                    <p style={{ fontSize: 20 }}>
                      {" "}
                      &#x20A6;30 bank charges apply
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="card-text msr">3115725827</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="card-title">
            <IoStatsChart />
            Deposit Records
          </h3>
        </div>
        <div className="card-body">
          <table id="example1" className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Amount Funded</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Misc</td>
                <td>Dillo 0.8</td>
                <td>Embedded devices</td>
              </tr>
              <tr>
                <td>Misc</td>
                <td>Links</td>
                <td>Text only</td>
              </tr>
              <tr>
                <td>Misc</td>
                <td>Lynx</td>
                <td>Text only</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* /.card-body */}
      </div>
    </>
  );
}

export default Deposit;
