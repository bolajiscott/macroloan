import React, { Component } from "react";
export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="SUrname name"
          />
        </div>
        <div className="mb-3">
          <label>Occupation</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
        <div className="mb-3">
          <label>Occupation</label>
          <input
            type="occupation"
            className="form-control"
            placeholder="Occupation"
          />
        </div>
        <div className="mb-3">
          <label>Place of work</label>
          <input
            type="place of work"
            className="form-control"
            placeholder="place of work"
          />
        </div>

        <div className="mb-3">
          <label>Role</label>
          <input type="role" className="form-control" placeholder="role" />
        </div>

        <div className="mb-3">
          <label>Address</label>
          <input
            type="address"
            className="form-control"
            placeholder="address"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    );
  }
}
