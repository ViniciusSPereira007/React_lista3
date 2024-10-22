import PropTypes from 'prop-types'

const Card = ({ children }) => {
    const estiloCard = {
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '20px',
        margin: '20px 0',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'white'
    }

    return <div style={estiloCard}>{children}</div>
}

Card.propTypes = {
    children: PropTypes.node.isRequired
}

export default Card
