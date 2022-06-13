import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import {logoutRequest} from "../../Redux/Login/Action"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./Logout.css"
export const Logout = ({name}) => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleLogout =() => {
        localStorage.removeItem("userDetails")
        dispatch(logoutRequest())
        navigate("/")
    }

    return (
      <div>
        <div
          className="dropdown"
          style={{ marginLeft: "20px", cursor: "pointer" }}
        >
          <button style={{ width: "150px",backgroundColor:"#fed250" }} className="dropbtn">
           Welcome, {name}
            {/* <img
              style={{ height: "8px", marginTop: "11px", marginLeft: "20px" }}
              src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/Vector%20(1).png"
              alt="arrow"
            ></img> */}
          </button>

          <div  style={{ textAlign: "left" }} className="dropdown-content">
            {/* <a href="#">
              <SportsMotorsportsIcon />
              My Rides
            </a> */}
            <a href="/cart">
              <PersonIcon />
              My Profile
            </a>
            <a href="#" onClick={handleLogout}>
              <LogoutIcon />  Logout
              
            </a>
          </div>
        </div>
      </div>
    );
}