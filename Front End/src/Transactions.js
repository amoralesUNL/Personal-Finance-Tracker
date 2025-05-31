import React, { Component } from "react";
import { variables } from "./Variables";
export class Transactionspage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      showModal: false,
      selectedFile: null,
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
  onFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };
  csvUpload = () => {
    const formData = new FormData();
    formData.append("myFile", this.state.selectedFile);

    console.log(this.state.selectedFile.name);

    fetch(variables.API_URL + "transaction/upload-csv", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Upload Success", result);
      })
      .catch((error) => {
        console.log("Upload Failed", error);
      });
  };

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
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => this.setState({ showModal: true })}
          >
            Upload CSV
          </button>
          {/*Modal Window*/}
          {this.state.showModal && (
            <div
              className="modal fade show d-block "
              tabIndex="-1"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title w-100" id="exampleModalLabel">
                      Upload CSV
                    </h5>
                    <button
                      type="button"
                      className="close"
                      onClick={() => this.setState({ showModal: false })}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <input type="file" onChange={this.onFileChange} />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => this.setState({ showModal: false })}
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={this.csvUpload}
                    >
                      Done
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
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
