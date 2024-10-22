import { useState } from 'react'
import ListaTarefas from './ListaTarefas'

const App = () => {
    const [tarefas, setTarefas] = useState([
        { id: 1, texto: 'Estudar React' },
        { id: 2, texto: 'Praticar lógica de programação' },
        { id: 3, texto: 'Fazer exercícios de JavaScript' }
    ])

    const removerTarefa = (id) => {
        const novasTarefas = tarefas.filter(tarefa => tarefa.id !== id)
        setTarefas(novasTarefas)
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>Lista de Tarefas</h1>
            <ListaTarefas tarefas={tarefas} onRemover={removerTarefa} />
        </div>
    )
}

export default App
