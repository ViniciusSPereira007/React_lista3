import PropTypes from 'prop-types'

const ListaTarefas = ({ tarefas, onRemover }) => {
    return (
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {tarefas.map((tarefa) => (
                <li 
                    key={tarefa.id} 
                    style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        marginBottom: '10px',
                        backgroundColor: '#f0f0f0', 
                        padding: '10px', 
                        borderRadius: '5px' 
                    }}
                >
                    {tarefa.texto}
                    <button onClick={() => onRemover(tarefa.id)}>Remover</button>
                </li>
            ))}
        </ul>
    )
}

ListaTarefas.propTypes = {
    tarefas: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            texto: PropTypes.string.isRequired
        })
    ).isRequired,
    onRemover: PropTypes.func.isRequired
}

export default ListaTarefas
