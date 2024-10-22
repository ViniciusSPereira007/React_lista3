import PropTypes from 'prop-types'

const ComponenteCondicional = ({ isVisible }) => {
    return (
        <div>
            {isVisible ? (
                <p>O parágrafo está visível porque isVisible é true!</p>
            ) : (
                <p>O parágrafo não será exibido.</p>
            )}
        </div>
    )
}

ComponenteCondicional.propTypes = {
    isVisible: PropTypes.bool.isRequired
}

export default ComponenteCondicional
