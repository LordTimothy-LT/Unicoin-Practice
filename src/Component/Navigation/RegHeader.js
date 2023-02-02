import "./RegHeader.css";
import unicoinLogo from "../../Assets/img/logo.png";
import { Link } from "react-router-dom";

const RegHeader = () => {
    return (
      <>
        <div className="regHeader">
          <Link to={"/"}>
            <img src={unicoinLogo} alt="unicoinLogo" />
          </Link>
          <Link to={"/signin"}>
            <button>Sign In</button>
          </Link>
        </div>
      </>
    );
}

export default RegHeader;