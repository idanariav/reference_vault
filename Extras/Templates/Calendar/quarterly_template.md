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

