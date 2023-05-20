/* ----- GramaSevakaDashboard.js ----- */
import React, { useState } from "react";
import "./GramaSevakaDashboard.scss";

// Assets
import StatusRejectedSVG from "../../assets/images/svg/rejected.svg";
import StatusSuccessSVG from "../../assets/images/svg/success.svg";

// Components
import Navbar from "../Navbar/Navbar";
import StatusIcon from "../../ui-library/StatusIcon/StatusIcon";

// Libraries & Packages

// UI Library
import Button from "../../ui-library/Button/Button";

// Icons
import SettingsIcon from "@mui/icons-material/Settings";
import Popup from "../../ui-library/Popup/Popup";
import InputTextArea from "../../ui-library/InputTextArea/InputTextArea";

function GramaSevakaDashboard() {
  // State
  const [requests, setRequests] = useState([
    {
      id: "1",
      email: "test1@gmail.com",
      status: "pending",
    },

    {
      id: "2",
      email: "test2@gmail.com",
      status: "rejected",
    },
    {
      id: "3",
      email: "test3@gmail.com",
      status: "approved",
    },
  ]);

  const [displayPopup, setDisplayPopup] = useState(false);
  const [displayRejectPopup, setDisplayRejectPopup] = useState(false);
  const [displayApprovePopup, setDisplayApprovePopup] = useState(false);

  const [value, setValue] = useState("This is filler text for testing!");

  return (
    <div className="gramaSevakaDashboard">
      <div className="gramaSevakaDashboard__container">
        <div className="gramaSevakaDashboard__navbar">
          <Navbar mockUser={{ firstName: "Grama", lastName: "Sevaka" }} />
        </div>
        <div className="gramaSevakaDashboard__content">
          <div className="gramaSevakaDashboard__content__container">
            <div className="gramaSevakaDashboard__title">
              <p>Grama Sevaka - Dashboard</p>
            </div>
            {/* Header */}
            <div className="gramaSevakaDashboard__header">
              <div className="gramaSevakaDashboard__header__item">
                <div className="gramaSevakaDashboard__header__item__title">
                  <p>Email</p>
                </div>
              </div>
              <div className="gramaSevakaDashboard__header__item">
                <div className="gramaSevakaDashboard__header__item__title">
                  <p>Status</p>
                </div>
              </div>
              <div className="gramaSevakaDashboard__header__item">
                <div className="gramaSevakaDashboard__header__item__title">
                  <p>Action</p>
                </div>
              </div>
            </div>
            {/* Body */}
            <div className="gramaSevakaDashboard__body">
              {!requests
                ? ""
                : requests.map((request, index) => {
                    return (
                      <div
                        key={index}
                        className="gramaSevakaDashboard__body__item"
                      >
                        <div className="gramaSevakaDashboard__body__item__email">
                          <p>{request.email}</p>
                        </div>
                        <div className="gramaSevakaDashboard__body__item__status">
                          <StatusIcon variant={request.status} />
                        </div>
                        <div className="gramaSevakaDashboard__body__item__action">
                          <SettingsIcon
                            onClick={() => setDisplayPopup(!displayPopup)}
                          />
                        </div>
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
      <div
        className="gramaSevakaDashboard__popup"
        style={displayPopup ? { display: "flex" } : { display: "none" }}
      >
        <Popup display={displayPopup} setDisplayPopup={setDisplayPopup}>
          <div className="gramaSevakaDashboard__popup__header">
            <p>Request Details</p>
          </div>
          <div className="gramaSevakaDashboard__popup__body">
            {/* ---------- Client Request ---------- */}
            <RequestDetailsItemHeader heading="Client Request" />

            {/* ----- General Details ----- */}
            <RequestDetailsItemSubHeader subheading="General Details" />
            {/* NIC */}
            <RequestDetailsItem title="NIC" value="NIC value" />
            {/* Email */}
            <RequestDetailsItem title="Email" value="Email value" />

            {/* ----- Address ----- */}
            <RequestDetailsItemSubHeader subheading="Address" />
            {/* House No */}
            <RequestDetailsItem title="House No" value="House No value" />
            {/* Street */}
            <RequestDetailsItem title="Street" value="Street value" />
            {/* City */}
            <RequestDetailsItem title="City" value="City value" />
            {/* District */}
            <RequestDetailsItem title="District" value="District value" />
            {/* Province */}
            <RequestDetailsItem title="Province" value="Province value" />

            {/* ---------- Grama Sevaka Records ---------- */}
            <RequestDetailsItemHeader heading="Grama Sevaka Records" />

            {/* ----- General Details ----- */}
            <RequestDetailsItemSubHeader subheading="General Details" />
            {/* NIC */}
            <RequestDetailsItem title="NIC" value="NIC value" />
            {/* Email */}
            <RequestDetailsItem title="Email" value="Email value" />
            {/* First Name */}
            <RequestDetailsItem title="First Name" value="First Name value" />
            {/* Last Name */}
            <RequestDetailsItem title="Last Name" value="Last Name value" />
            {/* Mobile */}
            <RequestDetailsItem title="Mobile" value="Mobile value" />

            {/* ----- Address ----- */}
            <RequestDetailsItemSubHeader subheading="Address" />
            {/* House No */}
            <RequestDetailsItem title="House No" value="House No value" />
            {/* Street */}
            <RequestDetailsItem title="Street" value="Street value" />
            {/* City */}
            <RequestDetailsItem title="City" value="City value" />
            {/* District */}
            <RequestDetailsItem title="District" value="District value" />
            {/* Province */}
            <RequestDetailsItem title="Province" value="Province value" />

            {/* ---------- Status Check ---------- */}
            <RequestDetailsItemHeader heading="Status Check" />

            {/* ----- General Details ----- */}
            <RequestDetailsItemSubHeader subheading="General Details" />
            {/* NIC */}
            <RequestDetailsItem title="NIC" value="NIC value" />
            {/* Address */}
            <RequestDetailsItem title="Address" value="Address value" />
            {/* Police */}
            <RequestDetailsItem title="Police" value="Police value" />

            {/* ---------- Action ---------- */}
            <RequestDetailsItemHeader heading="Action" />
            {/* Request Status */}
            <RequestDetailsItem title="Request Status" value="pending" />
          </div>
          <div className="gramaSevakaDashboard__popup__buttons">
            <Button
              variant="primary"
              onClick={() => {
                setDisplayPopup(false);
                setDisplayRejectPopup(true);
              }}
            >
              REJECT
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                setDisplayPopup(false);
                setDisplayApprovePopup(true);
              }}
            >
              APPROVE
            </Button>
          </div>
        </Popup>
      </div>
      {/* Reject Popup */}
      <div
        className="gramaSevakaDashboard__popup__reject"
        style={displayRejectPopup ? { display: "flex" } : { display: "none" }}
      >
        <Popup
          display={displayRejectPopup}
          setDisplayPopup={setDisplayRejectPopup}
        >
          <div className="gramaSevakaDashboard__popup__reject__header">
            <p>Reject Request?</p>
          </div>
          <div className="gramaSevakaDashboard__popup__reject__image">
            <img src={StatusRejectedSVG} alt="" />
          </div>
          <div className="gramaSevakaDashboard__popup__reject__text">
            <p>
              Do You want to reject the request made by the client?If so,
              specify the reason below.
            </p>
          </div>
          <div className="gramaSevakaDashboard__popup__reject__textarea">
            <InputTextArea value={value} setValue={setValue} />
          </div>
          <div className="gramaSevakaDashboard__popup__reject__buttons">
            <Button
              variant="primary"
              onClick={() => {
                setDisplayRejectPopup(false);
              }}
            >
              REJECT
            </Button>
          </div>
        </Popup>
      </div>
      {/* Approve Popup */}
      <div
        className="gramaSevakaDashboard__popup__approve"
        style={displayApprovePopup ? { display: "flex" } : { display: "none" }}
      >
        <Popup
          display={displayApprovePopup}
          setDisplayPopup={setDisplayApprovePopup}
        >
          <div className="gramaSevakaDashboard__popup__approve__header">
            <p>Approve Request?</p>
          </div>
          <div className="gramaSevakaDashboard__popup__approve__image">
            <img src={StatusSuccessSVG} alt="" />
          </div>
          <div className="gramaSevakaDashboard__popup__approve__text">
            <p>Do You want to approve the request made by the client?</p>
          </div>
          <div className="gramaSevakaDashboard__popup__approve__buttons">
            <Button
              variant="primary"
              onClick={() => {
                setDisplayApprovePopup(false);
              }}
            >
              APPROVE
            </Button>
          </div>
        </Popup>
      </div>
    </div>
  );
}

export default GramaSevakaDashboard;

function RequestDetailsItemHeader({ heading }) {
  return (
    <div className="requestDetailsItemHeader">
      <div></div>
      <p>{heading}</p>
      <div></div>
    </div>
  );
}

function RequestDetailsItemSubHeader({ subheading }) {
  return (
    <div className="requestDetailsItemSubHeader">
      <p>{subheading}</p>
    </div>
  );
}

function RequestDetailsItem({ title, value }) {
  return (
    <div className="requestDetailsItem">
      <div className="requestDetailsItem__title">
        <p>{title}</p>
      </div>
      <div className="requestDetailsItem__seperator">
        <p>:</p>
      </div>
      <div className="requestDetailsItem__value">
        {title === "Request Status" ? (
          <StatusIcon variant={value} />
        ) : (
          <p className="requestDetailsItem__value__text">{value}</p>
        )}
      </div>
    </div>
  );
}
