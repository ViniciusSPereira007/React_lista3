
import ListaDinamica from './ListaDinamica'

const App = () => {
    const nomes = ["Vinicius", "João", "Maria", "Carlos"]

    return (
        <div>
            <h1>Lista de Nomes e Carros Luxuosos</h1>
            <ListaDinamica nomes={nomes} />
        </div>
    )
}

export default App
