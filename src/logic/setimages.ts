import { Storage } from 'aws-amplify';

async function fetchImage(name: any) {  
    const image = await Storage.get(name);
    //console.log("fetchImage image:", image);
    return image;
}

export default async function SetImages(materials: any) {
    for (let i = 0; i < materials.length; i++) {
        //console.log('running materials loop')
        const imageLocation = 'https://anemo.s3.us-east-2.amazonaws.com/' + materials[i].name + '.png';
        materials[i].image = imageLocation;
    }
    return materials
}