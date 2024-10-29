---
<%* const title = tp.file.title
await tp.file.move("Calendar/Daily/" + title)
-%>
Date: <% title %>
tags: Review/Daily
WorstCase: 
BestCase:
MinimalProgress:
Gratitude:
Kindness:
Compliment:
Documentation: true
Health: true
Mulligan: false
AvoidedTemptations: true
UpheldCommitments: true
MaintainedComposure: true
PursuedGoals: false
SleepHrs: 0
SleepMins: 0
Meditation: 0
Reading: 0
Studying: 0
Developing: 0
Cardio: 0
Workout: 0
aliases: [<% moment(title).format("MMM D YYYY") %>]
---
# <% title %>


### 💡Inspiration


<% await tp.web.daily_quote() %>

#### 📼On that day

```dataview
Table Achieved, Connection, Insights, Enriched, Initiated, Overcame, Empowerment, Affirmations from #Review/Daily
WHERE file.day.month = this.file.day.month
AND file.day.day = this.file.day.day
AND file.day.year != this.file.day.year
AND (Achieved>0 OR Connection>0 OR Insights>0 OR Enriched>0 OR Initiated>0 OR Overcame>0 OR Empowerment>0 OR Affirmations>0)
SORT file.day DESC
LIMIT 10
```

## 📝 Planning

```tasks
path includes System
filter by function task.file.property('status') === 'InProgress'
not done
is not blocked
happens on or before <% moment(title, 'YYYY-[W]WW') %>
group by status.name
```

## 🔄Reviewing

### 💭Documenting

### 📜Logs

🌱Insights:: 
🏅Achieved::
🔨Initiated::
🧠Enriched:: 
🗻Overcame::
😊Connection::
💪Empowerment::
💝Affirmations::