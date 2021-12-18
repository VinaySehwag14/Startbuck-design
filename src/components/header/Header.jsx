import { LocationOn } from "@mui/icons-material";
import "./header.css";
import starbuck from "../../images/starbuck.png";
import SecondHeader from "../secondHeader/SecondHeader";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="left_header">
          <div className="logo">
            <img
              className="star_logo"
              src={starbuck}
              alt="starbuck logo"
              width={55}
            />
          </div>
          <div className="menu_item">
            <ul>
              <a
                href="https://www.starbucks.com/menu"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                <li>MENU</li>
              </a>
              <a
                href="https://www.starbucks.com/rewards"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                <li>REWARDS</li>
              </a>
              <a
                href="https://www.starbucks.com/rewards"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                <li>GIFT CARDS</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="right_header">
          <div className="search right_items">
            <LocationOn />
            <span>Find a store</span>
          </div>
          <button className="right_items bt-one ">Sign in</button>
          <button className="right_items bt-two">Join now</button>
        </div>
      </div>
      <SecondHeader />
    </>
  );
};

export default Header;
