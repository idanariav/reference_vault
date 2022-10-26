---
<%*
const newTitle = this.app.workspace.getActiveFile().basename
const {autoprop} = this.app.plugins.plugins["metaedit"].api
-%>
template_version: 1.02
<% tp.file.include('[[metadata_template]]') %>
BC-dataview-note:: outgoing([[<% newTitle %>]]) and #excalidraw 
tags: [Type/Reference, Source/<% await autoprop("Source") %>]
alias:
---
# <% newTitle %>


## Instructions


## Additional metadata
🔼Topic::
◀Origin::

```button
name Update Modified
type command
action Templater: Insert Extras/Templates/meta_templates/update_modified_field_template.md
color green
```