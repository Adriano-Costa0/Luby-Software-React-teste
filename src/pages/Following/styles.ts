import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 95%;
  background: transparent;
  flex-direction: column;
`;

export const SectionRepository = styled.section`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    
  div {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    width: 100%;
    padding: 1.5rem;
    align-items: center;
    justify-content: space-between;

    border-bottom: 2px solid #7070705a;
    background: transparent;

    img {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        border: 2px solid #FFF;
    }

    strong {
      color: var(--white);
      font: 16px Helvetica, sans-serif;
    }

    svg {
      color: var(--white);
      cursor: pointer;
    }
  }
`;
