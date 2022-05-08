import React from "react";
import "./style.css";
import SearchIcon from "@mui/icons-material/Search";
import logodiwan1 from "../../assets/logo diwan1.png"; 


const Home = () => {
  return (
    <div className="main">
      <div className="logo">
        <img src={logodiwan1} alt=""/>
        </div>
        
      <div className="Search">
      
      <input type="text" placeholder="بحث في الديوان"/>  
      <SearchIcon />
      </div>
      
    </div>
    
  )
};

export default Home;

