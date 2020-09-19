function makeInt(string){
    return parseInt(string,10)
}

function preserveDecimal(string){
    return parseFloat(string)
}

console.log(`makeInt: ${makeInt('80.123999')} preserDecimal: ${preserveDecimal('80.123999')}`)

