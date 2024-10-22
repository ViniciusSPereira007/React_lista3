import PropTypes from 'prop-types'

const GaleriaImagens = ({ imagens }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {imagens.map((imagem, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                    <img 
                        src={imagem.url} 
                        alt={imagem.altText} 
                        style={{ maxWidth: '300px', borderRadius: '10px' }} 
                    />
                    <p>{imagem.altText}</p>
                </div>
            ))}
        </div>
    )
}

GaleriaImagens.propTypes = {
    imagens: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string.isRequired,
            altText: PropTypes.string.isRequired
        })
    ).isRequired
}

export default GaleriaImagens
