import React, { Component } from "react";
import { PlannerStateContext } from "./PlannerStateContext";
export class EntertainmentPlanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: localStorage.getItem("movie") || "",
      tv: localStorage.getItem("tv") || "",
      hobby: localStorage.getItem("hobby") || "",
      health: localStorage.getItem("health") || "",
      lottery: localStorage.getItem("lottery") || "",
      bus: localStorage.getItem("bus") || "",
      holiday: localStorage.getItem("holiday") || "",
      birthday: localStorage.getItem("birthday") || "",
      event: localStorage.getItem("ent") || "",
    };
  }
  handleExpenseChange = (setEntExpense) => {
    const { movie, tv, hobby, health, lottery, bus, holiday, birthday, event } =
      this.state;
    let total =
      (Number(movie) || 0) +
      (Number(tv) || 0) +
      (Number(hobby) || 0) +
      (Number(health) || 0) +
      (Number(lottery) || 0) +
      (Number(bus) || 0) +
      (Number(holiday) || 0) +
      (Number(birthday) || 0) +
      (Number(event) || 0);
    setEntExpense(total);
  };
  handleInputChange = (event, setEntExpense) => {
    const { name, value } = event.target;

    this.setState(
      (prevState) => {
        return { [name]: parseFloat(value) };
      },
      () => {
        if (value === "") {
          localStorage.removeItem(name);
        } else {
          localStorage.setItem(name, value);
        }
        this.handleExpenseChange(setEntExpense);
      }
    );
  };

  render() {
    return (
      <PlannerStateContext.Consumer>
        {({ setEntExpense }) => (
          <div>
            <div style={{ textAlign: "left", paddingLeft: "5px" }}>
              <div>
                <h5>Movies</h5>
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
                    value={this.state.movie}
                    name="movie"
                    type="number"
                    className="form-control"
                    aria-label="Amount"
                    aria-describedby="dollar-addon"
                    style={{ height: "50px", fontSize: "18px" }}
                    onChange={(event) => {
                      this.handleInputChange(event, setEntExpense);
                    }}
                  />
                </div>
              </div>

              <div>
                <h5>TV, Music and Gaming Subscriptions</h5>
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
                    value={this.state.tv}
                    name="tv"
                    type="number"
                    className="form-control"
                    aria-label="Amount"
                    aria-describedby="dollar-addon"
                    style={{ height: "50px", fontSize: "18px" }}
                    onChange={(event) => {
                      this.handleInputChange(event, setEntExpense);
                    }}
                  />
                </div>
              </div>
              <div>
                <h5>Hobbies</h5>
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
                    value={this.state.hobby}
                    name="hobby"
                    type="number"
                    className="form-control"
                    aria-label="Amount"
                    aria-describedby="dollar-addon"
                    style={{ height: "50px", fontSize: "18px" }}
                    onChange={(event) => {
                      this.handleInputChange(event, setEntExpense);
                    }}
                  />
                </div>
              </div>
              <div>
                <h5>Health & Fitness</h5>
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
                    value={this.state.health}
                    name="health"
                    type="number"
                    className="form-control"
                    aria-label="Amount"
                    aria-describedby="dollar-addon"
                    style={{ height: "50px", fontSize: "18px" }}
                    onChange={(event) => {
                      this.handleInputChange(event, setEntExpense);
                    }}
                  />
                </div>
              </div>
              <div>
                <h5>Lottery & Gambling</h5>
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
                    value={this.state.lottery}
                    name="lottery"
                    type="number"
                    className="form-control"
                    aria-label="Amount"
                    aria-describedby="dollar-addon"
                    style={{ height: "50px", fontSize: "18px" }}
                    onChange={(event) => {
                      this.handleInputChange(event, setEntExpense);
                    }}
                  />
                </div>
              </div>
              <div>
                <h5>Bus/Tram fares</h5>
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
                    value={this.state.bus}
                    name="bus"
                    type="number"
                    className="form-control"
                    aria-label="Amount"
                    aria-describedby="dollar-addon"
                    style={{ height: "50px", fontSize: "18px" }}
                    onChange={(event) => {
                      this.handleInputChange(event, setEntExpense);
                    }}
                  />
                </div>
              </div>
              <div>
                <h5>Holiday</h5>
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
                    value={this.state.holiday}
                    name="holiday"
                    type="number"
                    className="form-control"
                    aria-label="Amount"
                    aria-describedby="dollar-addon"
                    style={{ height: "50px", fontSize: "18px" }}
                    onChange={(event) => {
                      this.handleInputChange(event, setEntExpense);
                    }}
                  />
                </div>
              </div>
              <div>
                <h5>Birthdays</h5>
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
                    value={this.state.birthday}
                    name="birthday"
                    type="number"
                    className="form-control"
                    aria-label="Amount"
                    aria-describedby="dollar-addon"
                    style={{ height: "50px", fontSize: "18px" }}
                    onChange={(event) => {
                      this.handleInputChange(event, setEntExpense);
                    }}
                  />
                </div>
              </div>
              <div>
                <h5>Events</h5>
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
                    value={this.state.event}
                    name="event"
                    type="number"
                    className="form-control"
                    aria-label="Amount"
                    aria-describedby="dollar-addon"
                    style={{ height: "50px", fontSize: "18px" }}
                    onChange={(event) => {
                      this.handleInputChange(event, setEntExpense);
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
