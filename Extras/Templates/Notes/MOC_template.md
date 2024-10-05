---
<%*
const title = tp.file.title
const NewTitle = `${title} (MOC)`
await tp.file.move("/Content/MOCs/" + NewTitle)
-%>
<% tp.file.include('[[metadata_template]]') %>
tags: [Type/MOC]
---

# <% title %>

## 📓Notes


### 📥Unsorted notes
```dataview
LIST FROM [[<% NewTitle %>]] AND -outgoing([[<% NewTitle %>]])
AND  !#Type/MOC AND !#review/Daily
sort file.name asc
```

## 📧Sources



## 🌐Other MOC


### Additional metadata
