---
icon: moon
limit: 100
mapWithTag: false
tagNames:
  - Review/Quarterly
excludes: 
extends: review_class
version: "2.7"
fields:
  - id: VYfhf6
    name: prev
    options:
      dvQueryString: dv.pages("#Review/Quarterly")
    type: File
    path: ""
  - name: EndDate
    type: Date
    options:
      dateFormat: YYYY-MM-DD
      defaultInsertAsLink: "false"
      dateShiftInterval: 1 quarter
    path: ""
    id: QMWlw8
  - name: StartDate
    type: Date
    options:
      dateFormat: YYYY-MM-DD
      defaultInsertAsLink: "false"
      dateShiftInterval: 1 quarter
    path: ""
    id: 4S7DYL
filesPaths: 
bookmarksGroups: 
savedViews: []
favoriteView: 
fieldsOrder:
  - 4S7DYL
  - QMWlw8
  - VYfhf6
---
prev:: {"type":"File","options":{}}