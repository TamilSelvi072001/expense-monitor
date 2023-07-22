import React from "react";
import { CFormLabel, CFormInput, CRow, CCol, CButton } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "./loginpage.scss";
import "@coreui/coreui/dist/css/coreui.min.css";
const Login = () => {
  return (
    <div className="signup-page">
      <div className="signup-container">
        <div>
          <div className="brand p-4">
            <div className="topic-name">Expense Tracker</div>
            <div className="objective-name">KNOW YOUR EXPENSE</div>
          </div>
          <div className="container-box">
            <CRow className="p-1">
              <CCol>Email</CCol>
              <CCol>
                <CFormInput />
              </CCol>
            </CRow>

            <CRow className="p-1">
              <CCol>Password</CCol>
              <CCol>
                <CFormInput type="password" id="inputPassword" />
              </CCol>
            </CRow>

            <div className="loginpage-submit-button pt-3">
              <CButton color="secondary">Submit</CButton>
            </div>
            <div
              className="login-signup"
              onClick={() => (window.location.href = "/signup")}>
              Don't have an account? SignUp
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
