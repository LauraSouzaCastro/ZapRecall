import styled from "styled-components"
import setaPlay from "../assets/seta_play.png"



export default function Pergunta({cards, setCardsFeitos}) {
    return (
            <>
                {cards.map( (c) => {
                    return(
                        <PerguntaFechada key={c.id}>
                            <PerguntaFechadaP>Pergunta {c.id}</PerguntaFechadaP>
                            <img src={setaPlay} alt=""/>
                        </PerguntaFechada>
                    )
                })}           
            </>
    )
}

const PerguntaFechada = styled.div`
    width: 300px;
    height: 65px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const PerguntaFechadaP = styled.p`
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #333333;

`