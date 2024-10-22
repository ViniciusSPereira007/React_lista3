import Tabela from './Tabela'

const App = () => {
    const pessoas = [
        { id: 1, nome: 'Alice', idade: 25 },
        { id: 2, nome: 'Bob', idade: 30 },
        { id: 3, nome: 'Carlos', idade: 35 }
    ]

    return (
        <div>
            <h1>Tabela de Pessoas</h1>
            <Tabela dados={pessoas} />
        </div>
    )
}

export default App
