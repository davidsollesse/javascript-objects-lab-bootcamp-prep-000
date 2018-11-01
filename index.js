
function deleteFromObjectByKey(object, key) {
    Object.delete({}, object, delete object[key])
    return
}
