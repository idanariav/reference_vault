---
<%* //my const
const title = tp.file.title
const newTitle = `${title} (project)`
await tp.file.move("/System/Projects/" + newTitle)
-%>
class: project_class
tags: [System/Project]
date_start: 
date_end: 
status:
vision:
---

# <% title %>

## Quarterly Plans
```dataview
TABLE WITHOUT ID Links, Links.Deadline AS Deadline, split(Links.tags[1],"/")[1] AS status, length(filter(Links.file.tasks, (x) => x.completed = false)) AS "Remaining Initiatives"
FROM #System/Project 
WHERE file.name = this.file.name
FLATTEN file.inlinks as Links
SORT Links.Deadline
```

## Additional Metadata:

Resources::

