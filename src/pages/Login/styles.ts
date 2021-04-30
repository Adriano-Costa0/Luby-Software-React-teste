import styled, { css } from "styled-components";
import { shade } from "polished";

interface FormProps {
  hasError: boolean;
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 6.125rem;
    height: 6.125rem;
    margin: 2rem auto;
  }
`;

export const Error = styled.p`
  color: var(--error);
  font: 0.9rem Roboto, sans-serif;
`;

export const Form = styled.form<FormProps>`
  display: flex;
  flex-direction: column;
  width: 100%;

  section {
    
    width: 100%;
    height: 4.375rem;
    padding: 0.5rem 1.5rem;
    border: 0;
    border-radius: 8px;
    
    display: flex;
    align-items: center;

    color: #3a3a3a;
    background: #fff;
    border: 2px solid #fff;

    ${(props) =>
        props.hasError &&
        css`
          border-color: #c53030;
        `}

    input {
      border: none;
      flex: 1;

      &::placeholder {
        color: #a8a8b3;
        font-size: 1.2rem;
      }
    }
  }

  button {
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.6rem;
    padding: 0 1.5rem;
    margin-top: 1.5rem;
    border-radius: 8px;

    font: 1.1rem Roboto, sans-serif;
    font-weight: bold;
    border: none;
    background: var(--marker);
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, "#FFCE00")};
    }
  }
`;
