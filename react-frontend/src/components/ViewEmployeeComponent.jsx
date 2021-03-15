import React, {Component} from 'react';
import EmployeeService from '../services/EmployeeService.js';

class ViewEmployeeComponent extends Component {
  constructor (props) {
    super (props);

    this.state = {
      id: this.props.match.params.id,
      employee: {},
    };
  }

  cancel () {
    this.props.history.push ('/employees');
  }
  componentDidMount () {
    EmployeeService.getEmployeeById (this.state.id).then (res => {
      this.setState ({employee: res.data});
    });
  }

  render () {
    return (
      <div>
        <br />
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center"> View Employee Details</h3>
          <div className="card-body">
            <div className="row">
              <label> Employee First Name: </label>
              <div> {this.state.employee.firstName}</div>
            </div>
            <div className="row">
              <label> Employee Last Name: </label>
              <div> {this.state.employee.lastName}</div>
            </div>
            <div className="row">
              <label> Employee Email ID: </label>
              <div> {this.state.employee.emailId}</div>
            </div>
          </div>

          <button
            className="btn btn-danger"
            onClick={this.cancel.bind (this)}
            style={{marginLeft: '-5px'}}
          >
            Cancel
          </button>

        </div>

      </div>
    );
  }
}

export default ViewEmployeeComponent;