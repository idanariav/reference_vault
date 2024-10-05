---
<%* //my file constants
const source = await tp.system.suggester(["Article", "Book", "Course", "Journal", "Newsletter", "Philosopher", "Podcast", "Thoughts", "Wiki", "Video"], ["Article", "Book", "Course", "Journal", "Newsletter", "Philosopher", "Podcast", "Thoughts", "Wiki", "Video"])
const title = tp.file.title
await tp.file.move("/Content/Notes/" + title)
-%>
<% tp.file.include('[[metadata_template]]') %>
tags: [Type/Note, Source/<% source %>]
excalidraw-plugin:
excalidraw-autoexport: png
excalidraw-open-md: true
aliases:
---
# <% title %>

## Notes

<% tp.file.cursor() %>


## Visual



## Additional Metadata
⬆️Topic::
↩️Origin::
🔗Link:: 


