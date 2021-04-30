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
    align-items: baseline;
    padding: 1.5rem 1.5rem 1.5rem 0;
  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100vw;
    padding: 1.5rem;
    align-items: stretch;

    border-bottom: 2px solid #7070705a;
    background: transparent;

    strong {
      color: var(--white);
      font: 20px Helvetica, sans-serif;
      font-weight: bold;
    }
    p {
      font: 14px Helvetica, sans-serif;
      color: var(--white);
    }
    span {
      display: flex;
      justify-content: space-between;

      p {
        display: flex;
        align-items: center;
        gap: 0.5em;
      }
    }
  }
`;
