import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  outline: 0;
  box-sizing: border-box;
}
:root {
    --white:#ffffff;
    --error:#EB2D2D;
    --background:#292929;
    --gray: #535353;
    --gray-50: #1F1F1F;
    --marker: #FFCE00;
}


@media(max-width: 1500px){
  html{
      font-size: 87.5%;
  }
}
@media(max-width: 1080px){
  html{
      font-size: 81.25%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 75%;
  }
}

body {
  background: var(--background);
  -webkit-font-smoothing: antialiased;
  display:flex;
  justify-content: center;
  position: relative;
}

body, input, button {
  font: 1rem Roboto, sans-serif;
}

button {
  cursor: pointer;
}


`;
