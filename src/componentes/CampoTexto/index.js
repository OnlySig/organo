import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}` 

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
            <div className={`campo-${props.type}`}>
                <label>
                    {props.label}
                </label>
                <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada} type={props.type}/>
            </div>

    )
}

export default CampoTexto