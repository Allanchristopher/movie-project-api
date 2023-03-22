import React, { useEffect, useState } from "react";
import icon from "../asset/toppng 1.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { URLS } from "../constant/constants";
import "./singlemovie.css";
import { useParams } from "react-router-dom";
function Singlemovie() {
  const [singlemoviedata, setsinglemoviedata] = useState("");
  const [videodata, setvideodata] = useState("");
  const { id } = useParams();
  const { apikey, main_url } = URLS;
  useEffect(() => {
    const singlepageurl = `${main_url}/movie/${id}?api_key=${apikey}`;
    const videourl = `${main_url}/movie/${id}/videos?api_key=${apikey}&language=en-US`;
    const fetchsinglemovie = async () => {
      try {
        const response = await fetch(singlepageurl);
        if (response.status !== 200) {
          throw new Error();
        }
        let data = await response.json();
        console.log(data);
        setsinglemoviedata(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    const fetchvideo = async () => {
        try {
          const response = await fetch(videourl);
          if (response.status !== 200) {
            throw new Error();
          }
          let data = await response.json();
          console.log(data.results[0].key);
          setvideodata(data.results[0].key);
        } catch (err) {
          console.log(err.message);
        }
      };
    fetchsinglemovie();
    fetchvideo();
  }, []);

  return (
    <div className="single-movie-container">
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
          <a href="/" className="logout">
            {" "}
            Log Out
          </a>
        </div>
      </header>
      <div className="single-movie">
        <div className="single-movie-details">
          <h2>{singlemoviedata.title}</h2>
          <p className="voting">{singlemoviedata.vote_average}/10</p>
          <p className="overview">{singlemoviedata.overview}</p>
          <p className="release-date">Release Date:{singlemoviedata.release_date}</p>
          <p className="language">Orginal Language {singlemoviedata.original_language}</p>
        </div>

        <div className="video">
        <iframe
        title="Trailer"
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videodata}`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Singlemovie;
