import { useNavigate } from "react-router-dom";
import "./PaymentSuccessfull.css";
export const PaymentSuccessFull = () => {
    const navigate = useNavigate();
  return (
    <>
      <div className="orderSuccessDiv">
        <div>
          <img src="https://i.gifer.com/TwuB.gif" alt="order placed gif" />
          <button onClick={()=>navigate("/")} className="continueBtn">CONTINUE SHOPING</button>
        </div>
      </div>
    </>
  );
};
