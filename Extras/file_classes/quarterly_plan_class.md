---
icon: target
fields:
  - id: 4sTgkQ
    name: end_date
    options:
      dateFormat: YYYY-MM-DD
      defaultInsertAsLink: "false"
      dateShiftInterval: 1 month
    type: Date
    path: ""
  - id: dnF9ve
    name: project
    options:
      dvQueryString: dv.pages('"System/Projects"')
    type: MultiFile
    path: ""
  - name: status
    type: Cycle
    options:
      sourceType: ValuesListNotePath
      valuesList: {}
      valuesListNotePath: Extras/Utils/Status list util.md
    path: ""
    id: 3Qilto
  - name: start_date
    type: Date
    options:
      dateShiftInterval: 1 day
      dateFormat: YYYY-MM-DD
      defaultInsertAsLink: false
      linkPath: ""
    path: ""
    id: 3D014f
version: "2.15"
limit: 20
mapWithTag: false
tagNames:
  - System/Quarterly_Plan
filesPaths: 
bookmarksGroups: 
excludes: 
extends: 
savedViews: []
favoriteView: 
fieldsOrder:
  - 3D014f
  - 3Qilto
  - dnF9ve
  - 4sTgkQ
---
