---
<%* //my file constants
const title = tp.file.title
await tp.file.move("/Content/Notes/" + title)
-%>
<% tp.file.include('[[metadata_template]]') %>
tags: [Type/Note]
excalidraw-plugin:
excalidraw-autoexport: png
excalidraw-open-md: true
aliases:
---
# <% title %>

## Notes

<% tp.file.cursor() %>


## Visual



## Overview
🔼Topic::
↩️Origin::
🔗Link:: 


