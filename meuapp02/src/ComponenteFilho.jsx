
import PropTypes from 'prop-types'

const ComponenteFilho = ({ mensagem }) => {
    return (
        <div>
            <h3>Componente Filho</h3>
            <p>{mensagem}</p>
        </div>
    )
}

ComponenteFilho.propTypes = {
    mensagem: PropTypes.string.isRequired
}

export default ComponenteFilho
