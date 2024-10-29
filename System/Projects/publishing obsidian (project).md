---
tags:
  - System/Project
StartDate: 2024-09-01
EndDate: 2024-12-31
Status: InProgress
Vision: ["[[Being a creator (vision)]]"]
---

# publishing obsidian

My goal is to publish a start vault that anyone can easily and freely download, explore and use

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

