import { useState } from 'react'
import Paragrafo from './Paragrafo'

const App = () => {
    const [isHighlighted, setIsHighlighted] = useState(false)

    const alternarHighlight = () => {
        setIsHighlighted(!isHighlighted)
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>Alterar Estilo Dinamicamente</h1>
            <button onClick={alternarHighlight}>
                {isHighlighted ? 'Remover Destaque' : 'Destacar Texto'}
            </button>
            <Paragrafo isHighlighted={isHighlighted} />
        </div>
    )
}

export default App
