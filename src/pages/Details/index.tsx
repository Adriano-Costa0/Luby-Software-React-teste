import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../contexts/LoginContext";
import { Header } from "../../components/Header";
import { Marker } from "../../components/Marker/styles";
import { Container, SectionHeader, SectionProfile, SectionBio } from "./styles";
import api from "../../services/api";
import Layout from "../../components/Layout/Layout";
import { useRouteMatch } from "react-router";

interface UserProps {
  login: string;
  name: string;
  email: string | null;
  avatar_url: string;
  location: string;
  followers: number;
  following: number;
  public_repos: number;
  bio: string;
}
interface DetailsParams {
  login: string;
}

const Details: React.FC = () => {
  const { params } = useRouteMatch<DetailsParams>();
  const [user, setUser] = useState<UserProps | null>(null);

  useEffect(() => {
    api.get(`/users/${params.login}`).then((response) => {
      setUser(response.data);
    });
  });
  return (
    <Layout>
      <Container>
        <Header title={`#${user?.login}`} action={"login"} back={true} login={params.login}/>
        <div className="avatar">
          <img src={user?.avatar_url} alt={user?.name} />
        </div>
        <SectionHeader>
          <Marker></Marker>
          <div>
            <h1>{user?.name}</h1>
            <span>{user?.email}</span>
            <span>{user?.location}</span>
          </div>
        </SectionHeader>
        <SectionProfile>
          <ul>
            <li>
              <strong>{user?.followers}</strong>
              <span>Seguidores</span>
            </li>
            <li>
              <strong>{user?.following}</strong>
              <span>Seguindo</span>
            </li>
            <li>
              <strong>{user?.public_repos}</strong>
              <span>Repos</span>
            </li>
          </ul>
        </SectionProfile>
        <SectionBio>
          <Marker></Marker>
          <div>
            <h1>BIO</h1>
            <p>{user?.bio}</p>
          </div>
        </SectionBio>
      </Container>
    </Layout>
  );
};

export default Details;
