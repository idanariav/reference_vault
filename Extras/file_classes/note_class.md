---
limit: 20
mapWithTag: false
icon: file-text
tagNames:
  - Type/Note
  - Type/Reference
excludes: 
extends: metadata_class
version: "2.18"
fields:
  - id: i8X38t
    name: Influence
    options:
      autoUpdate: false
      formula: current.file.inlinks.length
    type: Formula
    path: ""
  - name: excalidraw-plugin
    type: Select
    options:
      valuesList:
        "1": parsed
      sourceType: ValuesList
      valuesListNotePath: ""
      valuesFromDVQuery: ""
    path: ""
    id: gKndEk
  - name: BC-link-note
    type: Select
    options:
      valuesList:
        "1": Jump
        "2": Up
        "3": Down
      sourceType: ValuesList
      valuesListNotePath: ""
      valuesFromDVQuery: ""
    path: ""
    id: M1DIw0
  - name: excalidraw-open-md
    type: Boolean
    options: {}
    path: ""
    id: c4zQpG
  - name: excalidraw-autoexport
    type: Select
    options:
      sourceType: ValuesList
      valuesList:
        "1": svg
        "2": png
        "3": none
    path: ""
    id: 78H4Y7
filesPaths: 
bookmarksGroups: 
savedViews: []
favoriteView: 
fieldsOrder:
  - 78H4Y7
  - c4zQpG
  - M1DIw0
  - gKndEk
  - i8X38t
---
