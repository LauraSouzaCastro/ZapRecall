import logo from "../assets/logo.png";
import styled from "styled-components";
export default function TelaInicial({setIniciou}){
    return(
        <Container>
            <img src={logo} alt="" />
            <h1>ZapRecall</h1>
            <Botao onClick={() => setIniciou(true)}>Iniciar Recall!</Botao>
        </Container>
    );
}
const Botao = styled.button`
  width: 246px;
  height: 54px;
  background: #FFFFFF;
  border: 1px solid #D70900;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #D70900;
`;
const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
        font-family: 'Righteous', cursive;
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        margin-left: 20px;
        margin-top: 15px;
        margin-bottom: 30px;
    }
`;