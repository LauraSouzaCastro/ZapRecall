import GlobalStyle from './globalStyles';
import styled from "styled-components";
import { useState } from 'react';
import TelaInicial from './TelaInicial';
import Jogo from './Jogo';

export default function App() {
  const [iniciou, setIniciou] = useState(false);
  return (
    <>
      <GlobalStyle/>
      <ScreenContainer>
        {iniciou ? <Jogo /> : <TelaInicial setIniciou={setIniciou} />}
      </ScreenContainer>
    </>
  );
}
const ScreenContainer = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;