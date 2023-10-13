import './Colaborador.css'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai"

const Colaborador = ({colaborador, corDeFundo, deletar, favoritar}) => {
    const aofavoritar = _ => {
        favoritar(colaborador.id)
    }
    return (<div className='colaborador'>
        <AiFillCloseCircle className="deletar" onClick={()=>deletar(colaborador.id)}/>
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome}/>
        </div>
        <div className='rodape'>
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className="favo">
                {colaborador.favorito
                    ? <AiFillHeart onClick={aofavoritar} color='#FF0000'/>
                    : <AiOutlineHeart onClick={aofavoritar}/>
                }
            </div>
        </div>
    </div>)
}

export default Colaborador