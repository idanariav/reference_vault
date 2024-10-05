---
icon: calendar-check
limit: 100
mapWithTag: false
tagNames:
  - Review/Weekly
excludes: 
extends: review_class
version: "2.8"
fields:
  - id: YIuj4c
    name: prev
    options:
      dvQueryString: dv.pages("#Review/Weekly")
    type: File
    path: ""
  - name: start_date
    type: Date
    options:
      dateShiftInterval: 1 day
      dateFormat: YYYY-MM-DD
      defaultInsertAsLink: false
      linkPath: ""
    path: ""
    id: XGf0iD
  - name: end_date
    type: Date
    options:
      dateShiftInterval: 1 day
      dateFormat: YYYY-MM-DD
      defaultInsertAsLink: false
      linkPath: ""
    path: ""
    id: NLUSNl
filesPaths: 
bookmarksGroups: 
savedViews: []
favoriteView: 
fieldsOrder:
  - NLUSNl
  - XGf0iD
  - YIuj4c
---

prev:: {"type":"File","options":{}}