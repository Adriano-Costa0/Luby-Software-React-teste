import React, { FormEvent, useContext, useState } from "react";
import { Context } from "../../contexts/LoginContext";
import { useHistory } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Container, Form, Error } from "./styles";
import api from "../../services/api";

const Login: React.FC = () => {
  const { handleLogin } = useContext(Context);
  const history = useHistory();
  const [inputError, setInputError] = useState("");
  const [userName, setUserName] = useState("");

  async function handleSearchUser(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    if (!userName) {
      setInputError("Campo Obrigatório");
      return;
    }
    try {
      const response = await api.get(`/users/${userName}`);
      handleLogin(response.data);
      setInputError("");
      history.push('/home');
      
    } catch (err) {
      setInputError("Usuário não encontrado!");
    }
  }

  return (
    <Container>
      <img src="/github.svg" alt="GitHub" />
      <Form hasError={!!inputError} onSubmit={handleSearchUser}>
        <section>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Usuário"
            type="text"
          />
          {inputError && <Error>{inputError}</Error>}
        </section>
          <button type="submit">
            Entrar
            <AiOutlineArrowRight size={18} />
          </button>
      </Form>
    </Container>
  );
};

export default Login;
