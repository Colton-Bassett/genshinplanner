import { API, Storage } from 'aws-amplify';
import { listMaterials } from '../graphql/queries';

export default async function fetchMaterials(setMaterials: any) {
    const apiData: any = await API.graphql({ query: listMaterials });
    const materialsFromAPI = apiData.data.listMaterials.items;

    await Promise.all(materialsFromAPI.map(async (material: any) => {
        // 24 hours
        //let imageURLExpiration = 86400; 
        if (material.image) {
            const imageLocation = "https://anemo.s3.us-east-2.amazonaws.com/" + material.image;
            const image = imageLocation;
            material.image = image;
        }
        return material;
    }))

    // sort by position
    const sortedMaterials = (apiData.data.listMaterials.items);    
    sortedMaterials?.sort((a: { position: string; }, b: { position: any; }) => a.position.localeCompare(b.position));
    //console.log("fetchMaterials():", apiData.data.listMaterials.items)

    setMaterials(sortedMaterials)
}