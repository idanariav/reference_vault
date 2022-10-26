<%*
const title = tp.file.title;
const cleanTitle = tp.user.getTitleSnippet(tp.file.title) ;
let trigger;
trigger = title.includes("-") ? (title.split("-")[0]).toLowerCase().trim() : "";
switch(trigger) {
	case 'fb':
		await tp.file.move("Sources/Books/"+ cleanTitle + " (book)");
		return tp.file.include('[[Fiction_Book_template]]');
		break;
	case 'nfb':
		await tp.file.move("Sources/Books/"+ cleanTitle + " (book)");
		return tp.file.include('[[Non_Fiction_Book_template]]');
		break;
	case 'crs':
	case 'course':
		await tp.file.move("Sources/Courses/"+ cleanTitle + " (course)");
		return tp.file.include('[[Course template]]');
		break;
	case 'pst':
	case 'post':
		await tp.file.move("Spaces/Growth/Areas/Content Creation/Blog/Posts/"+ cleanTitle + " (post)");
		return tp.file.include('[[post template]]');
		break;
	case 'phil':
		await tp.file.move("Sources/Philosophers/"+ cleanTitle + " (philosopher)");
		return tp.file.include('[[Philosopher_template]]');
		break;
	case 'okr':
		await tp.file.move("Spaces/System/OKR/"+ cleanTitle+ " (OKR)");
		return tp.file.include('[[OKR_template]]');
		break;
	case 'proj':
	case 'project':
		await tp.file.move("Spaces/Growth/Projects/"+ cleanTitle+ " (project)");
		return tp.file.include('[[Project_template]]');
		break;
	case 'core':
		await tp.file.move("Spaces/System/Core Principles/"+ cleanTitle+ " (Value)");
		return tp.file.include('[[Core_Principle_template]]');
		break;
	case 'moc':
		await tp.file.move("Atlas/MOCs/"+ cleanTitle+ " (MOC)");
		return tp.file.include('[[MOC_template]]');
		break;
	case 'tar':
		await tp.file.move("Spaces/System/Monthly Targets/"+ cleanTitle+ " (Target)");
		return tp.file.include('[[monthly target template]]');
		break;
	case 'ref':
		await tp.file.move("Sources/References/"+ cleanTitle);
		return tp.file.include('[[reference_template]]');
		break;
	case 'gen':
		await  tp.file.move("__Inbox/"+ cleanTitle);
		return tp.file.include('[[gen_note_template]]');
		break;
	default:
		if (title.startsWith("@")) {
			await tp.file.move("Cards/People/"+ title);
			return tp.file.include('[[person_template]]');
		}
		else {
			await tp.file.move("Cards/Note/"+ title);
			return tp.file.include('[[note_template]]');
		}
}
%>