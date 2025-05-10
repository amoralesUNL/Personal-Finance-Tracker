import React, { Component } from "react";

export class HousingPlanner extends Component {
  render() {
    return (
      <div>
        <div style={{ textAlign: "left", paddingLeft: "5px" }}>
          <div>
            <h5>Mortgage</h5>
          </div>
          <div style={{ paddingBottom: "10px" }}>
            <div className="input-group" style={{ width: "220px" }}>
              <span
                className="input-group-text custom-addon-bg"
                id="dollar-addon"
              >
                $
              </span>
              <input
                type="number"
                className="form-control"
                aria-label="Amount"
                aria-describedby="dollar-addon"
                style={{ height: "50px", fontSize: "18px" }}
              />
            </div>
          </div>

          <div>
            <h5>Rent</h5>
          </div>
          <div style={{ paddingBottom: "10px" }}>
            <div className="input-group" style={{ width: "220px" }}>
              <span
                className="input-group-text custom-addon-bg"
                id="dollar-addon"
              >
                $
              </span>
              <input
                type="number"
                className="form-control"
                aria-label="Amount"
                aria-describedby="dollar-addon"
                style={{ height: "50px", fontSize: "18px" }}
              />
            </div>
          </div>
          <div>
            <h5>Home Insurance</h5>
          </div>
          <div style={{ paddingBottom: "10px" }}>
            <div className="input-group" style={{ width: "220px" }}>
              <span
                className="input-group-text custom-addon-bg"
                id="dollar-addon"
              >
                $
              </span>
              <input
                type="number"
                className="form-control"
                aria-label="Amount"
                aria-describedby="dollar-addon"
                style={{ height: "50px", fontSize: "18px" }}
              />
            </div>
          </div>
          <div>
            <h5>Property Taxes</h5>
          </div>
          <div style={{ paddingBottom: "10px" }}>
            <div className="input-group" style={{ width: "220px" }}>
              <span
                className="input-group-text custom-addon-bg"
                id="dollar-addon"
              >
                $
              </span>
              <input
                type="number"
                className="form-control"
                aria-label="Amount"
                aria-describedby="dollar-addon"
                style={{ height: "50px", fontSize: "18px" }}
              />
            </div>
          </div>
          <div>
            <h5>Home Maintenance</h5>
          </div>
          <div style={{ paddingBottom: "10px" }}>
            <div className="input-group" style={{ width: "220px" }}>
              <span
                className="input-group-text custom-addon-bg"
                id="dollar-addon"
              >
                $
              </span>
              <input
                type="number"
                className="form-control"
                aria-label="Amount"
                aria-describedby="dollar-addon"
                style={{ height: "50px", fontSize: "18px" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
