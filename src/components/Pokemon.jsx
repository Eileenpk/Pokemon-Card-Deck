
export default function Pokemon({pokemon}) {
    return (
        <section className="pokemon">
            <p className="pokemon__type">Basic Pokémon</p>

            <div className="pokemon__name">
                <p>{pokemon.name}</p>
                <p className="pokemon__hp">{pokemon.maxHP} HP</p>
            </div>
            
            <div className="pokemon__image">
                <img src={pokemon.image} alt={pokemon.name} />
            </div>

            <div className="pokemon__meta">
                <p>{pokemon.types} Pokémon. Height {pokemon.height.maximum} Weight {pokemon.weight.maximum}</p>
            </div>

            <div className="pokemon__attacks">
                <p className="attacks__p">Attacks: </p>
                {pokemon.attacks.special.slice(0, 3).map(attack => (
                    <span key={`${attack.name}-${attack.damage}`}>{attack.name}: {attack.damage}</span>
                ))}
            </div>
        </section>
    )
}