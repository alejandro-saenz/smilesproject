import React from "react";
import "./AssistanceForm.css";

function AssistanceForm() {
  return (
    <div className="page-title">
      <h1 className="title">Assistance Form</h1>
      <p className="form-inst" alt="form instructions">
        Please fill form out completely.
      </p>
      <p className="form-inst" alt="form instructions">
        We will contact you as soon as we can.
      </p>
      <form className="cf">
        {/* <form className="cf" action="https://formspree.io/xbjzpwoa" method="POST"> */}
        <div class="assistance-form">
          <label for="name" className="form-label">
            Name
          </label>
          <input type="text" className="input-form" placeholder="Name" />
          <label for="email" className="form-label">
            E-Mail Address
          </label>
          <input type="email" className="input-form" placeholder="Email" />
          <label for="phone-number" className="form-label">
            Phone Number
          </label>
          <input
            type="number"
            className="input-form"
            placeholder="Phone Number"
          />
          <label for="street-address" className="form-label">
            Street Address
          </label>
          <input
            type="text"
            className="input-form"
            placeholder="Street Address"
          />
          <label for="apt-num" className="form-label">
            Apt/House Number
          </label>
          <input
            type="text"
            className="input-form"
            placeholder="Apt/House Number"
          />
          <label for="zipcode" className="form-label">
            Zip Code
          </label>
          <input type="number" className="input-form" placeholder="Zip Code" />
          <label for="city" className="form-label">
            City
          </label>
          <input type="text" className="input-form" placeholder="City" />
        </div>
      </form>
      <a href="/ThankYou">
        <button className="form-btn" type="submit" value="Submit">
          Submit
        </button>
      </a>
    </div>
  );
}
export default AssistanceForm;
