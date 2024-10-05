---
icon: medal
fields:
  - id: sm9Zwo
    name: end_date
    options:
      dateFormat: YYYY-MM-DD
      defaultInsertAsLink: "false"
    type: Date
    path: ""
  - id: jrEBVD
    name: value
    options:
      dvQueryString: dv.pages('"System/Core Principles"')
    type: MultiFile
    path: ""
  - name: start_date
    type: Date
    options:
      dateShiftInterval: 1 day
      dateFormat: YYYY-MM-DD
      defaultInsertAsLink: false
      linkPath: ""
    path: ""
    id: fWMgYF
  - name: status
    type: Cycle
    options:
      sourceType: ValuesListNotePath
      valuesList: {}
      valuesListNotePath: Extras/Utils/Status list util.md
    path: ""
    id: DteEMT
version: "2.9"
limit: 20
mapWithTag: false
tagNames:
  - System/Vision
filesPaths: 
bookmarksGroups: 
excludes: 
extends: 
savedViews: []
favoriteView: 
fieldsOrder:
  - DteEMT
  - fWMgYF
  - jrEBVD
  - sm9Zwo
---
