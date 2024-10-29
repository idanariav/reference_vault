---
<%* //my constants
const title = tp.file.title
const prevQuarter = moment(title, 'YYYY-[Q]Q').subtract(1, 'quarters').format('YYYY-[Q]Q')
const startQuarter = moment(title, 'YYYY-[Q]Q').startOf('quarter').format('YYYY-MM-DD')
const endQuarter = moment(title, 'YYYY-[Q]Q').endOf('quarter').format('YYYY-MM-DD')
await tp.file.move("Calendar/Quarterly/" + title)
-%>
StartDate: <% startQuarter %>
EndDate: <% endQuarter %>
tags: Review/Quarterly
aliases:
---
# <% title %>

Component:: [[<% moment(startQuarter, 'YYYY-MM-DD').format('YYYY-MM') %>]], [[<% moment(startQuarter, 'YYYY-MM-DD').add(1, 'months').format('YYYY-MM') %>]], [[<% moment(startQuarter, 'YYYY-MM-DD').add(2, 'months').format('YYYY-MM') %>]]

> [!success]+ Quarterly Review
> 
The quarterly review’s goal is to track my development in the long run, how I change over time

## ⚖️Assessment

```dataview
TABLE Impactful, Low, Peak, Discovery, Opportunity FROM #Review/Monthly 
WHERE date(StartDate) >= date(<% startQuarter %>)
AND date(EndDate) <= date(<% endQuarter %>)
SORT StartDate
```

### ✍️Personal

### 🫂Social

### 💼Professional

### 🎓Lessons learned
*What do I need to start/stop/continue doing?*
* 

## 📝Planning

### 🌱Quarterly Plans
- [ ] check this quarter's plans, either active or backlog, or scheduled plans. Update as necessary (*when converting to "in progress", convert tasks to "backlog" with a b or assign dates*)

```dataview
TABLE Status, EndDate, Project FROM #System/Quarterly_Plan  
WHERE (Status = "InProgress" OR  Status = "Todo")
AND EndDate <= date(<% endQuarter %>)
SORT Status DESC
```

### 🛤️Projects

- [ ]  review all projects, create/update as necessary (dates, status, Quarterly Plans...)
```dataview
TABLE EndDate, Status, Vision FROM #System/Project
WHERE file.folder != "Extras/Templates/system"
AND Status != "Completed"
SORT Status
```

