---
<%* //my constants
const title = tp.file.title
const current = window.moment(title, 'YYYY-MM');
const startMonth = current.clone().startOf('month').format('YYYY-MM-DD');
const endMonth = current.clone().endOf('month').format('YYYY-MM-DD')
const prevMonth = current.clone().subtract(1, 'months').format('YYYY-MM')
const nextMonth = current.clone().add(1, 'months').format('YYYY-MM')
const currentQuarter = current.clone().format('YYYY-[Q]Q')
await tp.file.move("Calendar/Monthly/" + title)
-%>
StartDate: <% startMonth %>
EndDate: <% endMonth %>
Prev: "[[<% prevMonth %>]]"
Next: "[[<% nextMonth %>]]"
Up: "[[<% currentQuarter %>]]"
Down:
<% tp.user.getPeriodDays(title, period='month') %>
tags: Review/Monthly
Peak:
Low:
Impactful:
Opportunity:
Discovery:
aliases:
 - "<% current.clone().format('MMM YYYY') %>"
---

# <% title %>


> [!success]+ Monthly Review
> 
The monthly review’s goal is to reflect on important events in my life


## ⚖️Assessment

### 📜Logs

![[calendar_review_base.base#monthly]]

*Any logs that were empty this month? why? what can I do to improve?*
* 


## 🔧To-dos
 - [ ] 
