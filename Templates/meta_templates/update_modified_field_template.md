<%* 
// 1. Get the TFile 
const tFile = tp.file.find_tfile(tp.file.title) 
// 2. Read the note contents 
const note = await app.vault.read(tFile) 
// 3. Turn content into a array (by new lines)
const noteArr = note.split(/\r?\n/)
// 4. find the "modified" field
findModified = noteArr.find(function(line){
	return line.startsWith("Modified:")
})
// 5. replace the modified field with new date_time
// 6. find the "version" field
findVersion = noteArr.find(function(line){
	return line.startsWith("Version:")
})
let newVersion = parseFloat(findVersion.split(":")[1])
newVersion = newVersion + 0.01
//7. Write the new contents back to the note 
let newNote = note.replace(findVersion,"Version: " +newVersion)
newNote = newNote.replace(findModified,"Modified: " + tp.date.now("YYYY-MM-DD HH:mm"))
await app.vault.modify(tFile, newNote) %>