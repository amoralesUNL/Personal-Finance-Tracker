import { Component } from "react";
import { PlannerStateContext } from "./PlannerStateContext";

export class IncomePlanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pay: 0,
      selfEmployment: 0,
      pension: 0,
      investments: 0,
      additional: 0,
    };
  }

  handleIncomeChange = (setSummaryIncome) => {
    const { pay, selfEmployment, pension, investments, additional } =
      this.state;
    let total = pay + selfEmployment + pension + investments + additional;

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
                    type="number"
                    name="additional"
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
