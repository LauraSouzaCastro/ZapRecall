import styled from "styled-components"
import setaPlay from "../assets/seta_play.png"

export default function Pergunta({cards, setCardsFeitos, cardsFeitos}) {
    function viraCard(card){
        setCardsFeitos([...cardsFeitos, card.id])
        console.log(cardsFeitos.includes(card.id))
    }
    return (
            <>
                {cards.map( (c) => {
                    return(
                        <PerguntaFechada key={c.id} cardsFeitos={cardsFeitos} card={c}>
                            <PerguntaFechadaP>Pergunta {c.id}</PerguntaFechadaP>
                            <Botao disabled={cardsFeitos.includes(c.id)} onClick={() => viraCard(c)}><img src={setaPlay} alt=""/></Botao>
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
const Botao =styled.button`
    border:none;
    background: none;
`;
const PerguntaFechadaP = styled.p`
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #333333;

`;