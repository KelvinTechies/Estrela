import React from "react";
import { CiMobile1 } from "react-icons/ci";
import { IoStatsChart } from "react-icons/io5";

function Airtime() {
  const airtimeProvider = [
    {
      id: 1,
      name: "Mtn",
    },
    {
      id: 2,
      name: "Glo",
    },
    {
      id: 3,
      name: "Airtel",
    },
    {
      id: 3,
      name: "9Mobile",
    },
  ];
  return (
    <div>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-5">
            <div className="col-sm-6">
              <h1 className="m-0">
                <CiMobile1 />
                Airtime
              </h1>
            </div>
            {/* /.col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Airtime Purchase</li>
              </ol>
            </div>
          </div>

          <div className="card col-md-6 m-auto p-4 mt-4">
            <ul className="nav  nav-tabs bg-white" id="myTab" role="tablist">
              <li className="nav-item " role="presentation">
                <button
                  className="nav-link hover-effect  btn btn-block btn-outline-info btn-lg"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="home-tab-pane"
                  aria-selected="true"
                >
                  For Me
                </button>
              </li>
              <li className="nav-item " role="presentation">
                <button
                  className="nav-link hover-effect btn btn-block btn-outline-info btn-lg "
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="profile-tab-pane"
                  aria-selected="false"
                >
                  For Others
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
                <div className="card   mt-3">
                  <div className="card-body ">
                    <div className="">
                      <form>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="exampleInputPassword1">
                              Phone number
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="exampleInputPassword1"
                              placeholder="Enter Phone number"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Network</label>
                            <select
                              className="form-control select2bs4 col-md-12"
                              style={{ width: "100%" }}
                            >
                              <option selected="selected">
                                Select Network
                              </option>
                              {airtimeProvider.map((airtime) => {
                                return (
                                  <>
                                    <option
                                      key={airtime.id}
                                      value={airtime.name}
                                    >
                                      {airtime.name}
                                    </option>
                                  </>
                                );
                              })}
                            </select>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="amount">Amount</label>
                            <input
                              type="number"
                              className="form-control"
                              id="amount"
                              placeholder="Enter Amount"
                            />
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
                        <button
                          type="submit"
                          className="btn btn-block btn-outline-success btn-lg"
                        >
                          Buy Airtime
                        </button>
                      </form>
                    </div>
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
                <div className="card   mt-3">
                  <div className="card-body ">
                    <div className="">
                      <form>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="exampleInputPassword1">
                              Phone number
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="exampleInputPassword1"
                              placeholder="Enter Phone number"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Network</label>
                            <select
                              className="form-control select2bs4 col-md-12"
                              style={{ width: "100%" }}
                            >
                              <option selected="selected">
                                Select Network
                              </option>
                              {airtimeProvider.map((airtime) => {
                                return (
                                  <>
                                    <option
                                      key={airtime.id}
                                      value={airtime.name}
                                    >
                                      {airtime.name}
                                    </option>
                                  </>
                                );
                              })}
                            </select>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="amount">Amount</label>
                            <input
                              type="number"
                              className="form-control"
                              id="amount"
                              placeholder="Enter Amount"
                            />
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
                        <button
                          type="submit"
                          className="btn btn-block btn-outline-success btn-lg"
                        >
                          Buy Airtime
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card mt-5">
            <div className="card-header">
              <h3 className="card-title ">
                <IoStatsChart />
                Deposit Records
              </h3>
            </div>
            <div className="card-body">
              <table
                id="example1"
                className="table table-bordered table-striped"
              >
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Plan</th>
                    <th>Price</th>
                    <th>Phone No</th>
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
    </div>
  );
}

export default Airtime;
