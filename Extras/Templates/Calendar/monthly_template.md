---
<%* //my constants
const title = tp.file.title
const startMonth = moment(title, 'YYYY-MM').startOf('month').format('YYYY-MM-DD');
const endMonth = moment(title, 'YYYY-MM').endOf('month').format('YYYY-MM-DD')
const prevMonth = moment(title, 'YYYY-MM').subtract(1, 'months').format('YYYY-MM')
await tp.file.move("Calendar/Monthly/" + title)
-%>
StartDate: <% startMonth %>
EndDate: <% endMonth %>
tags: Review/Monthly
Peak:
Low:
Impactful:
Opportunity:
Discovery:
aliases:
 - "<% moment(title, 'YYYY-MM').format('MMM YYYY') %>"
---
Component:: <% tp.user.getMonthsWeeks(title) %>
# <% title %>


> [!success]+ Monthly Review
> 
The monthly review’s goal is to reflect on important events in my life


## ⚖️Assessment

### 📜Logs

![[calendar_review_base.base#monthly]]```

*Any logs that were empty this month? why? what can I do to improve?*
* 


## 🔧To-dos
 - [ ] 
