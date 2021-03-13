const deleteObject = (id: any, ascensionPlans: any, setAscensionPlans: any, summary: any, setSummary: any) => {
    let tempAscensionPlans = [...ascensionPlans]
    const filteredAscensionPlans = tempAscensionPlans.filter(item => item.id !== id);
    const ascensionPlan = tempAscensionPlans.find((item: { id: any; }) => item.id === id);

    let tempSummary = [...summary]
    const materials = ascensionPlan.materials;

    for (let i = 0; i < materials.length; i++) {
        // subtracting quantity from summary;
        let duplicateMaterial = tempSummary.find((m: { name: any; }) => m.name === materials[i].name);
        duplicateMaterial.quantity -= materials[i].quantity;
    }
    // deleting materials with 0 quantity
    const filteredSummary = tempSummary.filter(material => material.quantity !== 0);

    setAscensionPlans(filteredAscensionPlans);
    setSummary(filteredSummary);
}
export default deleteObject;