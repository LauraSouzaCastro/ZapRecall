import styled from "styled-components"
import certoIcone from "../assets/icone_certo.png"
import quaseIcone from "../assets/icone_quase.png"
import erroIcone from "../assets/icone_erro.png"
export default function Rodape({cards, cardsFeitos, respostas}){
    return(
        <FooterConcluidos>
            {cardsFeitos.length}/{cards.length} CONCLUÍDOS
            <ContainerBotoes>
                {respostas.map((r) => <img key={r.id} src={r.icone} alt="" />)}
            </ContainerBotoes>
        </FooterConcluidos>
    )
}

const FooterConcluidos = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive', sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 9px;
    height: 70px;
`;
const ContainerBotoes = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  margin: 6px;
  img{
    margin-right: 5px;
  }
`