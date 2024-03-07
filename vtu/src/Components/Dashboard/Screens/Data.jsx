import React, { useState } from "react";
import { CiMobile1 } from "react-icons/ci";
import { IoStatsChart } from "react-icons/io5";

function Data() {
  const [select, setSelect] = useState();
  const [anotherSelect, setAnotherSelect] = useState();
  const networkProvider = [
    {
      id: 1,
      name: "Mtn",
      smes: [
        "  500MB - 30 Days",
        "1GB - 30 Days",
        " 2GB - 30 Days",
        "  3GB - 30 Days",
        "  5GB - 30 Days",
        " 10GB - 30 Days",
      ],
    },
    {
      id: 2,
      name: "Glo",
      smes: [
        "  500MB (Gift) - 30 Days",
        "1GB (Gift) - 30 Days",
        "2GB (Gift) - 30 Days",
        "  3GB (Gift) - 30 Days",
        "  5GB (Gift) - 30 Days",
        " 10GB (Gift) - 30 Days",
      ],
    },
    {
      id: 3,
      name: "Airtel",
      smes: [
        "  500MB (Gift) - 30 Days",
        "1GB (Gift) - 30 Days",
        "2GB (Gift) - 30 Days",
        "  3GB (Gift) - 30 Days",
        "  5GB (Gift) - 30 Days",
        " 10GB (Gift) - 30 Days",
        " 15GB (Gift) - 30 Days",
        " 20GB (Gift) - 30 Days",
        "2GB - 30 Days",
        "3GB - 30 Days",
        "10GB - 30 Days",
        "20GB - 30 Days",
        "40GB - 30 Days",
        "750MB - 14 Days",
        "1.5GB - 30 Days",
        "4.5GB - 30 Days",
      ],
    },
    {
      id: 3,
      name: "9Mobile",
      smes: ["2.5GB - 30 Days", "11.5GB - 30 Days", "15GB - 30 Days"],
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
                Data
              </h1>
            </div>
            {/* /.col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Data Purchase</li>
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
                              Network
                            </label>
                            <select
                              onChange={(e) => setSelect(e.target.value)}
                              id="network"
                              className="form-control select2bs4 col-md-12"
                              name="attribute_network"
                              data-attribute_name="attribute_network"
                              data-show_option_none="yes"
                            >
                              <option value="">Choose Network</option>
                              {networkProvider.map((p) => {
                                return (
                                  <>
                                    <option
                                      value={p.name}
                                      className="attached enabled"
                                    >
                                      {p.name}
                                    </option>
                                  </>
                                );
                              })}
                            </select>
                          </div>
                        </div>

                        {select === "Mtn" && (
                          <div className="col-md-12">
                            <div className="form-group">
                              <label>Network</label>
                              <select
                                id="data-plan"
                                className="form-control select2bs4 col-md-12"
                                name="attribute_data-plan"
                                data-attribute_name="attribute_data-plan"
                                data-show_option_none="yes"
                                style={{ width: "100%" }}
                              >
                                <option value="">Choose Data Plan</option>
                                <option
                                  value="500MB - 30 Days"
                                  className="attached enabled"
                                >
                                  500MB - 30 Days
                                </option>
                                <option
                                  value="1GB - 30 Days"
                                  className="attached enabled"
                                >
                                  1GB - 30 Days
                                </option>
                                <option
                                  value="2GB - 30 Days"
                                  className="attached enabled"
                                >
                                  2GB - 30 Days
                                </option>
                                <option
                                  value="3GB - 30 Days"
                                  className="attached enabled"
                                >
                                  3GB - 30 Days
                                </option>
                                <option
                                  value="5GB - 30 Days"
                                  className="attached enabled"
                                >
                                  5GB - 30 Days
                                </option>
                                <option
                                  value="10GB - 30 Days"
                                  className="attached enabled"
                                >
                                  10GB - 30 Days
                                </option>
                              </select>
                            </div>
                          </div>
                        )}

                        {select === "Glo" && (
                          <div className="col-md-12">
                            <div className="form-group">
                              <label>Data Plan</label>
                              <select
                                id="data-plan"
                                className="form-control select2bs4 col-md-12"
                                name="attribute_data-plan"
                                data-attribute_name="attribute_data-plan"
                                data-show_option_none="yes"
                                style={{ width: "100%" }}
                              >
                                <option value="">Choose Data Plan</option>
                                <option
                                  value="500MB (Gift) - 30 Days"
                                  className="attached enabled"
                                >
                                  500MB (Gift) - 30 Days
                                </option>
                                <option
                                  value="1GB (Gift) - 30 Days"
                                  className="attached enabled"
                                >
                                  1GB (Gift) - 30 Days
                                </option>
                                <option
                                  value="2GB (Gift) - 30 Days"
                                  className="attached enabled"
                                >
                                  2GB (Gift) - 30 Days
                                </option>
                                <option
                                  value="3GB (Gift) - 30 Days"
                                  className="attached enabled"
                                >
                                  3GB (Gift) - 30 Days
                                </option>
                                <option
                                  value="5GB (Gift) - 30 Days"
                                  className="attached enabled"
                                >
                                  5GB (Gift)- 30 Days
                                </option>
                                <option
                                  value="10GB (Gift) - 30 Days"
                                  className="attached enabled"
                                >
                                  10GB (Gift) - 30 Days
                                </option>
                              </select>
                            </div>
                          </div>
                        )}
                        {select === "Airtel" && (
                          <div className="col-md-12">
                            <div className="form-group">
                              <label>Data Plan</label>
                              <select
                                id="data-plan"
                                className="form-control select2bs4 col-md-12"
                                name="attribute_data-plan"
                                data-attribute_name="attribute_data-plan"
                                data-show_option_none="yes"
                                style={{ width: "100%" }}
                              >
                                <option value="">Choose Data Plan</option>
                                <option
                                  value="500MB (Gift) - 30 Days"
                                  className="attached enabled"
                                >
                                  500MB (Gift) - 30 Days
                                </option>
                                <option
                                  value="1GB (Gift) - 30 Days"
                                  className="attached enabled"
                                >
                                  1GB (Gift) - 30 Days
                                </option>
                                <option
                                  value="2GB (Gift) - 30 Days"
                                  className="attached enabled"
                                >
                                  2GB (Gift) - 30 Days
                                </option>
                                <option
                                  value="3GB (Gift) - 30 Days"
                                  className="attached enabled"
                                >
                                  3GB (Gift) - 30 Days
                                </option>
                                <option
                                  value="5GB (Gift) - 30 Days"
                                  className="attached enabled"
                                >
                                  5GB (Gift)- 30 Days
                                </option>
                                <option
                                  value="10GB (Gift) - 30 Days"
                                  className="attached enabled"
                                >
                                  10GB (Gift) - 30 Days
                                </option>
                                <option
                                  value="15GB (Gift) - 30 Days"
                                  className="attached enabled"
                                >
                                  15GB (Gift) - 30 Days
                                </option>
                                <option
                                  value="20GB (Gift) - 30 Days"
                                  className="attached enabled"
                                >
                                  20GB (Gift) - 30 Days
                                </option>
                                <option
                                  value="2GB  - 30 Days"
                                  className="attached enabled"
                                >
                                  2GB - 30 Days
                                </option>
                                <option
                                  value="3GB  - 30 Days"
                                  className="attached enabled"
                                >
                                  3GB - 30 Days
                                </option>
                                <option
                                  value="10GB   - 30 Days"
                                  className="attached enabled"
                                >
                                  10GB - 30 Days
                                </option>
                                <option
                                  value="20GB  - 30 Days"
                                  className="attached enabled"
                                >
                                  20GB - 30 Days
                                </option>
                                <option
                                  value="40GB  - 30 Days"
                                  className="attached enabled"
                                >
                                  40GB - 30 Days
                                </option>
                                <option
                                  value="750MB  - 14 Days"
                                  className="attached enabled"
                                >
                                  750MB - 14 Days
                                </option>
                                <option
                                  value="1.5GB  - 30 Days"
                                  className="attached enabled"
                                >
                                  1.5GB - 30 Days
                                </option>
                                <option
                                  value="4.5GB  - 30 Days"
                                  className="attached enabled"
                                >
                                  4.5GB - 30 Days
                                </option>
                              </select>
                            </div>
                          </div>
                        )}
                        {select === "9Mobile" && (
                          <div className="col-md-12">
                            <div className="form-group">
                              <label>Network</label>
                              <select
                                id="data-plan"
                                className="form-control select2bs4 col-md-12"
                                name="attribute_data-plan"
                                data-attribute_name="attribute_data-plan"
                                data-show_option_none="yes"
                                style={{ width: "100%" }}
                              >
                                <option value="">Choose Data Plan</option>
                                <option
                                  value="2.5GB - 30 Days"
                                  className="attached enabled"
                                >
                                  2.5GB - 30 Days
                                </option>
                                <option
                                  value="11.5GB - 30 Days"
                                  className="attached enabled"
                                >
                                  11.5GB - 30 Days
                                </option>
                                <option
                                  value="15GB - 30 Days"
                                  className="attached enabled"
                                >
                                  15GB - 30 Days
                                </option>
                              </select>
                            </div>
                          </div>
                        )}

                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="exampleInputPassword1">
                              Phone Number
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
                          Buy Data
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
                              Network
                            </label>
                            <select
                              onChange={(e) => setAnotherSelect(e.target.value)}
                              id="network"
                              className="form-control select2bs4 col-md-12"
                              name="attribute_network"
                              data-attribute_name="attribute_network"
                              data-show_option_none="yes"
                            >
                              <option value="">Choose Network</option>
                              {networkProvider.map((p) => {
                                return (
                                  <>
                                    <option
                                      value={p.name}
                                      className="attached enabled"
                                    >
                                      {p.name}
                                    </option>
                                  </>
                                );
                              })}
                            </select>
                          </div>
                        </div>

                        {anotherSelect === "Mtn" && (
                          <div className="col-md-12">
                            <div className="form-group">
                              <label>Network</label>
                              <select
                                id="data-plan"
                                className="form-control select2bs4 col-md-12"
                                name="attribute_data-plan"
                                data-attribute_name="attribute_data-plan"
                                data-show_option_none="yes"
                                style={{ width: "100%" }}
                              >
                                <option value="">Choose Data Plan</option>
                                <option
                                  value="500MB - 30 Days"
                                  className="attached enabled"
                                >
                                  500MB - 30 Days
                                </option>
                                <option
                                  value="1GB - 30 Days"
                                  className="attached enabled"
                                >
                                  1GB - 30 Days
                                </option>
                                <option
                                  value="2GB - 30 Days"
                                  className="attached enabled"
                                >
                                  2GB - 30 Days
                                </option>
                                <option
                                  value="3GB - 30 Days"
                                  className="attached enabled"
                                >
                                  3GB - 30 Days
                                </option>
                                <option
                                  value="5GB - 30 Days"
                                  className="attached enabled"
                                >
                                  5GB - 30 Days
                                </option>
                                <option
                                  value="10GB - 30 Days"
                                  className="attached enabled"
                                >
                                  10GB - 30 Days
                                </option>
                              </select>
                            </div>
                          </div>
                        )}

                        {anotherSelect === "Glo" && (
                          <div className="col-md-12">
                            <div className="form-group">
                              <label>Data Plan</label>
                              <select
                                id="data-plan"
                                className="form-control select2bs4 col-md-12"
                                name="attribute_data-plan"
                                data-attribute_name="attribute_data-plan"
                                data-show_option_none="yes"
                                style={{ width: "100%" }}
                              >
                                <option value="">Choose Data Plan</option>
                                <option
                                  value="500MB (Gift) - 30 Days"
                                  className="attached enabled"
                                >
                                  500MB (Gift) - 30 Days
                                </option>
                                <option
                                  value="1GB (Gift) - 30 Days"
                                  className="attached enabled"
                                >
                                  1GB (Gift) - 30 Days
                                </option>
                                <option
                                  value="2GB (Gift) - 30 Days"
                                  className="attached enabled"
                                >
                                  2GB (Gift) - 30 Days
                                </option>
                                <option
                                  value="3GB (Gift) - 30 Days"
                                  className="attached enabled"
                                >
                                  3GB (Gift) - 30 Days
                                </option>
                                <option
                                  value="5GB (Gift) - 30 Days"
                                  className="attached enabled"
                                >
                                  5GB (Gift)- 30 Days
                                </option>
                                <option
                                  value="10GB (Gift) - 30 Days"
                                  className="attached enabled"
                                >
                                  10GB (Gift) - 30 Days
                                </option>
                              </select>
                            </div>
                          </div>
                        )}
                        {anotherSelect === "Airtel" && (
                          <div className="col-md-12">
                            <div className="form-group">
                              <label>Data Plan</label>
                              <select
                                id="data-plan"
                                className="form-control select2bs4 col-md-12"
                                name="attribute_data-plan"
                                data-attribute_name="attribute_data-plan"
                                data-show_option_none="yes"
                                style={{ width: "100%" }}
                              >
                                <option value="">Choose Data Plan</option>
                                <option
                                  value="500MB (Gift) - 30 Days"
                                  className="attached enabled"
                                >
                                  500MB (Gift) - 30 Days
                                </option>
                                <option
                                  value="1GB (Gift) - 30 Days"
                                  className="attached enabled"
                                >
                                  1GB (Gift) - 30 Days
                                </option>
                                <option
                                  value="2GB (Gift) - 30 Days"
                                  className="attached enabled"
                                >
                                  2GB (Gift) - 30 Days
                                </option>
                                <option
                                  value="3GB (Gift) - 30 Days"
                                  className="attached enabled"
                                >
                                  3GB (Gift) - 30 Days
                                </option>
                                <option
                                  value="5GB (Gift) - 30 Days"
                                  className="attached enabled"
                                >
                                  5GB (Gift)- 30 Days
                                </option>
                                <option
                                  value="10GB (Gift) - 30 Days"
                                  className="attached enabled"
                                >
                                  10GB (Gift) - 30 Days
                                </option>
                                <option
                                  value="15GB (Gift) - 30 Days"
                                  className="attached enabled"
                                >
                                  15GB (Gift) - 30 Days
                                </option>
                                <option
                                  value="20GB (Gift) - 30 Days"
                                  className="attached enabled"
                                >
                                  20GB (Gift) - 30 Days
                                </option>
                                <option
                                  value="2GB  - 30 Days"
                                  className="attached enabled"
                                >
                                  2GB - 30 Days
                                </option>
                                <option
                                  value="3GB  - 30 Days"
                                  className="attached enabled"
                                >
                                  3GB - 30 Days
                                </option>
                                <option
                                  value="10GB   - 30 Days"
                                  className="attached enabled"
                                >
                                  10GB - 30 Days
                                </option>
                                <option
                                  value="20GB  - 30 Days"
                                  className="attached enabled"
                                >
                                  20GB - 30 Days
                                </option>
                                <option
                                  value="40GB  - 30 Days"
                                  className="attached enabled"
                                >
                                  40GB - 30 Days
                                </option>
                                <option
                                  value="750MB  - 14 Days"
                                  className="attached enabled"
                                >
                                  750MB - 14 Days
                                </option>
                                <option
                                  value="1.5GB  - 30 Days"
                                  className="attached enabled"
                                >
                                  1.5GB - 30 Days
                                </option>
                                <option
                                  value="4.5GB  - 30 Days"
                                  className="attached enabled"
                                >
                                  4.5GB - 30 Days
                                </option>
                              </select>
                            </div>
                          </div>
                        )}
                        {anotherSelect === "9Mobile" && (
                          <div className="col-md-12">
                            <div className="form-group">
                              <label>Network</label>
                              <select
                                id="data-plan"
                                className="form-control select2bs4 col-md-12"
                                name="attribute_data-plan"
                                data-attribute_name="attribute_data-plan"
                                data-show_option_none="yes"
                                style={{ width: "100%" }}
                              >
                                <option value="">Choose Data Plan</option>
                                <option
                                  value="2.5GB - 30 Days"
                                  className="attached enabled"
                                >
                                  2.5GB - 30 Days
                                </option>
                                <option
                                  value="11.5GB - 30 Days"
                                  className="attached enabled"
                                >
                                  11.5GB - 30 Days
                                </option>
                                <option
                                  value="15GB - 30 Days"
                                  className="attached enabled"
                                >
                                  15GB - 30 Days
                                </option>
                              </select>
                            </div>
                          </div>
                        )}

                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="exampleInputPassword1">
                              Phone Number
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
                          Buy Data
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

export default Data;
