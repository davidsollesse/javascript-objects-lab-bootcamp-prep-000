
function deleteFromObjectByKey(object, key) {
    Object.delete({}, object, {object, [key]})
    return
}