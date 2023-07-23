import React from "react";
import { CButton, CCol, CFormInput, CRow } from "@coreui/react";
import "./loginpage.scss";
import "@coreui/coreui/dist/css/coreui.min.css";

const Signup = () => {
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
              <CCol>Name</CCol>
              <CCol>
                <CFormInput />
              </CCol>
            </CRow>
            <CRow className="p-1">
              <CCol>Age</CCol>
              <CCol>
                <CFormInput type="number" />
              </CCol>
            </CRow>
            <CRow className="p-1">
              <CCol>Gender</CCol>
              <CCol>
                <CFormInput />
              </CCol>
            </CRow>
            <CRow className="p-1">
              <CCol>Email</CCol>
              <CCol>
                <CFormInput />
              </CCol>
            </CRow>
            <CRow className="p-1">
              <CCol>Password</CCol>
              <CCol>
                <CFormInput />
              </CCol>
            </CRow>
            <CRow className="p-1">
              <CCol>Phone</CCol>
              <CCol>
                <CFormInput type="number" />
              </CCol>
            </CRow>
            <div className="loginpage-submit-button pt-3">
              <CButton color="secondary"  onClick={() => (window.location.href = "/")}>Submit</CButton>
            </div>
            <div
              className="login-signup"
              onClick={() => (window.location.href = "/")}>
              Already have an account? Login
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
