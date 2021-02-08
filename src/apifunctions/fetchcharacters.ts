import { API, Storage } from 'aws-amplify';
import { listCharacters } from '../graphql/queries';

export default async function fetchCharacters(setCharacters: any) {
    const apiData: any = await API.graphql({ query: listCharacters });
    const charactersFromAPI = apiData.data.listCharacters.items;
    
    await Promise.all(charactersFromAPI.map(async (character: any) => {
        if (character.image) {
            const image = await Storage.get(character.image);
            character.image = image;
        }
        if (character.typeImage) {
            const imageName = "Element_" + character.typeImage;
            const image = await Storage.get(imageName);
            character.typeImage = image;
        }
        if (character.abilityOne.image) {
            const image = await Storage.get(character.abilityOne.image);
            character.abilityOne.image = image;
        }
        if (character.abilityTwo.image) {
            const image = await Storage.get(character.abilityTwo.image);
            character.abilityTwo.image = image;
        }
        if (character.abilityThree.image) {
            const image = await Storage.get(character.abilityThree.image);
            character.abilityThree.image = image;
        }
        return character;
    }));

    // sort alphabetically
    const sortedCharacters = (apiData.data.listCharacters.items);
    sortedCharacters?.sort((a: { name: string; }, b: { name: any; }) => a.name.localeCompare(b.name));
    console.log("fetchCharacters():", sortedCharacters)

    setCharacters(sortedCharacters)
}