import { useState } from "react";
import styled from "styled-components";
import setaPlay from "../assets/seta_play.png";
import setaVirar from "../assets/seta_virar.png";
import certoIcone from "../assets/icone_certo.png";
import quaseIcone from "../assets/icone_quase.png";
import erroIcone from "../assets/icone_erro.png";

export default function Pergunta({cards, setCardsFeitos, cardsFeitos, respostas, setRespostas}) {
    const [cardsVirados, setCardsVirados] = useState([]);
    const [cardsRespostas, setCardsRespostas] = useState([]);
    function respondeu(c, str){
        setCardsFeitos([...cardsFeitos, c.id]);
        if(str === "erro"){
            setRespostas([...respostas, {id: c.id, icone: erroIcone, cor: "#FF3030"}]);
        }
        if(str === "quase"){
            setRespostas([...respostas, {id: c.id, icone: quaseIcone,  cor: "#FF922E"}]);
        }
        if(str === "certo"){
            setRespostas([...respostas, {id: c.id, icone: certoIcone, cor: "#2FBE34"}]);
        }
    }
    function renderiza(c){
        if(cardsVirados.includes(c.id)){
            if(cardsRespostas.includes(c.id)){
                if(cardsFeitos.includes(c.id)){
                    for(let i = 0; i < respostas.length; i++){
                        if(respostas[i].id === c.id){
                            return(
                                <PerguntaFechada key={c.id} finalizou={cardsFeitos.includes(c.id)} cor={respostas[i].cor} data-test="flashcard">
                                    <p data-test="flashcard-text">Pergunta {respostas[i].id}</p>
                                    <img src={respostas[i].icone} alt="" data-test={respostas[i].icone === erroIcone ? "no-icon" : respostas[i].icone === certoIcone ? "zap-icon": respostas[i].icone === quaseIcone ? "partial-icon" : ""}/>
                                </PerguntaFechada>
                            );
                        }
                    }
                }else{
                    return (
                        <PerguntaAberta  key={c.answer} data-test="flashcard">
                            <p data-test="flashcard-text">{c.answer}</p>
                            <ContainerBotoes>
                                <BotaoOpcao onClick={() => respondeu(c, "erro")} cor={"#FF3030"} data-test="no-btn">Não lembrei</BotaoOpcao>
                                <BotaoOpcao onClick={() => respondeu(c, "quase")} cor={"#FF922E"} data-test="partial-btn">Quase não lembrei</BotaoOpcao>
                                <BotaoOpcao onClick={() => respondeu(c, "certo")} cor={"#2FBE34"} data-test="zap-btn">Zap!</BotaoOpcao>
                            </ContainerBotoes>
                        </PerguntaAberta>
                    );
                }
            }else{
                return (
                    <PerguntaAberta key={c.question} data-test="flashcard">
                        <p data-test="flashcard-text">{c.question}</p>
                        <img src={setaVirar} alt="" onClick={() => setCardsRespostas([...cardsRespostas, c.id])}  data-test="turn-btn"/>
                    </PerguntaAberta>
                );
            }
        }else{
            return(
                <PerguntaFechada key={c.id} cor={"#333333"} data-test="flashcard">
                    <p data-test="flashcard-text">Pergunta {c.id}</p>
                    <img src={setaPlay} alt="" onClick={() => setCardsVirados([...cardsVirados, c.id])} data-test="play-btn"/>
                </PerguntaFechada>
            );
        }
    } 
    return (
            <Container>
                {cards.map( (c) => renderiza(c))}           
            </Container>
    );
}
const Container = styled.div`
    margin-bottom: 160px;
`;
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
    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: ${props => props.cor};
        text-decoration: ${props => props.finalizou ? "line-through" : ""} ;
    }
`;
const PerguntaAberta = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img{
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`;
const ContainerBotoes = styled.div`
    display: flex;
    margin-top: 20px;
`;
const BotaoOpcao = styled.button`
    width: 90px;
    height: 40px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: ${props => props.cor};
    border-radius: 5px;
    padding: 5px;
    border: none;
    margin-right: 8px;
`;