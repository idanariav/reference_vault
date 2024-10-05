---
<%* // my consts
const title = tp.file.title
const newTitle = `${title} (book)`
const type = await tp.system.suggester(["non fiction", "fiction"], ["non fiction", "fiction"])
const fiction = type==="fiction"
await tp.file.move("/Sources/Books/" + newTitle)
-%>
<% tp.file.include('[[metadata_template]]') %>
class: book_class
tags: [Type/Book]
Publish_Date: {{publishDate}}
Pages: {{totalPage}}
Author: "[[{{author}}]]"
Genre: {{category}}
Fiction: <% fiction %>
Cover: {{coverUrl}}
URL:
Status: Next
Date_finished: 
Rate: 
aliases:
---

# <% title %>

<%* 


if (type == "non fiction")
{
	tR += await tp.file.include("[[non_fiction_book_notes_templates]]")
}
else {
	tR += await tp.file.include("[[fiction_book_notes_templates]]")
}
-%>
