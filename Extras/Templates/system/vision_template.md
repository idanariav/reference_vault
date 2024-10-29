---
<%* //my const
const title = tp.file.title
const newTitle = `${title} (vision)`
await tp.file.move("/System/Visions/" + newTitle)
-%>
tags: [System/Vision]
StartDate: 
EndDate: 
Status:
Value:
---
# <% title %>

## Key result (what I'm trying to achieve)


## Why this goal?


## How can I reach this goal? (active projects)

```dataview
TABLE StartDate, EndDate, Status FROM #System/Project AND [[<% newTitle %>]]
SORT StartDate
```


## Notes