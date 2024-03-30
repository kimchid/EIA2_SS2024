let subjekte: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"]
let praedikate: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"]
let objekte: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"]

for(let i = 5; i>=0; i--){
    console.log(getverse(subjekte, praedikate, objekte))
}

function getverse(_subjekte: string[], _praedikate: string[], _objekte: string[]){
    let verse: string = ""
    
    let randomsubjekte = Math.floor(Math.random()*_subjekte.length)
    let randompraedikate = Math.floor(Math.random()*_praedikate.length)
    let randomobjekte = Math.floor(Math.random()*_objekte.length)

    verse += subjekte.splice(randomsubjekte, 1)[0] + " ";
    verse += praedikate.splice(randompraedikate, 1)[0] + " ";
    verse += objekte.splice(randomobjekte, 1)[0];

    return verse
}