const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(){
    cats.push("Ralph")
}

function destructivelyPrependCat() {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

const newCats = [...cats]

function appendCat(){
    newCats.push("Broom")
    return newCats
}

function prependCat(){
    newCats.unshift("Arnold",)
    newCats.splice(4,1)
    return newCats
}

function removeLastCat(){
    newCats.pop()
    newCats.splice(0,1)
    return newCats
}

function removeFirstCat(){
    newCats.shift()
    newCats.push("Garfield")
    return newCats
}