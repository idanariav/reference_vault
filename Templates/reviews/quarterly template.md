---
<%* //my constants
const startQuarter = tp.user.getStartEndDate('quarter', 'start')
const endQuarter = tp.user.getStartEndDate('quarter', 'end')
-%>
template_version: 1.03
prev: [[<% tp.user.getStartEndDate('quarter', 'start', -1, "quarter", format="YYYY-[Q]Q") %>]]
fileClass: quarterly_class
Date_start: <% startQuarter %>
Date_end: <% endQuarter %>
Rate: 
tags: Review/Quarterly
alias:
---
# {{title}}

Component:: [[<% tp.user.getStartEndDate('quarter', 'start', format="YYYY-MM") %>]], [[<% tp.user.getStartEndDate('quarter', 'start', 1, 'month', "YYYY-MM") %>]], [[<% tp.user.getStartEndDate('quarter', 'start', 2, 'month',"YYYY-MM") %>]]
> [!success]+ Quarterly Review
> 
The quarterly review’s goal is to create, adjust and update OKRs according to my core principles

## Assessment

### how was this quarter?

#### Self

#### Social

#### Work

#### Monthly targets completed
```dataview
TABLE Deadline, up AS OKR FROM #System/Monthly_Target  and #Status/Achieved 
WHERE file.folder != "Extras/Templates/Pillars" 
AND Deadline >= date(<% startQuarter %>)
AND Deadline <= date(<% endQuarter %>)
SORT split(tags[1], "/")[1] DESC
```

#### Task completed
```tasks
path includes system
(done after <% startQuarter %>)
AND (done before <% endQuarter %>)
```


### was I on track with my projects and my OKRs?


### do my OKRs matches my core principles?


## Planning

### Core Principles

```dataview
TABLE WITHOUT ID link(file.link, split(file.name," ")[0]) AS Value, Moto FROM #System/Core_Principle 
AND !"Extras"
SORT file.name
```

### OKR's


```dataview
TABLE Deadline, split(tags[1], "/")[1] AS Status, up AS Value FROM #System/OKR and !#Status/Achieved 
WHERE file.folder != "Extras/Templates/Pillars"
SORT split(tags[1], "/")[1] DESC
```


## Habits and Routines

[[Routines MOC]]


## To-Dos
- [ ]  update active core principals, see if any need modification
- [ ]  review all OKRs, create/update as necessary (dates, status, monthly targets...)
- [ ] review routines and habits, see if any need changing, added, different frequency, etc...