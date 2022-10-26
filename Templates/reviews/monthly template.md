---
<%* //my constants
const startMonth = tp.user.getStartEndDate('month', 'start')
const endMonth = tp.user.getStartEndDate('month', 'end')
-%>
template_version: 1.08
prev: [[<%tp.date.now("YYYY-MM","P-1M")%>]]
Date: <% endMonth %>
fileClass: monthly_class
Rate: 
tags: Review/Monthly
alias:
 - "<%tp.date.now("MMM YYYY")%>"
---
Component:: <% tp.user.getMonthsWeeks(tp.date.now()) %>
# {{title}}


> [!success]+ Monthly Review
> 
The monthly review’s goal is to create and modify projects/monthly targets in accordance with my OKRs


## Assessment

### 📜Journaling
> [!summary] Monthly notes
> ![[31_32#<%tp.date.now("MMMM")%>]]
> 
### 🔈Posts written
```dataview
LIST FROM #Type/Content 
WHERE file.mday <= date(<% endMonth %>) AND file.mday >= date(<% startMonth %>)
```

### 🏅Breakthroughs
```dataview
TABLE Achieved FROM #Review/Daily  
WHERE Date >=  date(<% startMonth %>)
AND Date <= date(<% endMonth %>)
AND Achieved>0
sort Date
```

### 🗻Difficulties
```dataview
TABLE Challenges FROM #Review/Daily  
WHERE Date >=  date(<% startMonth %>)
AND Date <= date(<% endMonth %>)
AND Challenges>0
sort Date
```

### 😆Activities
```dataview
TABLE Enjoyment FROM #Review/Daily  
WHERE Date >=  date(<% startMonth %>)
AND Date <= date(<% endMonth %>)
AND Enjoyment>0
sort Date
```
```dataview
TABLE Reciprocity FROM #Review/Daily  
WHERE Date >=  date(<% startMonth %>)
AND Date <= date(<% endMonth %>)
AND Reciprocity>0
sort Date
```
```dataview
TABLE Bestow FROM #Review/Daily  
WHERE Date >=  date(<% startMonth %>)
AND Date <= date(<% endMonth %>)
AND Bestow>0
sort Date
```

### 🌱Growth

```dataview
TABLE Takeaways FROM #Review/Daily  
WHERE Date >=  date(<% startMonth %>)
AND Date <= date(<% endMonth %>)
AND Takeaways>0
sort Date
```

```dataview
TABLE Imrpoved FROM #Review/Daily  
WHERE Date >=  date(<% startMonth %>)
AND Date <= date(<% endMonth %>)
AND Imrpoved>0
sort Date
```

```dataview
TABLE Learned FROM #Review/Daily  
WHERE Date >=  date(<% startMonth %>)
AND Date <= date(<% endMonth %>)
AND Learned>0
sort Date
```


### ⏫Active Monthly Target:

```dataview
TABLE Deadline, importance FROM #System/Monthly_Target
and #Status/Ongoing 
WHERE deadline <= date(<% endMonth %>)
AND file.name != "monthly target template"
```
### Next up Monthly Targets

```dataview
TABLE Deadline, importance FROM #System/Monthly_Target
and #Status/Next_up 
where file.name != "monthly target template"
```

### Did I achieve my monthly goal? if no, why not? if yes, what went well?



## 🔑Key outcomes

- [ ]  update active OKR's, see if any need modification

### Key outcomes
```dataview
TABLE Deadline FROM #System/OKR 
and #Status/Ongoing 
WHERE file.folder != "Extras/Templates/Pillars"
```
### Projects

- [ ]  review all projects, create/update as necessary (dates, status, information and general structure)

```dataview
Table date_start AS Start, date_finish AS Finish, split(tags[2], "/")[1] AS Status, split(tags[1], "/")[2] AS Area FROM #System/Project AND !#Status/Achieved
WHERE file.folder != "Extras/Templates/Pillars"
```
### Backlog monthly targets

- [ ] check current and future monthly targets from projects, push to present/future as necessary
```dataviewjs

const query = `
not done
no start date
no scheduled date
${"(path includes " + dv.pages("#Status/Ongoing").where(p => p.file.path.startsWith("Spaces/System/Monthly Targets")).file.path.join(') OR (path includes ') + ")"}
group by path
`;

dv.paragraph('```tasks\n' + query + '\n```');


```


## 📚Monthly theme
![[Monthly Themes MOC#<%tp.date.now("MMMM")%>]]

### My Answer


### Next month's theme
![[Monthly Themes MOC#<%tp.date.now("MMMM","P1M")%>]]
