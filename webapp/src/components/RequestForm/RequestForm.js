/* ----- RequestForm.js ----- */
import React, { useState, useEffect } from "react";
import "./RequestForm.scss";

// Assets

// Components
import Button from "../../ui-library/Button/Button";
import Navbar from "../Navbar/Navbar";

// Libraries & Packages
import InputText from "../../ui-library/InputText/InputText";
import InputSelect from "../../ui-library/InputSelect/InputSelect";
import Color from "color";

function RequestForm() {
  // State
  const [NIC, setNIC] = useState("");
  const [houseNumber, sethHouseNumber] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [province, setProvince] = useState("");
  const [nicError, setNicError] = useState("");
  const [houseNumberError, setHouseNumberError] = useState("");
  const [streetError, setStreetError] = useState("");
  const [cityError, setCityError] = useState("");
  // Choreo base endpoint
  const API_HOST = "https://f82fbb50-01e1-4078-a9f8-0d4ed79a518a-dev.e1-us-east-azure.choreoapis.dev/sbmq/grama-check/requestservice-369/1.0.0";

  // Asgardeo access token
  const TOKEN = JSON.parse(sessionStorage.getItem("session_data-instance_0")).access_token;

  const validateNIC = (nic) => {
    const regex = /^(\d{9}[vx])|(\d{12})$/; // Regular expression to validate the NIC format
    return regex.test(nic);
  };
  // useEffect
  useEffect(() => {
    const selectProvince = () => {
      if (district) {
        if (["Colombo", "Gampaha", "Kalutara"].includes(district)) {
          console.log("hurray");
          setProvince("Western");
        } else if (["Kandy", "Matale", "Nuwara Eliya"].includes(district)) {
          setProvince("Kandy");
          console.log(district + " is in the Central Province.");
        } else if (["Galle", "Matara", "Hambantota"].includes(district)) {
          setProvince("Southern");
        } else if (
          [
            "Jaffna",
            "Kilinochchi",
            "Mannar",
            "Mullaitivu",
            "Vavuniya",
          ].includes(district)
        ) {
          setProvince("Northern");
        } else if (["Trincomalee", "Batticaloa", "Ampara"].includes(district)) {
          setProvince("Eastern");
        } else if (["Kegalle", "Ratnapura"].includes(district)) {
          setProvince("Sabaragamuwa");
        } else if (["Badulla", "Monaragala"].includes(district)) {
          setProvince("Uva");
        } else if (["Anuradhapura", "Polonnaruwa"].includes(district)) {
          setProvince("North Central");
        } else if (["Puttalam", "Kurunegala"].includes(district)) {
          setProvince("North Western");
        }
      }
    };
    selectProvince();

    return () => selectProvince();
  }, [district]);

  // method to post the request details
  const submitRequest = () => {
      let isValid = true;

      // Validate NIC
         if (!NIC) {
          setNicError("NIC is required");
          isValid = false;
        } else if (!validateNIC(NIC)) {
        setNicError("Invalid NIC, please enter a valid Sri Lankan NIC number");
        setNIC("");
        isValid = false;
      } else {
        setNicError("");
      }
  
      // Validate House Number
      if (!houseNumber) {
        setHouseNumberError("House Number is required");
        isValid = false;
      } else {
        setHouseNumberError("");
      }
  
      // Validate Street
      if (!street) {
        setStreetError("Street is required");
        isValid = false;
      } else {
        setStreetError("");
      }
  
      // Validate City
      if (!city) {
        setCityError("City is required");
        isValid = false;
      } else {
        setCityError("");
      }
      if (isValid){
    const requestDetails = { nic_number: NIC, house_no: houseNumber, street: street, city: city, district: district, province: province };

    var url = API_HOST + "/request";

    var requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + TOKEN
      },
      body: JSON.stringify(requestDetails),
      redirect: 'follow'
    }

    fetch(url, requestOptions).then(response => {
      if (response.ok) {
        console.log("Request submitted successfully");
        window.location.href = "/request-success";
    } }).catch(error => console.log(error))
  }
  }
     window.location.href = "/request-success";
    } }).catch(error => console.log(error))
  }

  return (
    <div className="requestForm">
      <div className="requestForm__container">
        <div className="getStrated__navbar">
          <Navbar />
        </div>
        <div className="requestForm__content">
          <div className="requestForm__content__container">
            <div className="requestForm__content_card">
              <div className="requestForm__content_card__title">
                <p>Request Form</p>
              </div>
              {/* NIC */}
              <div className="requestForm__content_card__item">
                <InputText
                  title="NIC"
                  placeholder="Enter Your NIC"
                  state={NIC}
                  setState={setNIC}
                />
              </div>{nicError && <div className="error-message" style={{ color: 'red',fontSize: 12 }}>{nicError}</div>}


              <div className="requestForm__content_card__item requestForm__content_card__item__title">
                <div></div>
                <p>ADDRESS</p>
                <div></div>
              </div>
              {/* House Number */}
           
              <div className="requestForm__content_card__item">
                <InputText
                  title="House Number"
                  placeholder="Enter Your House Number"
                  state={houseNumber}
                  setState={sethHouseNumber}
                />
                
              </div>
              {houseNumberError && <div className="error-message" style={{ color: 'red',fontSize: 12 }}>{houseNumberError}</div>}
             
              {/* Street */}
              <div className="requestForm__content_card__item">
                <InputText
                  title="Street"
                  placeholder="Enter Your Street"
                  state={street}
                  setState={setStreet}
                />
              </div>
              {streetError && <div className="error-message" style={{ color: 'red',fontSize: 12 }}>{streetError}</div>}
              {/* City */}
              <div className="requestForm__content_card__item">
                <InputText
                  title="City"
                  placeholder="Enter Your City"
                  state={city}
                  setState={setCity}
                />
              </div>
              {cityError && <div className="error-message" style={{ color: 'red',fontSize: 12 }}>{cityError}</div>}
              {/* District */}
              <div className="requestForm__content_card__item">
                <InputSelect
                  title="District"
                  placeholder="Select Your District"
                  state={district}
                  setState={setDistrict}
                  required 
                />
              </div>
              {/* Province */}
              <div className="requestForm__content_card__item">
                <InputText
                  title="Province"
                  placeholder="Enter Your Province"
                  isDisabled={true}
                  state={province}
                  setState={setProvince}
                />
              </div>
              {/* Button */}
              <div className="requestForm__content_card__button">
                <Button variant="primary" onClick={submitRequest}>SUBMIT</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestForm;
