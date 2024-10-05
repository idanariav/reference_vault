---
<%* //my file constants
const title = await tp.system.prompt("Please Choose a File Name")
-%>
<% tp.file.include('[[metadata_template]]') %>
---

# <% title %>

<% tp.file.cursor() %>
<% await tp.file.rename(title) %>