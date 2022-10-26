---
<%* //my constants
const title = tp.file.title
const endMonth = tp.user.getStartEndDate('month','end')
const startMonth = tp.user.getStartEndDate('month','start')
-%>
template_version: 1.04
prev: [[<% tp.date.now("YYYY-[W]ww",-7) %>]]
Date: <% tp.date.now("YYYY-MM-DD",+7) %>
fileClass: weekly_class
tags: Review/Weekly
Rate: 0
alias:
 - "weekend of <% tp.date.now("MMM D, YYYY",+7) %>"
---
# title

> [!info]- Additional Medatada
Component:: [[<% tp.date.now("YYYY-MM-DD") %>]], [[<% tp.date.now("YYYY-MM-DD",+1) %>]], [[<% tp.date.now("YYYY-MM-DD",+2) %>]], [[<% tp.date.now("YYYY-MM-DD",+3) %>]], [[<% tp.date.now("YYYY-MM-DD",+4) %>]], [[<% tp.date.now("YYYY-MM-DD",+5) %>]], [[<% tp.date.now("YYYY-MM-DD",+6) %>]]
> 

> [!success]+ Weekly Review
> 
The weekly review’s goal is to create and modify tasks in accordance with my monthly Targets, and to make sure that progress is made in projects and in general

## Planning

### Monthly Target
```dataview
TABLE deadline, importance FROM #System/Monthly_Target
and #Status/Ongoing 
WHERE deadline <= date(<% endMonth %>)
AND file.name != "monthly target template"
```

### Monthly backlogs

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

### weekly backlogs
```tasks
path includes system
not done
has start date
no scheduled date
```
### Assigned this week
```tasks
path includes system
not done
has scheduled date
```

## Assessment

### past week

```dataview
TABLE Improved, Learned, Achieved, Takeaways FROM #Review/Daily 
AND outgoing([[<% title %>]])
SORT Date
```

```dataview
TABLE Rate, Highlight, Gratitude, Efficiency, As_partner, Social FROM #Review/Daily 
AND outgoing([[<% title %>]])
SORT Date
```
### Task completed
```tasks
path includes system
(done after <% tp.date.now("YYYY-MM-DD") %>) AND (done before <% tp.date.now("YYYY-MM-DD", +6) %>)
```

### What contributed the ***most*** to my productivity this week?
- 

### What contributed the ***least*** to my productivity this week?
- 

### blind spots and unforeseen events
- 


## Projects and growth


### Did I stick to my habits and routines this week? if not - why?
- 

### What could I have done better in order to be more productive and focused?
- 

### Active projects

```dataview
Table date_start AS Start, date_finish AS Finish FROM #System/Project AND #Status/Ongoing 
```

## To-dos

- [ ]  check the tasks for the next 7 days
- [ ]  check unplanned or “someday” tasks
- [ ]  clear inbox and clean-up