import { createMaterial as createMaterialMutation } from '../graphql/mutations';
import { API } from 'aws-amplify';

export default async function createNewMaterial(material: any, setMaterial: any, materialTemplate: any) {
    console.log("createNewMaterial() called")

    const m = { ...material};
    m.name = "Juvenile Jade"
    m.type = 'Character Ascension Material'
    m.stars = 'Four'
    m.position = "96"
    m.description = "A crystalline substance taken from a Primo Geovishap. Within it is contained the potential to become a dragon. These dull crystals are precipitated within the bodies of vishaps sleeping in the mountains. Liyue folklore holds that they will gather power over many years, after which this crystal will, at last, replace their original heart, and the vishap will become a true dragon — one that can shake the mountains and split the earth.."
    m.image = "Juvenile_Jade.png"

    m.sources.sourceOne = "Dropped by Lv. 30+ Primo Geovishaps"
    m.sources.sourceTwo = ""
    m.sources.sourceThree = ""
    m.sources.sourceFour = ""
    m.sources.sourceFive = ""
    setMaterial(m);
    
    if (!material.name || !material.description) {
        console.log("createNewMaterial() material.name || material.description issue")
        return
    }

    await API.graphql({ query: createMaterialMutation, variables: { input: material } });
    console.log("createNewMaterial() complete ");

    // reset material
    setMaterial(materialTemplate);
}