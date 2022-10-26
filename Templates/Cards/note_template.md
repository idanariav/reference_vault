---
<%* //my file constants
const {autoprop} = this.app.plugins.plugins["metaedit"].api 
const title = tp.file.title -%>
template_version: 1.03
<% tp.file.include('[[metadata_template]]') %>
tags: [Type/Note, Seed/<% await autoprop("Seed") %>, Source/<% await autoprop("Source") %>]
BC-dataview-note:: outgoing([[<% title %>]]) and #excalidraw 
alias:
---

# <% title %>

## Notes

<% tp.file.cursor() %>


### Clarify
🔈 Simply, the main message is...

### Relate

⛓ How does this topic relates to my life?

### Critique

✅ I agree with... the advantages are...


❌ I disagree with... the disadvantages are...


🧱 Implementations and limitations of it are...

### Reflect

💭 My main take-aways are.. this affects me by...


## Additional Metadata
🔼Topic::
◀Origin::

```button
name Update Modified
type command
action Templater: Insert Extras/Templates/meta_templates/update_modified_field_template.md
color green
```