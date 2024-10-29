---
<%* //my const
const title = tp.file.title
const newTitle = `${title} (project)`
await tp.file.move("/System/Projects/" + newTitle)
-%>
tags: [System/Project]
StartDate: 
EndDate: 
Status:
Vision:
---

# <% title %>

## Quarterly Plans
```dataview
TABLE WITHOUT ID Links, Links.StartDate AS StartDate, Links.EndDate AS EndDate, Links.Status AS Status, length(filter(Links.file.tasks, (x) => x.status = " ")) AS "Remaining Initiatives"
FROM #System/Project 
WHERE file.name = this.file.name
FLATTEN file.inlinks as Links
SORT Links.Deadline
```

## Additional Metadata:

Resources::

