import React from "react";
import axios from "axios";
import useForm from "../hoock/useForm";
import { useHistory } from "react-router-dom";
import { goToHome } from "../Router/Coodinator";

export default function SingUpForm() {
  const history = useHistory();
  const { form, onChange } = useForm({
    name: "",
    email: "",
    password: "",
    nickname: "",
  });

  const conection = (event) => {
    event.preventDefault();

    const body = {
      name: form.name,
      email: form.email,
      password: form.password,
      nickname: form.nickname,
    };

    axios
      .post("https://backend-fullstack-labenu.herokuapp.com/user/signup", body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        goToHome(history);
      })
      .catch((error) => {
        alert("Cadastro falhou, tente novamente.");
        console.error(error.response.data);
      });
  };

  return (
    <form onSubmit={conection}>
      <input
        onChange={onChange}
        value={form.name}
        name="name"
        placeholder="Nome"
        type="text"
      />

      <input
        onChange={onChange}
        value={form.email}
        name="email"
        placeholder="E-mail"
        type="text"
      />

      <input
        onChange={onChange}
        value={form.password}
        name="password"
        placeholder="Senha"
        type="password"
      />

      <input
        onChange={onChange}
        value={form.nickname}
        name="nickname"
        placeholder="Nickname"
        type="text"
      />

      <button> Cadastrar</button>
    </form>
  );
}