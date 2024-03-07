import React from "react";
import { Outlet } from "react-router-dom";
import { ExternalLink } from "../EternalLink";
import { MdHistory, MdTransitEnterexit } from "react-icons/md";
import { GrServices, GrSettingsOption } from "react-icons/gr";

import "../dashboardAsset/dist/css/adminlte.min.css";
import "../dashboardAsset/dist/css/e.css";
import "../dashboardAsset/plugins/icheck-bootstrap/icheck-bootstrap.min.css";
import "../dashboardAsset/plugins/bootstrap-colorpicker/css/bootstrap-colorpicker.min.css";
import "../dashboardAsset/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css";
import "../dashboardAsset/plugins/select2/css/select2.min.css";
import "../dashboardAsset/plugins/bootstrap4-duallistbox/bootstrap-duallistbox.min.css";
import "../dashboardAsset/plugins/bs-stepper/css/bs-stepper.min.css";
import "../dashboardAsset/plugins/dropzone/min/dropzone.min.css";
import "../dashboardAsset/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css";
import "../dashboardAsset/plugins/jquery/jquery.min.js";
import "../dashboardAsset/plugins/bootstrap/js/bootstrap.bundle.min.js";
import "../dashboardAsset/plugins/ekko-lightbox/ekko-lightbox.min.js";
import "../dashboardAsset/dist/js/adminlte.min.js";
import "../dashboardAsset/dist/js/demo.js";
import "../dashboardAsset/plugins/filterizr/jquery.filterizr.min.js";
import estrela_logo from "../dashboardAsset/logos/Estrela.jpg";
import { FaUser } from "react-icons/fa6";
import { CiCreditCard1, CiLogout } from "react-icons/ci";
function DashboardLayout({ children }) {
  const currentYear = new Date().getFullYear();
  return (
    <div className=" hold-transition sidebar-mini">
      <div className="wrapper">
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          {/* Left navbar links */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="pushmenu"
                href="#"
                role="button"
              >
                <i className="fas fa-bars" />
              </a>
            </li>
          </ul>
          {/* Right navbar links */}
          <ul className="navbar-nav ml-auto">
            {/* Navbar Search */}
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="navbar-search"
                href="#"
                role="button"
              >
                <i className="fas fa-search" />
              </a>
              <div className="navbar-search-block">
                <form className="form-inline">
                  <div className="input-group input-group-sm">
                    <input
                      className="form-control form-control-navbar"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-navbar" type="submit">
                        <i className="fas fa-search" />
                      </button>
                      <button
                        className="btn btn-navbar"
                        type="button"
                        data-widget="navbar-search"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>
            {/* Messages Dropdown Menu */}
            <li className="nav-item dropdown">
              <a className="nav-link" data-toggle="dropdown" href="#">
                <i className="far fa-comments" />
                <span className="badge badge-danger navbar-badge">3</span>
              </a>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <a href="#" className="dropdown-item">
                  {/* Message Start */}
                  <div className="media">
                    <img
                      src="img/user1-128x128.jpg"
                      alt="User Avatar"
                      className="img-size-50 mr-3 img-circle"
                    />
                    <div className="media-body">
                      <h3 className="dropdown-item-title">
                        Brad Diesel
                        <span className="float-right text-sm text-danger">
                          <i className="fas fa-star" />
                        </span>
                      </h3>
                      <p className="text-sm">Call me whenever you can...</p>
                      <p className="text-sm text-muted">
                        <i className="far fa-clock mr-1" /> 4 Hours Ago
                      </p>
                    </div>
                  </div>
                  {/* Message End */}
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  {/* Message Start */}
                  <div className="media">
                    <img
                      src="img/user8-128x128.jpg"
                      alt="User Avatar"
                      className="img-size-50 img-circle mr-3"
                    />
                    <div className="media-body">
                      <h3 className="dropdown-item-title">
                        John Pierce
                        <span className="float-right text-sm text-muted">
                          <i className="fas fa-star" />
                        </span>
                      </h3>
                      <p className="text-sm">I got your message bro</p>
                      <p className="text-sm text-muted">
                        <i className="far fa-clock mr-1" /> 4 Hours Ago
                      </p>
                    </div>
                  </div>
                  {/* Message End */}
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  {/* Message Start */}
                  <div className="media">
                    <img
                      src="img/user3-128x128.jpg"
                      alt="User Avatar"
                      className="img-size-50 img-circle mr-3"
                    />
                    <div className="media-body">
                      <h3 className="dropdown-item-title">
                        Nora Silvester
                        <span className="float-right text-sm text-warning">
                          <i className="fas fa-star" />
                        </span>
                      </h3>
                      <p className="text-sm">The subject goes here</p>
                      <p className="text-sm text-muted">
                        <i className="far fa-clock mr-1" /> 4 Hours Ago
                      </p>
                    </div>
                  </div>
                  {/* Message End */}
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item dropdown-footer">
                  See All Messages
                </a>
              </div>
            </li>
            {/* Notifications Dropdown Menu */}
            <li className="nav-item dropdown">
              <a className="nav-link" data-toggle="dropdown" href="#">
                <i className="far fa-bell" />
                <span className="badge badge-warning navbar-badge">15</span>
              </a>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <span className="dropdown-item dropdown-header">
                  15 Notifications
                </span>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  <i className="fas fa-envelope mr-2" /> 4 new messages
                  <span className="float-right text-muted text-sm">3 mins</span>
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  <i className="fas fa-users mr-2" /> 8 friend requests
                  <span className="float-right text-muted text-sm">
                    12 hours
                  </span>
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  <i className="fas fa-file mr-2" /> 3 new reports
                  <span className="float-right text-muted text-sm">2 days</span>
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item dropdown-footer">
                  See All Notifications
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="fullscreen"
                href="#"
                role="button"
              >
                <i className="fas fa-expand-arrows-alt" />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="control-sidebar"
                data-slide="true"
                href="#"
                role="button"
              >
                <i className="fas fa-th-large" />
              </a>
            </li>
          </ul>
        </nav>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}
          <a href="../index3.html" className="brand-link">
            <img
              src={estrela_logo}
              width={900}
              alt="AdminLTE Logo"
              className="brand-image img-circle elevation-3"
              style={{ opacity: ".8" }}
            />
            <span className="brand-text font-weight-light">Estrela</span>
          </a>
          {/* Sidebar */}
          <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="info">
                <a href="#" className="d-block">
                  Alexander Pierce
                </a>
              </div>
            </div>

            {/* Sidebar Menu */}
            <nav className="mt-2">
              <ul
                className="list-unstyled nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>
                      Dashboard
                      <i className="right fas fa-angle-left" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="/dashboard" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Dashboard </p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="deposit" className="nav-link">
                    {/* <i className="nav-icon fas fa-th" /> */}
                    {/* <i className="nav-icon fa-solid fa-money-bill-transfer"></i> */}
                    <CiCreditCard1 className="nav-icon" />
                    <p>
                      Deposit
                      <i className="fas fa-angle-left right" />
                      <span className="right badge badge-danger">New</span>
                    </p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <GrServices className="nav-icon" />
                    <p>
                      Services
                      <i className="fas fa-angle-left right" />
                      <span className="badge badge-info right">4</span>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a
                        href="/dashboard/airtime_purchase"
                        className="nav-link"
                      >
                        <i className="far fa-circle nav-icon" />
                        <p>Airtime</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/dashboard/data_purchase" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Data</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/dashboard/bill_purchase" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Electricity Bill</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/dashboard/cable_purchase" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Cable Subscription</p>
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a href="/dashboard/all_transactions" className="nav-link">
                    <MdHistory className="nav-icon" />
                    <p>
                      Transactions
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                </li>

                <li className="nav-item">
                  <a href="/dashboard/referrals" className="nav-link">
                    {/* <i className="nav-icon fas fa-th" /> */}
                    {/* <i className="nav-icon fa-solid fa-money-bill-transfer"></i> */}
                    <CiCreditCard1 className="nav-icon" />
                    <p>
                      Referrals
                      <i className="fas fa-angle-left right" />
                      <span className="right badge badge-danger">New</span>
                    </p>
                  </a>
                </li>

                <li className="nav-item">
                  <a href="#" className="nav-link">
                    {/* <i className="nav-icon fas fa-set" /> */}
                    <GrSettingsOption className="nav-icon" />
                    <p>
                      Settings
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="/dashboard/settings" className="nav-link">
                        {/* <i className="far fa-circle nav-icon" /> */}
                        <FaUser className="nav-icon" />
                        <p>Profile</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="deposit" className="nav-link">
                    {/* <i className="nav-icon fas fa-th" /> */}
                    {/* <i className="nav-icon fa-solid fa-money-bill-transfer"></i> */}
                    <CiLogout className="nav-icon" />
                    <p>Logout</p>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
        <div className="content-wrapper">
          {children}
          <Outlet />
        </div>

        <footer className="main-footer">
          <strong>
            Copyright © {currentYear} <a href="">Estrla</a>.
          </strong>
          All rights reserved.
          {/* <div className="float-right d-none d-sm-inline-block">
            <b>Version</b> 3.2.0
          </div> */}
        </footer>
      </div>
    </div>
  );
}

export default DashboardLayout;
