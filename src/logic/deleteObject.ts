const deleteObject = (id: any, items: any, setItems: any, summary: any, setSummary: any) => {
    console.log("deleteObjects: items preDelete:", items)
    let tempObjects = [...items]
    const filteredObjects = tempObjects.filter(item => item.id !== id);
    const item = items.find((item: { id: any; }) => item.id === id);

    let tempSummary = [...summary]
    const materials = item.materials;

    for (let i = 0; i < materials.length; i++) {
        // subtracting quantity from summary;
        let duplicateMaterial = tempSummary.find((m: { name: any; }) => m.name === materials[i].name);
        duplicateMaterial.quantity -= materials[i].quantity;
    }
    // deleting materials with 0 quantity
    const filteredSummary = tempSummary.filter(material => material.quantity !== 0);

    setItems(filteredObjects);
    setSummary(filteredSummary);
    console.log("deleteObjects objects postDelete:", filteredObjects);
    console.log("deleteObjects summary:", filteredSummary);
}
export default deleteObject;