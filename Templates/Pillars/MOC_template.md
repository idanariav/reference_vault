---
template_version: 1.04
<% tp.file.include('[[metadata_template]]') %>
tags: [System/MOC]
---
Up:: [[Home]]


# <% this.app.workspace.getActiveFile().basename %>

## 📓Notes


### 📥Unsorted notes
```dataview
LIST FROM [[<% tp.file.title %>]] AND -outgoing([[<% tp.file.title %>]])
AND  !#System/MOC 
sort file.name asc
```

## 📧Sources

## 🌐Other MOC


### Additional metadata

```button
name Update Modified
type command
action Templater: Insert Extras/Templates/meta_templates/update_modified_field_template.md
color green
```