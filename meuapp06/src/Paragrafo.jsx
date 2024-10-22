import PropTypes from 'prop-types'

const Paragrafo = ({ isHighlighted }) => {
    const estilo = {
        color: isHighlighted ? 'yellow' : 'black',
        backgroundColor: isHighlighted ? 'black' : 'white',
        padding: '10px',
        borderRadius: '5px'
    }

    return <p style={estilo}>Este texto muda de cor dinamicamente!</p>
}

Paragrafo.propTypes = {
    isHighlighted: PropTypes.bool.isRequired
}

export default Paragrafo
