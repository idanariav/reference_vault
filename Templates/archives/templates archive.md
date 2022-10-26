### file promt rename

<%* let title = await tp.system.prompt("Title"); await tp.file.rename(`${title}`)%>

if (title.includes("-")){
	trigger = (title.split("-")[0]).toLowerCase().trim();
} else {
	trigger = "";
} 


<%* 
// 1. Get the TFile 
const tFile = tp.file.find_tfile(tp.file.title) 
// 2. Read the note contents 
const note = await app.vault.read(tFile) 
// 3. Use replace to add current date 
const newNote = note.replace("Completed::","Completed:: " + tp.date.now()) 
//4. Write the new contents back to the note 
await app.vault.modify(tFile, newNote) %>

<%* 
const noteType = await tp.system.suggester(["1", "2", "3"], ["a", "b", "c"]) if(noteType == "a") { 
	const name = await tp.system.prompt("What is the name?"); await tp.file.move("_data/a/" + name); -%> 
<% tp.file.include("[[_data/templates/a]]") %> <%* }