import hexToRgba from 'hex-to-rgba'
import Colaborador from '../Colaborador'
import './Time.css'

const Time = ({time, colaboradores, deletar, mudarCor, favoritar}) => {
    return (
        (colaboradores.length > 0) ? <section className='time' style={{ backgroundColor: hexToRgba(time.cor, '0.6'), backgroundImage: 'url(/imagens/fundo.png)' }}>
            <input value={time.cor} onChange={e => mudarCor(e.target.value, time.id)} type="color" className='color__item'/>
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map( (colaborador, index) => {
                    return <Colaborador 
                        key={index} 
                        corDeFundo={time.cor} 
                        colaborador={colaborador} 
                        deletar={deletar} 
                        favoritar={favoritar}
                    />
                })}
            </div>
        </section> 
        : ''
    )
}

export default Time