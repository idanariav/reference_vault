---
<%* const title = tp.file.title
-%>
# system fields
template_version: 1.08
Date: {{date}}
tags: Review/Daily
fileClass: Daily_class
# at morning
Sleep_hrs: 0
Sleep_mins: 0
Highlight:
# at evening
Gratitude:
Dailyo: Yes?
Mindset: Yes?
Duolingo: Yes?
Review: Yes?
Streching: Yes?
Salad: No?
Meat: No?
Highlight_completed: Yes?
Health: Yes?
Helping: No?
Rate: 0
Efficiency: 0
As_partner: 0
Social: 0
Reading: 0
Studying: 0
Developing: 0
Cardio: 0
Workout: 0
Fortune: 0
Identity: No # change only when writing autobiography (Saturday)
Weight: 0 # change only on saturday
alias:
 - "<% moment(title).format("MMM D, YYYY") %>"
---
# <% title %>

<svg viewBox="0 0 3760 100"> <title>Timeline 2022</title> <g class='bars'> <rect fill='#cfe2f3' x='0' width='310' height='25'></rect> <rect fill='#a2c4c9' x='310' width='280' height='25'></rect> <rect fill='#76a5af' x='590' width='310' height='25'></rect> <rect fill='#93c47d' x='900' width='300' height='25'></rect> <rect fill='#6aa84f' x='1200' width='310' height='25'></rect> <rect fill='#8fce00' x='1510' width='300' height='25'></rect> <rect fill='#ffd966' x='1810' width='310' height='25'></rect> <rect fill='#f1c232' x='2120' width='310' height='25'></rect> <rect fill='#ce7e00' x='2420' width='300' height='25'></rect> <rect fill='#e06666' x='2730' width='310' height='25'></rect> <rect fill='#f4cccc' x='3030' width='300' height='25'></rect> <rect fill='#eeeeee' x='3340' width='310' height='25'></rect> </g> <g class='labels' style="font-size:50px;" text-anchor="middle"> <text fill='#747474' x='0' y='80' text-anchor="start">January</text> <text fill='#747474' x='310' y='80' text-anchor="start">February</text> <text fill='#747474' x='590' y='80' text-anchor="start">March</text> <text fill='#747474' x='900' y='80' text-anchor="start">April</text> <text fill='#747474' x='1200' y='80' text-anchor="start">May</text> <text fill='#747474' x='1510' y='80' text-anchor="start">June</text> <text fill='#747474' x='1810' y='80' text-anchor="start">July</text> <text fill='#747474' x='2120' y='80' text-anchor="start">August</text> <text fill='#747474' x='2420' y='80' text-anchor="start">September</text> <text fill='#747474' x='2730' y='80' text-anchor="start">October</text> <text fill='#747474' x='3030' y='80' text-anchor="start">November</text> <text fill='#747474' x='3340' y='80' text-anchor="start">December</text> </g> <g> <circle cx="{{date:DDD}}0" cy="14" r="15" stroke="black" fill="white" /> </g> </svg>

### 💡**Inspiration**

**<% await tp.web.daily_quote() %>**

<% tp.user.getRandomQuote("Constructive quotes") %>

## 📝 Planning

🏋Potential challenge: 

### **Weekly Initiatives**

#### **Today's focus**
```tasks
path includes system
not done
scheduled before <% tp.date.now("YYYY-MM-DD",+1) %>
sort by scheduled
```

#### **Up next**
```tasks
path includes system
not done
has scheduled date
scheduled after <% title %>
sort by scheduled
limit 1
```

### 😎**Todays Theme**

> <% tp.file.include('[[daily theme template]]') %>

### 🌅**Morning (wakeup - 12)**


### 🔅**Afternoon (12 - 17)**


### 🌙**Evening (17-21)**


### 🗨️ **Talk to...**
```dataview
TABLE Last_Contacted FROM "Cards/People"
WHERE (Last_Contacted <= this.file.day - dur(30 days)) AND VIP = "Yes"
SORT Last_Contacted
```

## 🔄Reviewing

### 💭**Documenting**


### 📓**Today's notes**

```dataview
LIST FROM "Cards/Note" OR "Sources"
WHERE file.cday = this.file.day
```

### ⚖️**Assessment**

#### ✅**What did I do well?**
- 

#### 📜**Logs**

🌱Takeaways::
🏅Achieved::
🪜Improved:: 
🧠Learned:: 
🗻Challenges::
😆Enjoyment::
🤝Reciprocity::
💝Bestow::

#### 🔋**MetalMinds**

```button
name Create Metalminds
type command
action Templater: Insert Extras/Templates/reviews/metalminds template.md
color blue
remove true
```









