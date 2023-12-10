import { useQuery } from "@tanstack/react-query";

const placeholderOptions = {
    results: [{ name: "robo-bitch" }, { name: "mega-farter" }],
};

export default function usePokemonData() {
    const pokemonQuery = useQuery({
        queryKey: ["pokemon"],
        queryFn: () =>
            fetch("https://pokeapi.co/api/v2/pokemon?limit=10").then((res) =>
                res.json()
            ),
        staleTime: 1000 * 60 * 60,
        placeholderData: placeholderOptions,
    });
    return pokemonQuery;
}
