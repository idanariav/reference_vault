<%*
const title = tp.file.title;
// date recognizer function
function detectDateGranularity(inputText) {
		  // Regular expressions for each date pattern
		  const patterns = [
		    /^20\d{2}-[0-1]\d{1}-[0-3]\d{1}$/,
		    /^20\d{2}-W[0-5]\d{1}$/,
		    /^20\d{2}-[0-1]\d{1}$/,
		    /^20\d{2}-Q[1-4]$/,
		    /^20\d{2}$/
		  ];
		
		  // Check if the input matches any of the patterns
		  console.log("running date detection")
		  for (let i = 0; i < patterns.length; i++) {
		    if (patterns[i].test(inputText)) {
		      // Return the detected granularity
		      switch (i) {
		        case 0:
			        console.log("detected daily date pattern")
					return '[[daily_template]]';
		        case 1:
			        console.log("detected weekly date pattern")
			        return '[[weekly_template]]';
		        case 2:
			        console.log("detected monthly date pattern")
			        return '[[monthly_template]]';
		        case 3:
			        console.log("detected quarterly date pattern")
			        return '[[quarterly_template]]';
		        case 4:
			        console.log("detected yearly date pattern")
			        return '[[yearly_template]]';
		      }
		    }
		  }
		
		  // If no pattern matches, return null or any other indication
		  console.log("no date detected, returning generic note")
		  return "[[generic_note_template]]";
		}


// high level template picker
// need to add: 3. areas - creators, courses, philosophers
let pickTemplate = await tp.system.suggester(["Note", "Book","Other Notes" ,"Calendar", "System"], ["[[note_template]]", "[[Book_template]]", "advanced", "calendar", "system"])

// periodical reviews
if (pickTemplate == "calendar") 
{
	// periodical review picker
	pickTemplate = detectDateGranularity(title.toUpperCase())
}

// advanced notes
else if (pickTemplate == "advanced")
{
	pickTemplate = await tp.system.suggester(["References", "MOC"], ["[[reference_template]]", "[[moc_template]]"])
}
// system
else if (pickTemplate == "system")
{
	pickTemplate = await tp.system.suggester(["Projects", "Quarterly plans", "Visions"], ["[[Project_template]]", "[[quarterly_plan template]]", "[[vision_template]]"])
}

return await tp.file.include(`${pickTemplate}`)
%>