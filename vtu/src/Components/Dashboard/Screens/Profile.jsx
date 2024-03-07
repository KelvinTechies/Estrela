import React from "react";
import { CiUser } from "react-icons/ci";
import { FaUser } from "react-icons/fa6";
import profile_pic from "../../../dashboardAsset/logos/profile_pic.png";
import { MdVerified } from "react-icons/md";

function Profile() {
  return (
    <div>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-5">
            <div className="col-sm-6 row align-items-center">
              <div
                className="bg-info"
                style={{
                  background: "#ccc",
                  width: 35,
                  height: 35,
                  borderRadius: 100,
                  padding: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaUser size={30} color="white" />
              </div>
              <h1 className="m-0">Profile</h1>
            </div>
            {/* /.col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="dashboard">Home</a>
                </li>
                <li className="breadcrumb-item active"> Settings</li>
              </ol>
            </div>
          </div>

          <section className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-3">
                  {/* Profile Image */}
                  <div className="card card-primary card-outline">
                    <div className="card-body box-profile">
                      <div className="text-center">
                        <img
                          className="profile-user-img img-fluid img-circle"
                          src={profile_pic}
                          alt="User profile picture"
                        />
                      </div>
                      <h3 className="profile-username text-center">Fullname</h3>
                      <p className="text-muted text-center">
                        <MdVerified color="green" /> Verified
                      </p>
                      <ul className="list-group list-group-unbordered mb-3">
                        <li className="list-group-item">
                          <b>Email</b> <a className="float-right">1,322</a>
                        </li>
                        <li className="list-group-item">
                          <b>Referrals</b> <a className="float-right">543</a>
                        </li>
                        <li className="list-group-item">
                          <b>Phone Number</b>{" "}
                          <a className="float-right">13,287</a>
                        </li>
                      </ul>
                    </div>
                    {/* /.card-body */}
                  </div>
                </div>
                {/* /.col */}
                <div className="col-md-9">
                  <div className="card">
                    <ul className="nav bg-white nav-pills">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          href="#activity"
                          data-toggle="tab"
                        >
                          Overview
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#timeline"
                          data-toggle="tab"
                        >
                          Edit Profile
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#settings"
                          data-toggle="tab"
                        >
                          Change Password
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#transaction"
                          data-toggle="tab"
                        >
                          Change Transaction Pin
                        </a>
                      </li>
                    </ul>
                    <div className="card-body">
                      <div className="tab-content">
                        <div className="active tab-pane" id="activity">
                          {/* Post */}
                          <div className="post">
                            <div className="user-block">
                              <img
                                className="img-circle img-bordered-sm"
                                src="../../dist/img/user1-128x128.jpg"
                                alt="user image"
                              />
                              <span className="username">
                                <a href="#">Jonathan Burke Jr.</a>
                                <a href="#" className="float-right btn-tool">
                                  <i className="fas fa-times" />
                                </a>
                              </span>
                            </div>
                            {/* /.user-block */}
                          </div>
                          {/* /.post */}
                          {/* Post */}

                          {/* /.post */}
                          <h3>Profile Details</h3>
                        </div>
                        {/* /.tab-pane */}
                        <div className="tab-pane" id="timeline">
                          <div className="">
                            <form className="form-horizontal">
                              <div className="form-group row">
                                <label
                                  htmlFor="inputName"
                                  className="col-sm-2 col-form-label"
                                >
                                  Name
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="inputName"
                                    placeholder="Name"
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label
                                  htmlFor="inputEmail"
                                  className="col-sm-2 col-form-label"
                                >
                                  Email
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="inputEmail"
                                    placeholder="Email"
                                  />
                                </div>
                              </div>

                              <div className="form-group row">
                                <label
                                  htmlFor="inputSkills"
                                  className="col-sm-2 col-form-label"
                                >
                                  Phone nmber
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="inputSkills"
                                    placeholder="Skills"
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <div className="offset-sm-2 col-sm-10">
                                  <div className="checkbox">
                                    <label>
                                      <input type="checkbox" /> I agree to the{" "}
                                      <a href="#">terms and conditions</a>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="form-group row">
                                <div className="offset-sm-2 col-sm-10">
                                  <button
                                    type="submit"
                                    className="btn btn-danger"
                                  >
                                    Submit
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        {/* /.tab-pane */}
                        <div className="tab-pane" id="settings">
                          <form className="form-horizontal">
                            <div className="form-group row">
                              <label
                                htmlFor="inputName"
                                className="col-sm-2 col-form-label"
                              >
                                Old password
                              </label>
                              <div className="col-sm-10">
                                <input
                                  type="email"
                                  className="form-control"
                                  id="inputName"
                                  placeholder="Name"
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label
                                htmlFor="inputEmail"
                                className="col-sm-2 col-form-label"
                              >
                                New Password
                              </label>
                              <div className="col-sm-10">
                                <input
                                  type="email"
                                  className="form-control"
                                  id="inputEmail"
                                  placeholder="Email"
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label
                                htmlFor="inputName2"
                                className="col-sm-2 col-form-label"
                              >
                                Confirm New Password
                              </label>
                              <div className="col-sm-10">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="inputName2"
                                  placeholder="Name"
                                />
                              </div>
                            </div>

                            <div className="form-group row">
                              <div className="offset-sm-2 col-sm-10">
                                <div className="checkbox">
                                  <label>
                                    <input type="checkbox" /> I agree to the{" "}
                                    <a href="#">terms and conditions</a>
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="form-group row">
                              <div className="offset-sm-2 col-sm-10">
                                <button
                                  type="submit"
                                  className="btn btn-danger"
                                >
                                  Submit
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>

                        <div className="tab-pane" id="transaction">
                          <form className="form-horizontal">
                            <div className="form-group row">
                              <label
                                htmlFor="inputEmail"
                                className="col-sm-2 col-form-label"
                              >
                                New Pin
                              </label>
                              <div className="col-sm-10">
                                <input
                                  type="email"
                                  className="form-control"
                                  id="inputEmail"
                                  placeholder="Email"
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label
                                htmlFor="inputName2"
                                className="col-sm-2 col-form-label"
                              >
                                Confirm New Pin
                              </label>
                              <div className="col-sm-10">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="inputName2"
                                  placeholder="Name"
                                />
                              </div>
                            </div>

                            <div className="form-group row">
                              <div className="offset-sm-2 col-sm-10">
                                <div className="checkbox">
                                  <label>
                                    <input type="checkbox" /> I agree to the{" "}
                                    <a href="#">terms and conditions</a>
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="form-group row">
                              <div className="offset-sm-2 col-sm-10">
                                <button
                                  type="submit"
                                  className="btn btn-danger"
                                >
                                  Submit
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                        {/* /.tab-pane */}
                      </div>
                      {/* /.tab-content */}
                    </div>
                    {/* /.card-body */}
                  </div>
                  {/* /.card */}
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </section>
        </div>
      </div>
    </div>
  );
}

export default Profile;
