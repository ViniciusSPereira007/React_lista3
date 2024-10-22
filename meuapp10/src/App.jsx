import GaleriaImagens from './GaleriaImagens'

const App = () => {
    const imagens = [
        {
            url: 'https://th.bing.com/th/id/OIP.JexyR7QjyFhbEDRRl_LObgHaEK?rs=1&pid=ImgDetMain',
            altText: 'Pagani Utopia'
        },
        {
            url: 'https://th.bing.com/th/id/OIP.wOUaoIrtag-I20fB7BAy0gHaEK?rs=1&pid=ImgDetMain',
            altText: 'Porsche 911'
        },
        {
            url: 'https://th.bing.com/th/id/OIP.q0rsPFRAY2Gwb9K0FZOJ5gHaEK?rs=1&pid=ImgDetMain',
            altText: 'McLaren 720S'
        }
    ]

    return (
        <div style={{ padding: '20px' }}>
            <h1>Galeria de Imagens</h1>
            <GaleriaImagens imagens={imagens} />
        </div>
    )
}

export default App
