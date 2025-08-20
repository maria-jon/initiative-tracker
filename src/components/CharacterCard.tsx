import type { Character } from "../models/Character";

type CharacterCardProps = {
    character: Character;
};

export const CharacterCard = ({ character }:  CharacterCardProps) => {
    return(
        <div>
            <span>{character.id}</span>
            <span>{character.name}</span>
            <span>{character.initiative}</span>
            <span>{character.hp}</span>
            <span>{character.ac}</span>
        </div>
    );
};