import PropTypes from 'prop-types'

const Galeria = ({ lojas }) => {
    return (
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {lojas.map((loja, index) => (
                <a 
                    key={index} 
                    href={loja.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ textAlign: 'center', textDecoration: 'none', color: 'inherit' }}
                >
                    <img 
                        src={loja.imagem} 
                        alt={`Logo da ${loja.nome}`} 
                        style={{ width: '150px', height: '150px', objectFit: 'contain' }} 
                    />
                    <p>{loja.nome}</p>
                </a>
            ))}
        </div>
    )
}

Galeria.propTypes = {
    lojas: PropTypes.arrayOf(
        PropTypes.shape({
            nome: PropTypes.string.isRequired,
            imagem: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })
    ).isRequired
}

export default Galeria
