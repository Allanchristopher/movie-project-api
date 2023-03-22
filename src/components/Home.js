import React from "react";
import "./home.css";
import icon from "../asset/toppng 1.svg";
import { AiOutlineSearch } from "react-icons/ai";
import Movie from "./Movie";

function Home() {
  return (
    <div>
      <header className="home-Header">
        <img className="home-login-icon" src={icon} alt="icon" />
        <div className="search-logout-container">
          {" "}
          <form>
            <input
              type="text"
              placeholder="Search Movies"
              className="search"
            ></input>
            <button type="submit" className="search-icon">
              <AiOutlineSearch />
            </button>
          </form>
          <a href="/" className="logout"> Log Out</a>
        </div>
      </header>
      <body className="home-container">
        <div className="home-content">
          <h3>Welcome To Our Movie Site</h3>
          <h1>
            Our special <span> Movies</span>
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industrioy. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown.
          </p>
            <button className="home-btn">
                Read More
            </button>
        </div>
       
      </body>
    <Movie/>
    </div>
  );
}

export default Home;
