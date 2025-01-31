function handleclick(event) {
    console.log(event)
}

const Button = () => {
    return (
        <button onClick={handleclick}>
            Soy un boton
        </button>
    )
}

export const Contador = () => {
    return (
        <>
            <h1>Contador</h1>
            <Button></Button>
        </>
    )
}
