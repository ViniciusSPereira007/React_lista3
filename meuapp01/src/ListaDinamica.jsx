
import PropTypes from 'prop-types'

const ListaDinamica = ({ nomes }) => {
    const carrosLuxuosos = [
        "Ferrari",
        "Lamborghini",
        "Porsche",
        "Rolls Royce",
        "Bentley",
        "Maserati",
        "Aston Martin",
        "Tesla"
    ]


    if (!Array.isArray(nomes)) {
        console.error('A propriedade "nomes" deve ser um array')
        return null
    }

    return (
        <ul>
            {nomes.map((nome, index) => (
                <li key={index}>
                    {nome} - {carrosLuxuosos[index % carrosLuxuosos.length]}
                </li>
            ))}
        </ul>
    )
}

ListaDinamica.propTypes = {
    nomes: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default ListaDinamica
