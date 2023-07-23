import React from "react";
import "./styles.scss";
import { CButton, CCol, CRow } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";

const MainPage = () => {
  return (
    <div>
      <div className="main-page">
        <div className="mainpage-header">Hey Tamil!</div>
        <CRow md={4} className="mainpage-top-cards">
            <CCol>Total</CCol>
            <CCol >savings</CCol>
            <CCol>remaining</CCol>
            <CCol>expected expense</CCol>
        </CRow>
        <CRow className="mainpage-bottom-cards pe-0">
            <CRow className="pe-0 add-message-col">
                <CCol md={2} className="add-button me-3"><CButton color="dark" variant="outline">Dark</CButton></CCol>
                <CCol className="add-button">*Saving 10% of your salary makes a huge difference in long term effect</CCol>
            </CRow>
            <CRow className="">

            </CRow>
        </CRow>
      </div>
    </div>
  );
};
export default MainPage;
