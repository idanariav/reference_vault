---
<%* const title = tp.file.title

const current = window.moment(title, "YYYY-MM-DD");

// Compute previous and next days
const prev = current.clone().subtract(1, "day").format("YYYY-MM-DD");
const next = current.clone().add(1, "day").format("YYYY-MM-DD");
const today_alias = current.clone().format("MMM D YYYY")
// Compute ISO week and month
const week = `${current.weekYear()}-W${current
.week()}`;
const month = current.clone().format("YYYY-MM");
await tp.file.move("Calendar/Daily/" + title)
-%>
Date: <% title %>
Prev: "[[<% prev %>]]"
Next: "[[<% next %>]]"
Week: "[[<% week %>]]"
Month: "[[<% month %>]]"
tags: Review/Daily
Forgiveness: 
Awe:
MinimalProgress:
Gratitude:
Kindness:
Openness:
Insights: 
Achieved:
Initiated:
Enriched: 
Overcame:
Connection:
Empowerment:
Affirmations:
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
aliases: 
 - <% moment(title).format("MMM D YYYY") %>
---
# <% title %>


### 💡Inspiration


<% await tp.web.daily_quote() %>

#### 📼On that day

![[calendar_review_base.base#daily]]

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

