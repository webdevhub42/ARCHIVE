export const usePokemon = (token) => {
    const [pokemon, setPokemon] = useState([]);
    useEffect(() => {
        (async() => {
            if (token) {
            	const fetchedPokemon = await getPokemon(token);
            	setPokemon(fetchedPokemon);
            }
        })();
    },[token]);
    return pokemon;
}
