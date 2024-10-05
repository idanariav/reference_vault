---
<%* //my constants
const title = tp.file.title
const Weekend = moment(title, 'YYYY-[W]WW').isoWeekday(6).format('YYYY-MM-DD')
const next_week = moment(Weekend).add(7, 'days').format("gggg-[W]ww")
const week_start = moment(title, 'YYYY-[W]WW').isoWeekday(0).format('YYYY-MM-DD')
await tp.file.move("Calendar/Weekly/" + title)
-%>
start_date: <% week_start %>
end_date: <% Weekend %>
tags: Review/Weekly
aliases: ["weekend of <% moment(Weekend).format("MMM D, YYYY") %>"]
---
# <% title %>

> [!info]- Additional Metadata
Component:: <% tp.user.getWeeksDays(Weekend) %>
> 

> [!success]+ Weekly Review
> 
The weekly review’s goal is to see that I'm behaving according to the person I wish to be


## ⚖️Assessment

### Tasks

```tasks
path includes System
happens on or before <% next_week %> 
(done on or after <% title %>) OR (not done)
group by function task.due.format("YYYY-[W]WW")
group by status.name
```

### 🗓️Past week

*what happened this week??*
* 
*Any moments where I acted differently from how I wish to be?*

*What can I do to act better next time?*

*Were there days where I neglected my habits and routines? if so why?*
* 
## 🔧To-dos
