async function getRandomQuote(quote_file){
    let tf = app.metadataCache.getFirstLinkpathDest(quote_file, "") 
    if (tf === null){
        console.log(`file ${quote_file} not found`)
    }
    let contents = await app.vault.read(tf) 
    let nonEmpty = contents.split("\n").filter(c=> (c.slice(0,2)==="**")) 
    if (nonEmpty.length === 0){
        console.log("no quotes found in file")
    }
    let randomQuote = nonEmpty[Math.floor(Math.random()*nonEmpty.length)]
    return randomQuote

}
module.exports = getRandomQuote;