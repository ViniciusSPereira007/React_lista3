import ComponenteCondicional from './ComponenteCondicional'

const App = () => {
    return (
        <div>
            <h1>Renderização Condicional em React</h1>
      
            <ComponenteCondicional isVisible={true} />
         
            <ComponenteCondicional isVisible={false} />
        </div>
    )
}

export default App
