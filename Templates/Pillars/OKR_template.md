---
<%* //my const
const newTitle = this.app.workspace.getActiveFile().basename
-%>
template_version: 1.01
fileClass: okr_class
Achieved: No
Importance: 
Deadline: 
tags: [System/OKR, Status/Ongoing]
---
# <% newTitle %>

## Key result (what I'm trying to achieve)


## Why this goal? (related core principals)

⭐up::

## How can I reach this goal? (monthly targets)

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

## Notes