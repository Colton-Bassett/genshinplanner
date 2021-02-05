function dialogAddMaterial(material: any, newSummary: any) {
    //console.log("dialogAddMaterial was called")
    let duplicateMaterial = newSummary.find((m: { name: any; }) => m.name === material.name);
    //console.log("duplicateMaterial:", duplicateMaterial);
    if (duplicateMaterial) {
        duplicateMaterial.quantity += material.quantity
    } else {
        newSummary.push(material);
    }
}

export default function createNewSummary(materials: any, summary: any) {
    //console.log("createNewSummary was called")
    let n = [...summary];
    for (let i = 0; i < materials.length; i++) {
        dialogAddMaterial(materials[i], n);
        //n.push(materials[i]);
    }
    return n;
}