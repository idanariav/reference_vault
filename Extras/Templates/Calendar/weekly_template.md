---
<%* //my constants
const title = tp.file.title
const current = window.moment(title, 'YYYY-[W]WW');
const Weekend = current.clone().isoWeekday(6).format('YYYY-MM-DD')
const prev_week = current.clone().subtract(1, 'week').format('YYYY-[W]WW')
const next_week = current.clone().add(1, 'week').format('YYYY-[W]WW')
const week_start = current.clone().isoWeekday(0).format('YYYY-MM-DD')
await tp.file.move("Calendar/Weekly/" + title)
-%>
Prev: "[[<% prev_week %>]]"
Next: "[[<% next_week %>]]"
Down: 
<% tp.user.getPeriodDays(Weekend, period='week') %>
StartDate: <% week_start %>
EndDate: <% Weekend %>
tags: Review/Weekly
aliases: 
 - "weekend of <% moment(Weekend).format("MMM D, YYYY") %>"
---
# <% title %>

> [!success]+ Weekly Review
> 
The weekly review’s goal is to see that I'm behaving according to the person I wish to be


## ⚖️Assessment

### Tasks

Overdue/Open tasks
```tasks
path includes System
filter by function task.file.property('status') === 'InProgress' 
happens before <% title %> 
not done
group by function task.due.format("YYYY-[W]WW")
```

### 🗓️Past week

*what happened this week?*

*Any moments where I acted differently from how I wish to be?*

*What can I do to act better next time?*

*Were there days where I neglected my habits and routines? if so why?*

## 🔧To-dos
 - [ ] 
