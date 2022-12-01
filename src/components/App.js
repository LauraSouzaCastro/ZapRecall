import GlobalStyle from './globalStyles'
import styled from "styled-components";
import Logo from './Logo';
import Rodape from './Rodape';
import Pergunta from './Pergunta';
import { useState } from 'react';

export default function App() {
  const cards = [
    { id: 1, question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
    { id: 2, question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
    { id: 3, question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    { id: 4, question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    { id: 5, question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
    { id: 6, question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
    { id: 7, question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
    { id: 8, question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
  ];
  const [cardsFeitos, setCardsFeitos] = useState([])
  const [respostas, setRespostas] = useState([])
  return (
    <>
      <GlobalStyle />
      <ScreenContainer>
        <Logo />
        <Pergunta cards={cards} setCardsFeitos={setCardsFeitos} cardsFeitos={cardsFeitos} respostas={respostas} setRespostas={setRespostas}/>
        <Rodape cards={cards} cardsFeitos={cardsFeitos} respostas={respostas}/>
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
    padding-bottom: 100px;
`;
