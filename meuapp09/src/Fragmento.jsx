const Fragmento = () => {
    const itens = ['Item 1', 'Item 2', 'Item 3']

    return (
        <>
            <h2>Lista de Itens</h2>
            <ul>
                {itens.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <p>Eu amo Carros.</p>
        </>
    )
}

export default Fragmento
