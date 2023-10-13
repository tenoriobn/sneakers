import styled, { ThemeProvider } from "styled-components";
import Header from "../Header";
import GlobalStyles from "../GlobalStyles";
import theme from '../../theme';
import { Outlet } from "react-router-dom";

const Main = styled.main`

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 3rem;


    margin-top: 5.75rem;
    padding: 0 3rem;
  }

  @media (min-width: 1200px) {
    align-items: flex-start;

    box-sizing: border-box;
  }
`

export default function DefaultPage() {
  return (
    <ThemeProvider theme={theme}>

      <GlobalStyles />
      <Header />
      <Main>
        <Outlet />
      </Main>

    </ThemeProvider>
  )
}
