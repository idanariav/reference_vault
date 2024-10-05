---
icon: verified
fields:
  - id: zFSrCI
    name: start_date
    options:
      dateFormat: YYYY-MM-DD
      defaultInsertAsLink: "false"
      dateShiftInterval: 1 day
    type: Date
    path: ""
  - id: Gv0qnk
    name: end_date
    options:
      dateFormat: YYYY-MM-DD
      defaultInsertAsLink: "false"
      dateShiftInterval: 1 day
    type: Date
    path: ""
  - id: W8d6VK
    name: vision
    options:
      dvQueryString: dv.pages('"System/Vision"')
    type: MultiFile
    path: ""
  - name: status
    type: Cycle
    options:
      sourceType: ValuesListNotePath
      valuesList: {}
      valuesListNotePath: Extras/Utils/Status list util.md
    path: ""
    id: 9pUGHv
version: "2.7"
limit: 20
mapWithTag: false
tagNames:
  - System/Project
filesPaths: 
bookmarksGroups: 
excludes: 
extends: 
savedViews: []
favoriteView: 
fieldsOrder:
  - 9pUGHv
  - W8d6VK
  - Gv0qnk
  - zFSrCI
---
