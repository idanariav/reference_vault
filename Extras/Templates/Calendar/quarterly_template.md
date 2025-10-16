---
<%* //my constants
const title = tp.file.title
const current = window.moment(title, 'YYYY-[Q]Q');
const prevQuarter = current.clone().subtract(1, 'quarters').format('YYYY-[Q]Q')
const currentYear = current.clone().format('YYYY')
const nextQuarter = current.clone().add(1, 'quarters').format('YYYY-[Q]Q')
const startQuarter = current.clone().startOf('quarter').format('YYYY-MM-DD')
const endQuarter = current.clone().endOf('quarter').format('YYYY-MM-DD')
const firstMonth = current.clone().startOf('quarter').format('YYYY-MM')
const secondMonth = current.clone().startOf('quarter').add(1, 'months').format('YYYY-MM')
const thirdMonth = current.clone().startOf('quarter').add(2, 'months').format('YYYY-MM')
await tp.file.move("Calendar/Quarterly/" + title)
-%>
Prev: "[[<% prevQuarter %>]]"
Next: "[[<% nextQuarter %>]]"
Up: "[[<% currentYear %>]]"
Down:
 - "[[<% firstMonth %>]]"
 - "[[<% secondMonth %>]]"
 - "[[<% thirdMonth %>]]"
StartDate: <% startQuarter %>
EndDate: <% endQuarter %>
tags: Review/Quarterly
aliases:
---
# <% title %>

> [!success]+ Quarterly Review
> 
The quarterly review’s goal is to track my development in the long run, how I change over time

## ⚖️Assessment

![[calendar_review_base.base#quarterly]]

### ✍️Personal

### 🫂Social

### 💼Professional

### 🎓Lessons learned
*What do I need to start/stop/continue doing?*
* 

## 📝Planning

### 🌱Quarterly Plans
- [ ] check this quarter's plans, either active or backlog, or scheduled plans. Update as necessary (*when converting to "in progress", convert tasks to "backlog" with a b or assign dates*)

![[pipeline_base.base#plans]]

### 🛤️Projects

- [ ]  review all projects, create/update as necessary (dates, status, Quarterly Plans...)
![[pipeline_base.base#projects]]

