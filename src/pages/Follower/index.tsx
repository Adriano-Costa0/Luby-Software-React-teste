import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Header } from "../../components/Header";
import { Context } from "../../contexts/LoginContext";
import { FiArrowRight } from "react-icons/fi";
import { Container, SectionRepository } from "./styles";
import api from "../../services/api";
import { Marker } from "../../components/Marker/styles";
import Layout from "../../components/Layout/Layout";

interface FollowersProps {
  avatar_url: string;
  login: string;
}

const Followers: React.FC = () => {
  const history = useHistory();
  const { login, followersAmount} = useContext(Context);
  const [seguidores, setSeguidores] = useState<FollowersProps[]>([]);

  useEffect(() => {
    api.get(`users/${login}/followers`).then((response) => {
      setSeguidores(response.data);
    });
  }, [login]);

  function handleSaveFollower(login: string) {
    history.push(`/details/${login}`);
  }

  return (
    <Layout>
      <Container>
        <Header
          title={`${followersAmount} Seguidores`}
          action={""}
          back={true}
        />
        {seguidores?.map((follower) => (
          <SectionRepository key={follower.login}>
            <Marker />
            <div>
              <img src={follower.avatar_url} alt="" />
              <strong>#{follower.login}</strong>
              <FiArrowRight
                size={20}
                onClick={() => handleSaveFollower(follower.login)}
              />
            </div>
          </SectionRepository>
        ))}
      </Container>
    </Layout>
  );
};

export default Followers;
