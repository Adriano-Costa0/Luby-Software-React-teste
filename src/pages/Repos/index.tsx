import React, { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Context } from "../../contexts/LoginContext";
import { FiStar, FiLock, FiUnlock } from "react-icons/fi";
import { Container, SectionRepository } from "./styles";
import api from "../../services/api";
import { Marker } from "../../components/Marker/styles";
import Layout from "../../components/Layout/Layout";

interface Repository {
  name: string;
  description: string;
  stargazers_count: string;
}

const Repos: React.FC = () => {
  const { login, publicRepos} = useContext(Context);
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    api.get(`users/${login}/repos`).then((response) => {
      setRepositories(response.data);
    });
  }, [login]);

  return (
    <Layout>
      <Container>
        <Header
          title={`${publicRepos} repositórios`}
          action={""}
          back={true}
        />
        {repositories?.map((repository) => (
          <SectionRepository key={repository.name}>
            <Marker />
            <div>
              <strong>{repository.name}</strong>
              <p>{repository.description}</p>
              <span>
                <p>
                  <FiStar size={20} color="#FFCE00" />
                  {repository.stargazers_count}
                </p>
                <p>
                  <FiLock size={20} color="#63BF1F" />
                  <FiUnlock size={20} color="#CC042A" />
                </p>
              </span>
            </div>
          </SectionRepository>
        ))}
      </Container>
    </Layout>
  );
};

export default Repos;
