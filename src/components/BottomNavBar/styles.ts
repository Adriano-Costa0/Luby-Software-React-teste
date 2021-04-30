import styled from "styled-components";

export const NavBar = styled.nav`
  background: var(--white);
  border-radius: 16px 16px 0 0;
  padding: 0.9rem;
  width: 100vw;
  max-width: 720px;
  position: fixed;
  bottom: 0;

  ul {
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: space-between;

    li {
      a {
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-weight: 600;


        &:focus {
          svg {
            color: #000;
          }
          span {
            color: #000;
          }
        }

        svg {
          color: #a5a5a5;
        }
        span {
          color: #a5a5a5;
        }
      }

      &:last-child {
        margin-right: 0.7rem;
      }
    }
  }
`;
