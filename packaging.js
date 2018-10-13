function getSiblings(node) {/*API*/
    var allChildren = node.parentNode.children
    var array = {
        length: 0
    }
    for (let i = 0; i < allChildren.length; i++) {
        if (allChildren[i] !== node) {
            array[array.length] = allChildren[i]
            array.length += 1
        }
    }
    return array
}
// console.log(getSiblings(item3))






function addClass(node,classes) {
    for(let key in classes){
        var value = classes[key]
        var methodName = value? 'add' : 'remove'
        // console.log(methodName)
        // console.log(node.classList)
        // console.log(node.classList.add)
        //
        console.log(node.classList[methodName])
        node.classList[methodName](key)
    }
}

window.zlcdom = {}
zlcdom.getSiblings = getSiblings
zlcdom.addClass = addClass
zlcdom.getSiblings(items)
zlcdom.addClass(items,{a:true,b:false,c:true})
