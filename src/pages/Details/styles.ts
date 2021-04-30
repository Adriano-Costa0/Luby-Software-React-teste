import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  width: 100%;
  background: #292929;
  height: 90vh;

  .avatar {
    height: 12%;
    width: 100%;
    background: #1F1F1F;
    margin-bottom: 2rem;
    display:flex;
    justify-content: center;
  }
  img {
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    border: 3px solid #ffffff;
    position: absolute;
    top: 12%;
  }
`;

export const SectionProfile = styled.section`
  margin-top: 1rem;
  width: 100%;

  ul {
    display: flex;
    list-style: none;
    margin-top: 2.5rem;
    background: #5252525d;
    padding: 0.5rem;
    justify-content: space-around;

    strong {
      display: block;
      font-size: 2.1rem;
      color: #ffffff;
    }

    span {
      display: block;
      margin-top: 0.25rem;
      color: #ffffff;
    }
  }
`;

export const SectionHeader = styled.section`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
  margin-top: 2rem;

  div {
    align-items: stretch;
    margin-left: 0.5rem;
    display: flex;
    flex-direction: column;
    h1 {
      color: #ffffff;
      font: 2rem Roboto, sans-serif;
    }

    span {
      color: #ffffff;
      font: 1rem RobotoLight, sans-serif;
    }
  }
`;

export const SectionBio = styled.section`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
  margin-top: 2rem;

  div {
    align-items: stretch;
    margin-left: 0.5rem;
    h1 {
      color: #ffffff;
      margin-bottom: 1rem;
    }
    p {
      color: #ffffff;
      font: 1rem RobotoLight, sans-serif;
    }
  }
`;
