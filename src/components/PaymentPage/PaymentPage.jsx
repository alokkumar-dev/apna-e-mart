import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PaymentPage.css";

export const PaymentPage = () => {
  const [payment, setPayment] = useState({
    card: "",
    name: "",
    m: "",
    y: "",
    cvv: "",
  });

  const [error, setError] = useState("");

  const { card, name, m, y, cvv } = payment;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!card || !name || !m || !y || !cvv) {
      alert("Please Fill All Input Box😢");
    } else if (card.length !== 16 || typeof card == "number") {
      alert("Please fill 16 digits valid card numbers❌");
    } else if (cvv.length !== 3 || typeof y === "number") {
      alert("Invalid CVV❌");
    } else {
      alert("YOUR PAYMENT IS SUCCESSFUL😍");
      navigate("/orderSuccessful");
    }
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setPayment({ ...payment, [name]: value });
  };

  return (
    <div>
      <div className="main_div_pay">
        <div>
          <p className="enter_card">Enter your card detail</p>

          <div className="credit-card-logo">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
            />
            <img
              className="credit-card-img"
              src="https://d36g7qg6pk2cm7.cloudfront.net/assets/visa_mastercard-24e2ffa5d62a09351fa66b54c1cac94070b87ee181ec12ff35b7f67e573973a0.png"
              alt="test"
              width="127px"
              height="21px"
            />
            <input
              style={{ marginLeft: "4%" }}
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
            />
            <img
              className="credit-card-img"
              src="https://d36g7qg6pk2cm7.cloudfront.net/assets/american_express-6d3a29aa70d346eea440f529b26c328a70cb3174956fbcedf3dad366d4100b9c.png"
              alt="test"
              width="55px"
              height="25px"
            />
            <input
              style={{ marginLeft: "4%" }}
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
            />
            <img
              className="credit-card-img"
              src="https://d36g7qg6pk2cm7.cloudfront.net/assets/diners_club-f9e57f98657b6d134bb600710e4c43c35f798acc621552e8d9cf168fb4a25988.png"
              alt="test"
              width="67px"
              height="25px"
            />
            <input
              style={{ marginLeft: "4%" }}
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
            />
            <img
              className="credit-card-img"
              src="https://d36g7qg6pk2cm7.cloudfront.net/assets/rupay-0817613f9104b0be7203a0b12910dbeac272daa38187c9e52960324532e12ba9.png"
              alt=""
              width="55px"
              height="25px"
            />
          </div>

          <div className="card card-header">
            {error && <span style={{ color: "red" }}>{error}</span>}
            <label
              style={{ display: "block", width: "165px", margin: "5px" }}
              className="cardnum"
            >
              Card Number
            </label>

            <input
              name="card"
              value={card}
              onChange={handleInputChange}
              type="text"
              maxLength={16}
              className="credit-card-inp"
              placeholder="Enter your card number"
            />
            <br />
            <label
              style={{ display: "block", width: "190px", margin: "5px" }}
              className="cardnum"
            >
              Name on the card
            </label>
            <input
              name="name"
              value={name}
              onChange={handleInputChange}
              type="text"
              className="credit-card-inp"
              placeholder="Enter Name on the card"
            />
            <br />

            <div>
              <div style={{ width: "300px", lineHeight: "30px" }}>
                <label className="cardnum">Expire</label>
                <lable className="cardnum" style={{ marginLeft: "30%" }}>
                  CVV
                </lable>
                <br />
                <input
                  name="m"
                  value={m}
                  onChange={handleInputChange}
                  type="text"
                  maxLength={2}
                  placeholder="M"
                  className="month"
                />
                <input
                  name="y"
                  value={y}
                  onChange={handleInputChange}
                  type="text"
                  maxLength={2}
                  placeholder="Y"
                  className="year"
                />
                <input
                  name="cvv"
                  value={cvv}
                  onChange={handleInputChange}
                  type="text"
                  maxLength={3}
                  placeholder="CVV"
                  className="cvv"
                />
              </div>
            </div>
          </div>
          <br />

          <div style={{ width: "350px" }}>
            <button
              className="make-payment"
              onClick={handleSubmit}
              variant="contained"
              size="medium"
            >
              Make Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
