import React, { Component } from "react";
import { variables } from "./Variables";
export class Transactionspage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
    };
  }
  refreshList() {
    fetch(variables.API_URL + "transaction")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data); // Log the data to verify it's fetched
        this.setState({ transactions: data });
      })
      .catch((error) => {
        console.error("Error fetching transactions:", error);
      });
  }

  componentDidMount() {
    this.refreshList();
  }
  render() {
    const { transactions } = this.state;
    return (
      <div>
        <div>
          <button type="button" class="btn btn-primary">
            Add Transaction
          </button>
          <button type="button" class="btn btn-primary">
            Edit Transaction
          </button>
          <button type="button" class="btn btn-primary">
            Upload CSV
          </button>
        </div>
        <table className="table table-stripend">
          <thead>
            <tr>
              <th>Id</th>
              <th>TransactionAmount</th>
              <th>TransactionType</th>
              <th>TransactionDate</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tra) => (
              <tr key={tra.Id}>
                <td>{tra.Id}</td>
                <td>{tra.Amount}</td>
                <td>{tra.TransactionType}</td>
                <td>{tra.TransactionDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
