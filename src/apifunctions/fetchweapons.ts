import { API, Storage } from 'aws-amplify';
import { listWeapons } from '../graphql/queries';

export default async function fetchWeapons(setWeapons: any) {
    const apiData: any = await API.graphql({ query: listWeapons });
    const weaponsFromAPI = apiData.data.listWeapons.items;

    await Promise.all(weaponsFromAPI.map(async (weapon: any) => {
        // 24 hours
        //let imageURLExpiration = 86400; 
        const imageLocation = "https://genshinplannera2c57fdbc5164a6b8f94392805cd599f155138-dev.s3.us-east-2.amazonaws.com/public/" + weapon.image;
        if (weapon.image) {
            const image = imageLocation;
            weapon.image = image;
        }
        return weapon;
    }))
    
    // sort by stars, then alphabetically
    const sortedWeapons = (apiData.data.listWeapons.items);
    sortedWeapons?.sort((a: { stars: any; name: any; }, b: { stars: any; name: any; }) => (a.stars > b.stars) ? 1 : (a.stars === b.stars) ? ((a.name > b.name) ? 1 : -1) : -1 )
    console.log("fetchWeapons():", apiData.data.listWeapons.items)

    setWeapons(sortedWeapons)
}