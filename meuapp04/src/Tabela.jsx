import PropTypes from 'prop-types'

const Tabela = ({ dados }) => {
    return (
        <table border="1" style={{ width: '100%', textAlign: 'left' }}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Idade</th>
                </tr>
            </thead>
            <tbody>
                {dados.map((pessoa) => (
                    <tr key={pessoa.id}>
                        <td>{pessoa.id}</td>
                        <td>{pessoa.nome}</td>
                        <td>{pessoa.idade}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

Tabela.propTypes = {
    dados: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            nome: PropTypes.string.isRequired,
            idade: PropTypes.number.isRequired
        })
    ).isRequired
}

export default Tabela
