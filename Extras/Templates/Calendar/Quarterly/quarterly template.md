---
<%* //my constants
const title = tp.file.title
const prevQuarter = moment(title, 'YYYY-[Q]Q').subtract(1, 'quarters').format('YYYY-[Q]Q')
const startQuarter = moment(title, 'YYYY-[Q]Q').startOf('quarter').format('YYYY-MM-DD')
const endQuarter = moment(title, 'YYYY-[Q]Q').endOf('quarter').format('YYYY-MM-DD')
await tp.file.move("Calendar/Quarterly/" + title)
-%>
start_date: <% startQuarter %>
end_date: <% endQuarter %>
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
WHERE date(start_date) >= date(<% startQuarter %>)
AND date(end_date) <= date(<% endQuarter %>)
SORT start_date
```

### ✍️Personal

### 🫂Social

### 💼Professional

### 🎓Lessons learned
*What do I need to start/stop/continue doing?*
* 

### ✅Tasks
- [x] assign due dates to backlog tasks

```tasks
not done
no happens date
filter by function task.status.symbol == "b"
```
### 🌱Quarterly Plans
- [ ] check this quarter's plans, either active or backlog, or scheduled plans. Update as necessary (*when converting to "in progress", convert tasks to "backlog" with a b or assign dates*)

```dataview
TABLE Deadline, Project FROM #System/Quarterly_Plan  
WHERE (Status = "InProgress" OR  Status = "Todo")
AND end_date <= date(<% endQuarter %>)
SORT status DESC
```


## 📝Planning

### 🛤️Visions

- [ ]  review all visions, create/update as necessary (dates, status, Quarterly Plans...)
```dataview
TABLE end_date, status, value FROM #System/Vision and !#Status/Completed 
WHERE file.folder != "Extras/Templates/system"
SORT status
```

