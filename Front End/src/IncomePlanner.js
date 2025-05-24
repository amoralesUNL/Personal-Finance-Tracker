import { Component } from "react";
import { PlannerStateContext } from "./PlannerStateContext";

export class IncomePlanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pay: localStorage.getItem("pay") || "",
      selfEmployment: localStorage.getItem("selfEmployment") || "",
      pension: localStorage.getItem("pension") || "",
      investments: localStorage.getItem("investments") || "",
      additionalIncome: localStorage.getItem("additionalIncome") || "",
    };
  }

  handleIncomeChange = (setSummaryIncome) => {
    const { pay, selfEmployment, pension, investments, additionalIncome } =
      this.state;
    let total =
      (Number(pay) || 0) +
      (Number(selfEmployment) || 0) +
      (Number(pension) || 0) +
      (Number(investments) || 0) +
      (Number(additionalIncome) || 0);

    setSummaryIncome(total);
  };

  handleInputChange = (event, setSummaryIncome) => {
    const { name, value } = event.target;

    this.setState(
      (prevState) => {
        return {
          [name]: parseFloat(value),
        };
      },
      () => {
        if (value === "") {
          localStorage.removeItem(name);
        } else {
          localStorage.setItem(name, value);
        }
        this.handleIncomeChange(setSummaryIncome);
      }
    );
  };

  render() {
    return (
      <PlannerStateContext.Consumer>
        {({ summaryIncome, setSummaryIncome }) => (
          <div>
            <div style={{ textAlign: "left", paddingLeft: "5px" }}>
              <div>
                <h5>Pay</h5>
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
                    value={this.state.pay}
                    type="number"
                    name="pay"
                    className="form-control"
                    aria-label="Amount"
                    aria-describedby="dollar-addon"
                    style={{ height: "50px", fontSize: "18px" }}
                    onChange={(event) => {
                      this.handleInputChange(event, setSummaryIncome);
                    }}
                  />
                </div>
              </div>

              <div>
                <h5>Self Employment Income</h5>
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
                    value={this.state.selfEmployment}
                    type="number"
                    name="selfEmployment"
                    className="form-control"
                    aria-label="Amount"
                    aria-describedby="dollar-addon"
                    style={{ height: "50px", fontSize: "18px" }}
                    onChange={(event) => {
                      this.handleInputChange(event, setSummaryIncome);
                    }}
                  />
                </div>
              </div>
              <div>
                <h5>Pension</h5>
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
                    value={this.state.pension}
                    type="number"
                    name="pension"
                    className="form-control"
                    aria-label="Amount"
                    aria-describedby="dollar-addon"
                    style={{ height: "50px", fontSize: "18px" }}
                    onChange={(event) => {
                      this.handleInputChange(event, setSummaryIncome);
                    }}
                  />
                </div>
              </div>
              <div>
                <h5>Investments</h5>
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
                    value={this.state.investments}
                    type="number"
                    name="investments"
                    className="form-control"
                    aria-label="Amount"
                    aria-describedby="dollar-addon"
                    style={{ height: "50px", fontSize: "18px" }}
                    onChange={(event) => {
                      this.handleInputChange(event, setSummaryIncome);
                    }}
                  />
                </div>
              </div>
              <div>
                <h5>Additional Income</h5>
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
                    value={this.state.additionalIncome}
                    type="number"
                    name="additionalIncome"
                    className="form-control"
                    aria-label="Amount"
                    aria-describedby="dollar-addon"
                    style={{ height: "50px", fontSize: "18px" }}
                    onChange={(event) => {
                      this.handleInputChange(event, setSummaryIncome);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </PlannerStateContext.Consumer>
    );
  }
}
