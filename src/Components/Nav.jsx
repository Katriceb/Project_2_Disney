import { Link } from "react-router-dom";


function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <div> HOME </div>
      </Link>
      <Link to="/disneylist">
        <div>Disney List</div>
      </Link>
      <Link to="/about">
        <div>About</div>
      </Link>
    </div>
  );
};
export default Nav;