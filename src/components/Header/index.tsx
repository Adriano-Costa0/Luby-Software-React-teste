import React, { useContext } from "react";
import { HeaderContainer } from "./styles";
import { Link, useHistory} from "react-router-dom";
import { FiArrowLeft, FiLogIn, FiLogOut } from "react-icons/fi";
import api from "../../services/api";
import { Context } from "../../contexts/LoginContext";

export function Header({ title, action, back , login}: any) {

  const {handleLogin} = useContext(Context);
  const history = useHistory();

  function handleSaveUser(){
    api.get(`/users/${login}`).then((response) =>{
      handleLogin(response.data);
      history.push('/home');
    })
  }

  return (
    <HeaderContainer>
      {back && <FiArrowLeft size={20} color="#ffffff" onClick={() => history.goBack()}/>}
      <span>{title}</span>
      {action === "login" ? (
          <button type="button" className="saveUser" onClick={() => handleSaveUser()}>
            <p>Salvar</p>
            <FiLogIn size={20} color="#5CBC29" />
          </button>
      ) : action === "" ? (
        <div></div>
      ) : (
        <Link to="/">
          <p>Sair</p>
          <FiLogOut size={20} color="#D03434" />
        </Link>
      )}
    </HeaderContainer>
  );
}
