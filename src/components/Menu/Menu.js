import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Menu =() => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const boxHandler = () => {
    setToggle(false);
  };
  return (
    <>
<div className="menu">
    <div onClick={handleToggle} className="menubtn">
  {toggle ? <CloseIcon /> : <MenuIcon />}


</div>
<div className="list">
    <ul  className={toggle ? "active" : ""}>
      <li>
         <Link onClick={boxHandler}   to="/"> الرئيسية</Link>
      </li>
      <li>
      <Link onClick={boxHandler}   to="/terminology"> المصطلحات</Link>
      </li>
      <li>
      <Link onClick={boxHandler}   to="/visualdic"> المعجم البصري</Link>
      </li>
      <li>
      <Link onClick={boxHandler}   to="/publications"> المنشورات</Link>

      </li>
    </ul>
    </div>
    </div>
    </>
    
  )
};


export default Menu;

