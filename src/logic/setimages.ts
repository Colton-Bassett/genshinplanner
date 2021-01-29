import { Storage } from 'aws-amplify';

async function fetchImage(name: any) {  
    const image = await Storage.get(name);
    //console.log("fetchImage image:", image);
    return image;
}

export default async function SetImages(materials: any) {
    for (let i = 0; i < materials.length; i++) {
        //console.log('running materials loop')
        const materialImage = await(fetchImage(materials[i].name + '.png'))
        materials[i].image = materialImage
    }
    return materials
}