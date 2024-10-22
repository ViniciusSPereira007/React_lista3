import Galeria from './Galeria'

const App = () => {
    const lojas = [
        {
            nome: 'Porsche',
            imagem: 'https://quatrorodas.abril.com.br/wp-content/uploads/2017/02/porsche-911-gt1.jpg?crop=1&resize=1212,909',
            url: 'https://www.porsche.com'
        },
        {
            nome: 'McLaren',
            imagem: 'https://fotos-jornaldocarro-estadao.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2021/03/05123657/IMG_9553-1160x773.jpg',
            url: 'https://www.mclaren.com/racing/'
        },
        {
            nome: 'Pagani',
            imagem: 'https://s2-autoesporte.glbimg.com/ZMSlBSaBNCT5r4CGB64UmnEAim0=/0x260:2592x1728/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/O/A/8KROmFQUuYp1G8fxRNsg/pagani-01.jpg',
            url: 'https://www.pagani.com'
        }
    ]

    return (
        <div>
            <h1>Galeria de Lojas</h1>
            <Galeria lojas={lojas} />
        </div>
    )
}

export default App
