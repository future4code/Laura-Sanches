import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function MusicDetails() {
  const [detailsMusic, setDetailMusic] = useState({});
  const pathParams = useParams();
  const id = pathParams.id;

  useEffect(() => {
    getMusicDetail();
  }, []);

  const getMusicDetail = () => {
    axios
      .get(`https://backend-fullstack-labenu.herokuapp.com/music/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setDetailMusic(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <p>DetailsMusic</p>

      <p>{detailsMusic.title}</p>
      <p>{detailsMusic.author}</p>
      <p>{detailsMusic.date}</p>
      <p>{detailsMusic.file}</p>
    </div>
  );
}