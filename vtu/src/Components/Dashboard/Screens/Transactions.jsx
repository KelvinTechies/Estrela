import React from "react";
import { CiMenuBurger, CiWallet } from "react-icons/ci";
import { FaList } from "react-icons/fa6";
import { MdHistory } from "react-icons/md";

function Transactions() {
  return (
    <div>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-5">
            <div className="col-sm-6 row align-items-center">
              <MdHistory size={30} color="rebeccapurple" />
              <h1 className="m-0 mx-3 text-primary" style={{ fontWeight: 600 }}>
                Transactions
              </h1>
            </div>
            {/* /.col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="dashboard">Home</a>
                </li>
                <li className="breadcrumb-item active"> Transactions</li>
              </ol>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 ">
              <div className="card rounded">
                <div className="card-body">
                  <div className="row align-items-center justify-content-between">
                    <div className="f mx-5">
                      <div
                        className="my_o"
                        style={{
                          width: 50,
                          height: 50,
                          borderRadius: 100,
                          display: "flex",
                          padding: 10,
                          alignItems: "center",
                          justifyContent: "center",
                          background: "#E7CFFF",
                        }}
                      >
                        <FaList size={50} color="rebeccapurple" />
                      </div>
                    </div>

                    <div className="r">
                      <p
                        className="card-text text-primary"
                        style={{
                          //   color: "rebeccapurple",
                          fontWeight: 700,
                          fontSize: 50,
                          marginRight: 35,
                        }}
                      >
                        0
                      </p>
                      <h5 className=" text-primary">transactions</h5>
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
                      <div
                        className="my_o"
                        style={{
                          width: 50,
                          height: 50,
                          borderRadius: 100,
                          display: "flex",
                          padding: 10,
                          alignItems: "center",
                          justifyContent: "center",
                          background: "#E7CFFF",
                        }}
                      >
                        <CiWallet size={50} color="rebeccapurple" />
                      </div>
                    </div>

                    <div className="r text-primary">
                      <p
                        className="card-text"
                        style={{
                          //   color: "rebeccapurple",
                          fontWeight: 700,
                          fontSize: 50,
                          marginRight: 35,
                        }}
                      >
                        &#x20A6;0
                      </p>
                      <h5 className=" text-primary">Wallet Ballance</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
