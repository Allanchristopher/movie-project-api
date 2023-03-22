import React, { useEffect, useState } from "react";
import "./Movie.css";
import { URLS } from "../constant/constants";
import { AiFillStar,AiOutlinePlayCircle } from "react-icons/ai";
import { Link,useLocation } from "react-router-dom";
import { Pagination } from 'antd';
function Movie() {
  const [movieData, setmovieData] = useState();
  const {pathname} = useLocation();
  useEffect(() => {
    const { apikey, main_url } = URLS;
    const movieUrl = `${main_url}/list/1?api_key=${apikey}`;
    const fetchRequest = async () => {
      try {
        const response = await fetch(movieUrl);
        if (response.status !== 200) {
          throw new Error();
        }
        let data = await response.json();
        setmovieData(data.items);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchRequest();
  },[]);
  return (
    <div className="movie-container">
      {movieData &&
        movieData.map((movie) => {
          return (
            <div className="card">
              <div className="card-image-container">
                <img
                  className="card-image"
                  src={`${URLS.img_base_url}${movie.poster_path}`}
                  alt="card-cap"
                />
              </div>
              <div className="card-body">
                <div className="card-text">
                <Link to={`${pathname}/${movie.id}`}><h5 className="card-title">{movie.title}</h5></Link>
                <div className="star-contaier">
                  <span class="checked"><AiFillStar/></span>
                  <span class="checked"><AiFillStar/></span>
                  <span class="checked"><AiFillStar/></span>
                  <span class="checked"><AiFillStar/></span>
                  <span class="checked"><AiFillStar/></span>
                </div>
                </div>
                <div>
                   <Link to={`${pathname}/${movie.id}`}><AiOutlinePlayCircle className="play-btn"/></Link>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Movie;
