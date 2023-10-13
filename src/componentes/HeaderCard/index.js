import "./HeaderCard.css"

const HeaderCard = ({title, sumir}) => {
    return(
        <div className="card__header">
            <div className="titleCard">
                <h1 className="title__header">{title}</h1>
                <span className="span__item"></span>
            </div>
            <button className="btnAdd2" onClick={sumir}>
                <img src="/imagens/btnSumir.png" alt="botao2"/>
            </button>
        </div>
    )
}

export default HeaderCard