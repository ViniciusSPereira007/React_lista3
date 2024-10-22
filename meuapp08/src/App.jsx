import Card from './Card'

const App = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Exemplo de Componente com Children</h1>

            <Card>
                <h2>Título no Card</h2>
                <p>Este é um parágrafo dentro do card.</p>
            </Card>

            <Card>
                <img 
                    src="https://s2-autoesporte.glbimg.com/ZMSlBSaBNCT5r4CGB64UmnEAim0=/0x260:2592x1728/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/O/A/8KROmFQUuYp1G8fxRNsg/pagani-01.jpg" 
                    alt="Pagani Utopia" 
                    style={{ width: '100%', borderRadius: '10px' }}
                />
                <p>Este é um card com uma imagem incrível da Pagani!</p>
            </Card>
        </div>
    )
}

export default App
