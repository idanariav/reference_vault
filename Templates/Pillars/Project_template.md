---
<%* //my const
const newTitle = this.app.workspace.getActiveFile().basename
-%>
template_version: 1.02
date_start: 
date_finish: 
tags: [System/Project, System/Areas/, Status/]
---

# <% newTitle %>

## OKR
up::

## Monthly targets
```dataview
TABLE Deadline, split(tags[1],"/")[1] AS status, length(file.tasks) AS "Weekly Initiatives" 
FROM #System/Monthly_Target 
AND [[<% newTitle %>]]
SORT Deadline
```

```button
name Create Monthly Target
type command
action QuickAdd: Monthly Target
color green
```

## Additional Metadata:

Resources::

