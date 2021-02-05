const deleteObject = (index: any, items: any, setItems: any) => {
    console.log("deleteObjects id:", items)
    let tempObjects = [...items]
    console.log("deleteObject has been called!", tempObjects)
    const filteredObjects = tempObjects.filter(item => item.index !== index);
    setItems(filteredObjects);
    console.log("objects:", filteredObjects)
}
export default deleteObject;