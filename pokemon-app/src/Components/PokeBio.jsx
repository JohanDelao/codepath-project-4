function PokeBio({name, types, image, height, weight}){
    return (
        <div className="pokeBioSection">
            <div className="upperBio">
                <h3 id="pokemonName">{name}</h3>
                <div className="typeOuterContainer">
                    {types.map((type) => {
                        return <div className="typeContainer">
                            <p className="type">{type}</p>
                        </div>
                    })}
                </div>
            </div>
            <div className="mainBio">
                <div className="bioImage">
                    <img id="image" src={image} width={225} height={225}></img>
                </div>
                <div className="bioBio">
                    <div className="heightSection">
                        <p className="header">Height</p>
                        <p id="height">{height/10} m</p>
                    </div>
                    <div className="weightSection">
                        <p className="header">Weight</p>
                        <p id="weight">{weight/10} kg</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PokeBio