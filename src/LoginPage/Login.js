import React from "react";
import { CFormLabel, CFormInput, CRow, CCol, CButton } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "./loginpage.scss";
import Signup from "./Signup";

const Login = () => {
  return (
    <div className="login-page">
      <div className="brand">
        <div className="topic-name">Expense Tracker</div>
        <div className="objective-name">KNOW YOUR EXPENSE</div>
      </div>
      <div className="login-container">
        <div className="login-content">
          <CRow className="mb-3">
            <CFormLabel
              htmlFor="staticEmail"
              className="col-sm-3 col-form-label">
              Email
            </CFormLabel>
            <CCol sm={9}>
              <CFormInput
                type="text"
                placeholder="abc@example.com"
                aria-label="default input example"
              />
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel
              htmlFor="inputPassword"
              className="col-sm-3 col-form-label">
              Password
            </CFormLabel>
            <CCol sm={9}>
              <CFormInput  className="pass" type="password" id="inputPassword" />
            </CCol>
          </CRow>
          <div className="login-submit-button">
            <CButton color="secondary">Submit</CButton>
          </div>
          <div className="login-signup" onClick={() => window.location.href = '/signup'} >Don't have an account? SignUp</div>
        </div>
      </div>
    </div>
  );
};
export default Login;