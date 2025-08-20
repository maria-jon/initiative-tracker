import { useState, type ChangeEvent, type FormEvent } from "react";
import { Character } from "../models/Character";
import { CharacterList } from "./CharacterList";

export const CharacterApp = () => {
    const [characterId, setCharacterId] = useState<number>(1);

    const [characters, setCharacters] = useState<Character[]>([
        // new Character(0, "", 0, 0, 0)
    ]);

    const [character, setCharacter] = useState<Character>(new Character(characterId, "", 0, 0, 0));

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.type === "text") {
            setCharacter({ ...character, [e.target.id]: e.target.value });
        }
    
        if (e.target.type === "number") {
            setCharacter({ ...character, [e.target.id]: +e.target.value });
        }

    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        setCharacters([...characters, character]);
        setCharacter(new Character(characterId, "", 0, 0, 0));
        console.log(characters);
    }


    return(
        <>
            <CharacterList character={characters}/>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id">Id:</label>
                        <input
                            placeholder="Id"
                            type="number"
                            id="id"
                            value={character.id}
                            onChange={handleChange}
                        />
                </div>
                <div>
                    <label htmlFor="initiative">Initiative:</label>
                        <input
                            placeholder="Initiative"
                            type="number"
                            id="initiative"
                            value={character.initiative}
                            onChange={handleChange}
                        />
                </div>

                <div>
                    <label htmlFor="name">Name:</label>
                        <input
                            placeholder="Name"
                            type="text"
                            id="name"
                            value={character.name}
                            onChange={handleChange}
                        />
                </div>

                <div>
                    <label htmlFor="hp">HP:</label>
                        <input
                            placeholder="HP"
                            type="number"
                            id="hp"
                            value={character.hp}
                            onChange={handleChange}
                        />
                </div>

                <div>
                    <label htmlFor="ac">AC:</label>
                        <input
                            placeholder="AC"
                            type="number"
                            id="ac"
                            value={character.ac}
                            onChange={handleChange}
                        />
                </div>
                <button onClick={() => setCharacterId(characterId => characterId + 1)}>Add</button>
            </form>
        </>
    )
}