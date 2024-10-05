---
icon: calendar-range
limit: 100
mapWithTag: false
tagNames:
  - Review/Monthly
excludes: 
extends: review_class
version: "2.9"
fields:
  - id: tNOuTn
    name: prev
    options:
      dvQueryString: dv.pages("#Review/Monthly")
    type: File
    path: ""
  - name: start_date
    type: Date
    options:
      dateFormat: YYYY-MM-DD
      defaultInsertAsLink: "false"
      dateShiftInterval: 1 month
    path: ""
    id: tAyw2U
  - name: end_date
    type: Date
    options:
      dateFormat: YYYY-MM-DD
      defaultInsertAsLink: "false"
      dateShiftInterval: 1 month
    path: ""
    id: Dve9B4
filesPaths: 
bookmarksGroups: 
savedViews: []
favoriteView: 
fieldsOrder:
  - Dve9B4
  - tAyw2U
  - tNOuTn
---
