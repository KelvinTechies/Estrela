import React from "react";
import { MdOutlineUpgrade } from "react-icons/md";

function Upgrade() {
  return (
    <div>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">
                <MdOutlineUpgrade />
                Upgrade
              </h1>
            </div>
            {/* /.col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Upgrade</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="card col-md-8">
          <div className="card-header">
            <h5>Upgrade Package</h5>
            <div className="card-body">
              <div className="bg-info p-2">
                <p className="card-text">
                  {" "}
                  Note:If you want to continue to enjoy Estrela products, you
                  can upgrade to our Estrela Package by activating your account.
                  We have different services and packages and the lowest amount
                  you can activate your account with is &#x20A6;1,000
                </p>
              </div>
              <div className="card   mt-3">
                <div className="card-body ">
                  <div className="">
                    <form>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Categories</label>
                          <select
                            className="form-control select2bs4 col-md-12"
                            style={{ width: "100%" }}
                          >
                            <option selected="selected">Select Category</option>
                            <option>Estrela Pack 1 (&#x20A6;1,000)</option>
                            <option>Estrela Pack 2 (&#x20A6;2,000)</option>
                            <option>Estrela Pack 3 (&#x20A6;5,000)</option>
                            <option>Estrela Pack 4 (&#x20A6;10,000)</option>
                            <option>Estrela Pack 5 (&#x20A6;20,000)</option>
                            <option>Estrela Pack 6 (&#x20A6;40,000)</option>
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
                      <button
                        type="submit"
                        className="btn btn-block btn-outline-success btn-lg"
                      >
                        Upgrade
                      </button>
                    </form>
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

export default Upgrade;
