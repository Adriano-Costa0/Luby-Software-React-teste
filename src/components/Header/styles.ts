import styled from 'styled-components';

export const HeaderContainer = styled.div`
    width: 100%;
    height: 50px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:  1rem 1rem;
    background-color: #1F1F1F;

    span {
        color: #FFF;
        font-weight: bold;
        
    }

    button {
        display:flex;
        gap: 0.7rem;
        align-items: center;
        color: #fff;
        background:transparent;
        border: none;
    }

    a {
        text-decoration: none;
        display:flex;
        gap: 0.7rem;
        align-items: center;
        color: #ffffff;
    }
`;