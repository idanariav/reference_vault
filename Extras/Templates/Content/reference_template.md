---
<%*
const title = tp.file.title
const source = await tp.system.suggester(["Article", "Book", "Course", "Journal", "Newsletter", "Philosopher", "Podcast", "Thoughts", "Wiki", "Video"], ["Article", "Book", "Course", "Journal", "Newsletter", "Philosopher", "Podcast", "Thoughts", "Wiki", "Video"])
await tp.file.move("/Sources/References/" + title)
-%>
<% tp.file.include('[[metadata_template]]') %>
tags: [Type/Reference, Source/<% source %>]
excalidraw-autoexport: png
excalidraw-open-md: true
aliases:
---
# <% title %>

## Notes


## Additional metadata
🔼Topic::
◀Origin::
🔗Link::


