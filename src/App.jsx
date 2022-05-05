import Home from './pages/Home';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 62.5%;
  }
  :root {
    --primary-soft-red: hsl(7, 99%, 70%);
    --primary-yellow: hsl(51, 100%, 49%);
    --primary-dark-des-cyan: hsl(167, 40%, 24%);
    --primary-dark-mod-cyan: hsl(168, 34%, 41%);
    --primary-dark-blue: hsl(198, 62%, 26%);

    --very-dark-des-blue: hsl(212, 27%, 19%);
    --very-dark-gray-blue: hsl(213, 9%, 39%);
    --dark-grayish-blue: hsl(232, 10%, 55%);
    --grayish-blue: hsl(210, 4%, 67%);
    --white: hsl(0, 0%, 100%);
  }

  body {
    font-size: 1.8rem;
    font-family: 'Barlow', sans-serif;
  }
  img {
    max-width: 100%;
  }
`

function App() {

  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  )
}

export default App
