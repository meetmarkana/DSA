let wm = new WeakMap

let object1 = {
    "name":"MK"
}
let object2 = {
    "name":"XY"
}

wm.set(object1,"Mk's")
wm.set(object2,"Mk's")
wm.delete(object1)
console.log(wm)
console.log(wm.get(object2))
console.log("Set Has Second Object ?? " + wm.has(object2))