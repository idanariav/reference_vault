<%*
const title = tp.file.title;
const [cleanTitle, trigger] = tp.user.getTitleSnippet(title, returnTrigger=true);
class noteTemplate {
	constructor(name, folder, template, title_clean=true) {
		this.note_name = name;
		this.folder = folder;
		this.template = template;
		this.title_clean = title_clean;
	}
	async create_note() {
		let newTitle = this.title_clean ? cleanTitle : title;
		if (this.note_name || this.note_name.length > 0) {
			newTitle =  `${newTitle} ${this.note_name}`
		}
		await tp.file.move(`${this.folder}${newTitle}`)
		return tp.file.include(`[[${this.template}_template]]`)
	}
}
fictionBook = new noteTemplate("(book)","Sources/Books/", 'Fiction_Book')
nonFictionBook = new noteTemplate("(book)","Sources/Books/", 'Non_Fiction_Book')
course = new noteTemplate("(course)","Sources/Courses/", 'Course')
philosopher = new noteTemplate("(philosopher)","Sources/Philosophers/", 'Philosopher')
project = new noteTemplate("(project)","Spaces/Growth/Projects/", 'Project')
okr = new noteTemplate("(OKR)","Spaces/System/OKR/", 'OKR')
moc = new noteTemplate("(MOC)","Atlas/MOCs/", 'MOC')
reference = new noteTemplate("","Sources/References/", 'reference')
person = new noteTemplate("","Cards/People/", 'person', false)
baseNote = new noteTemplate("","Cards/Note/", 'note', false)

const notes = new Map([  
  ["fb", fictionBook],
  ["nfb", nonFictionBook],
  ["crs", course],
  ["course", course],
  ["phil", philosopher],
  ["proj", project],
  ["project", project],
  ["okr", okr],
  ["moc", moc],
  ["ref", reference],  
  ["no_trigger", baseNote],  
]);
if (notes.has(trigger)) {
	return notes.get(trigger).create_note()
}
else if (title.startsWith("@")) {
	return person.create_note()
}
else {
	const noteType = await tp.system.suggester(
		["General Note", "Fiction Book", "Non-Fiction Book", "Course", "Philosopher", "Project", "OKR", "MOC", "Reference"], 
		["no_trigger", "fb", "nfb", "crs", "phil", "proj", "okr", "moc", "ref"])
	return notes.get(noteType).create_note()
}
%>