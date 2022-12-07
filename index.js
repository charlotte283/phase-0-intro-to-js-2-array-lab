
var cats =["Milo","Otis","Garfield"]

function destructivelyAppendCat(cats) {
    cats.push("Ralph");
    return cats;
}
function destructivelyPrependCat(cats) {
    cats.unshift("Bob");
    return cats;
}

function destructivelyRemoveLastCat(cats) {
    cats.pop("Garfield");
    return cats;
}
function destructivelyRemoveFirstCat(cats) {
    cats.shift("Milo");
    return cats;
}
function appendCat(cats) {
    var cats1=[cats,"Broom"];
    return cats1;
}

function prependCat(cats) {
    var  cats2=["Arnold",cats];
    return cats2;
}

function removeLastCat(cats) {
    var catss=cats.slice(0,cats.length-1);
    return catss;
}

function removeFirstCat(cats) {
    var catsts=cats.slice(1);
    return catsts;
}