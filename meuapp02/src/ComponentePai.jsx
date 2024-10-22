
import ComponenteFilho from './ComponenteFilho'

const ComponentePai = () => {
    const mensagem = "Olá do Componente Pai!"

    return (
        <div>
            <h2>Componente Pai</h2>
            <ComponenteFilho mensagem={mensagem} />
        </div>
    )
}

export default ComponentePai
