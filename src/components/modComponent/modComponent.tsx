function ModComponent({ mod }: any)
{
    return (
        <div key={mod.id} className="mod-item">
            <img alt={mod.image} />
            <h1>{mod.name}</h1>
            <p>{mod.description}</p>
        </div>
    )
}

export default ModComponent
