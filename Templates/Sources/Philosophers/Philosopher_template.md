---
<%* // my consts
const philosopherName = tp.file.title.split('(')[0]
template_version: 1.01
<% tp.file.include('[[metadata_template]]') %>
name: "<% philosopherName %>"
year_birth: 
year_death:
school:
tags: [Type/Philosopher]
alias:
 - "<% philosopherName %>"
---

# <% philosopherName %>

## Note


## Additional Metadata
Topics:: 
URL:: [Wiki]()

```button
name Update Modified
type command
action Templater: Insert Extras/Templates/meta_templates/update_modified_field_template.md
color green
```