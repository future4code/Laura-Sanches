import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Home() {
  const [musics, setMusics] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getMusics();
  }, []);
  const getMusics = () => {
    axios
      .get("https://backend-fullstack-labenu.herokuapp.com/music/all", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setMusics(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const viewsDetails = (id) => {
    axios
      .get(`https://backend-fullstack-labenu.herokuapp.com/music/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then(() => {
        history.push(`/details/${id}`);
      })

      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      {musics &&
        musics.map((item) => {
          return (
            <div>
              <p key={item.id}> {item.title}</p>
              <p> {item.author}</p>
              <p> {item.date}</p>
              <p> {item.file}</p>
              <hr />
              <button onClick={() => viewsDetails(item.id)}>Teste</button>
            </div>
          );
        })}
    </div>
  );
}