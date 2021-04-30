import React, { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Context } from "../../contexts/LoginContext";
import { FiArrowRight } from "react-icons/fi";
import { Container, SectionRepository } from "./styles";
import api from "../../services/api";
import { Marker } from "../../components/Marker/styles";
import Layout from "../../components/Layout/Layout";
import { useHistory } from "react-router";

interface FollowingProps {
  avatar_url: string;
  login: string;
}

const Following: React.FC = () => {
  const history = useHistory();
  const { login , followingAmount} = useContext(Context);
  const [seguindo, setSeguindo] = useState<FollowingProps[]>([]);

  useEffect(() => {
    api.get(`users/${login}/following`).then((response) => {
      setSeguindo(response.data);
    });
  }, [login]);

  function handleSaveFollower(login: string) {
    history.push(`/details/${login}`);
  }

  return (
    <Layout>
      <Container>
        <Header
          title={`Seguindo ${followingAmount} `}
          action={""}
          back={true}
        />
        {seguindo?.map((following) => (
          <SectionRepository key={following.login}>
            <Marker />
            <div>
              <img src={following.avatar_url} alt=""/>
              <strong>#{following.login}</strong>
              <FiArrowRight 
              size={20} 
              onClick={() => handleSaveFollower(following.login)}
              />
            </div>
          </SectionRepository>
        ))}
      </Container>
    </Layout>
  );
};

export default Following;
