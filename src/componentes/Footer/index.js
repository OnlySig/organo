import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai"
import "./Footer.css"

export const Footer = () => {
    return (
        <div className="footer__container">
            <div className="footer__itens">
                <div className="ancorFooter__container">
                    <a href="#"><AiFillFacebook /></a>
                    <a href="#"><AiFillTwitterSquare /></a>
                    <a href="#"><AiFillInstagram /></a>
                </div>
                    <img src="/imgs/logo.png" alt="" />
                    <span className="footer__span"><a href="https://github.com/OnlySig" target="_blank" rel="noreferrer">Reformulado por um aluno da Alura.</a></span>
            </div>
        </div>
    )
}