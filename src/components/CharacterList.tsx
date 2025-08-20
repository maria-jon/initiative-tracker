import type { Character } from "../models/Character";
import { CharacterCard } from "./CharacterCard";

type CharacterListProps = {
    character: Character[];
};

export const CharacterList = ({ character }: CharacterListProps) => {
    return(
        <>
        {character.map((c) => (
            <CharacterCard character={c} key={c.id} />
        ))}
        </>
    );
};