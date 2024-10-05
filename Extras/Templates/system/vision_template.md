---
<%* //my const
const title = tp.file.title
const newTitle = `${title} (vision)`
await tp.file.move("/System/Visions/" + newTitle)
-%>
class: vision_class
tags: [System/Vision]
start_date:
end_date:
value:
status:
---
# <% title %>

## Key result (what I'm trying to achieve)


## Why this goal?


## How can I reach this goal? (active projects)

```dataview
TABLE start_date, end_date, status FROM #System/Project AND [[<% newTitle %>]]
SORT start_date
```


## Notes