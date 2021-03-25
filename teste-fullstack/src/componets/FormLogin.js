import React from "react";
import axios from "axios";
import useForm from "../hoock/useForm";
import { useHistory } from "react-router-dom";
import {goToHome} from "../Router/Coodinator"

export default function FormLogin() {
  const history = useHistory();
  const { form, onChange } = useForm({
    email: "",
    password: "",
  });

  const logging = (event) => {
    event.preventDefault();

    const body = {
      email: form.email,
      password: form.password,
    };

    axios
      .post("https://backend-fullstack-labenu.herokuapp.com/user/login", body)
      .then((res) => {
        goToHome(history);
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        console.log(err.massage);
      });
  };
  return (
    <form onSubmit={logging}>
      <input
        placeholder="E-mail"
        name="email"
        type="text"
        value={form.email}
        onChange={onChange}
      />
      <input
        placeholder="Senha"
        name="password"
        type="password"
        value={form.password}
        onChange={onChange}
      />

      <button>Fazer login</button>
    </form>
  );
}