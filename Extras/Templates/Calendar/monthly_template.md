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

```dataview
Table Achieved, Connection, Insights, Enriched, Initiated, Overcame, Empowerment, Affirmations FROM #Review/Daily  
WHERE Date >=  date(<% startMonth %>)
AND Date <= date(<% endMonth %>)
AND (Achieved>0 OR Connection>0 OR Insights>0 OR Enriched>0 OR Initiated>0 OR Overcame>0 OR Empowerment>0 OR Affirmations>0)
SORT file.day DESC
```

*Any logs that were empty this month? why? what can I do to improve?*
* 

### 📒Events
🗻Peak::
🌊Low::
❕Impactful::
✨Opportunity::
💡Discovery::


## 🔧To-dos
