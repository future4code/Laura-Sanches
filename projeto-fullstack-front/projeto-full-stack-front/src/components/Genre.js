import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Genre(props) {
  const [idGenres, setIdGenres] = useState([]);

  useEffect(() => {
    getGenres();
  }, []);

  // const CreateGenres = (event) => {
  //   event.preventDefault();

  //   const body = {
  //     name: form.name,
  //   };

  //   axios
  //     .post(
  //       "https://backend-fullstack-labenu.herokuapp.com/music/createGenre",
  //       body,
  //       {
  //         headers: {
  //           Authorization: localStorage.getItem("token"),
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       alert("Genero Criado");
  //     })
  //     .catch((err) => {
  //       console.log(err.response.data);
  //     });
  // };

  const getGenres = () => {
    axios
      .get("https://backend-fullstack-labenu.herokuapp.com/music/genres", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setIdGenres(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <div>
      <p>Genero</p>

      <select
        value={props.form.value}
        onChange={props.onChange}
        name="genresId"
        required
      >
        {idGenres &&
          idGenres.map((item) => {
            return (
              <option value={item.id} name={item.id} key={item.id}>
                {item.name}
              </option>
            );
          })}
      </select>
    </div>
  );
}