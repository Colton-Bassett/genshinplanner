import { API, Storage } from 'aws-amplify';
import { listCharacters } from '../graphql/queries';

export default async function fetchCharacters(setCharacters: any) {
    const apiData: any = await API.graphql({ query: listCharacters });
    const charactersFromAPI = apiData.data.listCharacters.items;
    
    await Promise.all(charactersFromAPI.map(async (character: any) => {
        // 24 hours
        //let imageURLExpiration = 86400; 
        if (character.image) {
            const imageLocation = "https://anemo.s3.us-east-2.amazonaws.com/" + character.image;

            // const image = await Storage.get(character.image, {expires: imageURLExpiration});
            const image = imageLocation;
            character.image = image;
        }
        if (character.typeImage) {
            const imageName = "Element_" + character.typeImage;
            const imageLocation = "https://anemo.s3.us-east-2.amazonaws.com/" + imageName;
            const image = imageLocation;
            character.typeImage = image;
        }
        if (character.abilityOne.image) {
            const imageLocation = "https://anemo.s3.us-east-2.amazonaws.com/" + character.abilityOne.image;
            const image = imageLocation;
            character.abilityOne.image = image;
        }
        if (character.abilityTwo.image) {
            const imageLocation = "https://anemo.s3.us-east-2.amazonaws.com/" + character.abilityTwo.image;
            const image = imageLocation
            character.abilityTwo.image = image;
        }
        if (character.abilityThree.image) {
            const imageLocation = "https://anemo.s3.us-east-2.amazonaws.com/" + character.abilityThree.image;
            const image = imageLocation;
            character.abilityThree.image = image;
        }
        return character;
    }));

    // sort alphabetically
    const sortedCharacters = (apiData.data.listCharacters.items);
    sortedCharacters?.sort((a: { name: string; }, b: { name: any; }) => a.name.localeCompare(b.name));
    //console.log("fetchCharacters():", sortedCharacters)

    setCharacters(sortedCharacters)
}