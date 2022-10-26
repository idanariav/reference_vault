---
template_version: 1.0
prev: [[<% tp.date.now('YYYY',P-1Y)%>]]
Year: <% tp.date.now('YYYY')%>
tags: Review/Yearly
---
# {{title}}

down:: [[<% tp.date.now('YYYY-Q1')%>]], [[<% tp.date.now('YYYY-Q2')%>]], [[<% tp.date.now('YYYY-Q3')%>]], [[<% tp.date.now('YYYY-Q4')%>]]
> [!success]+ Yearly Review
> 
The yearly review’s goal is to deeply review multiple aspects on the passing year, to consider, adjust and update my Core Values if necessary, and to plan Goal Outcomes and projects to the next year.


## Assessment

### 👋 People

---
> [!info] Writing Prompt
> - Who am I extra grateful for this year?
> - What did they give me? What did I give back to them?
> - Who deserves the biggest thank you this year? Can I let them know?

### 🛩️ Experiences

> [!info] Writing Prompt
> - What experiences did I have this year?
> - What did those experiences mean to me?
> - What did I learn from each one?
> - Would I do it again? 
> - What’s a memory from this year that makes me smile?
> - What’s a memory from this year that makes me sad?
---

### 📱 Things

> [!info] Writing Prompt
> - What things or objects am I grateful for this year?
> - What value do those objects have in my life?
> - Do I want to reduce/remove any of those objects?
---

### 🌟 Accomplishments and challenges

> [!info] Writing Prompt
> - What were the biggest accomplishments of the year?
> - What do those accomplishments mean for the future ahead?
> - What were the biggest challenges of the year?
> - how do these challenges affect me, my goals, my world view and the road ahead?
---

### 📖 Top Learnings


> [!info] Writing Prompt
> - What were my top learnings this year?
> - How are those learnings going to change or affect what I think about?
> - Can I, or do I want to, go deeper on those learnings?
---

---

### 👋 Me

> [!info] Writing Prompt
> - What’s one small way I can become a better person in next year? For others? For myself?
> - What am I holding onto that’s no longer serving me well? Why am I holding onto it? Can I let it go?
> - What can I thank myself for this year?
> - What have I outgrown this year?
---

### 💪 Strengths, Values, Behaviors

> [!info] Writing Prompt
> - What are my realized strengths?
> - Realized weaknesses?
> - What motivates me?
---

---

## Planning

### **Visualize**

- Describe what my life will be like in 12 months, how will it be different if things go according to plan. *Visualize this, feel it.*

- Who do I need to become to achieve those things?
    - How do I need to change and evolve?
    
    - What do I need to learn?
    
    - How do my Habits and Routines need to change?
    
- What is holding me back?
    
- How can I overcome these obstacles?

### Values

- which values I have fulfilled?
- do I have new Values?
- which Values are now redundant?

```dataview
LIST FROM #System/Core_Principle 
WHERE file.name != "Core Principale template"
```

### OKR

```dataview
LIST FROM #System/OKR 
and !#Status/Achieved 
WHERE file.name != "OKR template"
```

### Projects

```dataview
LIST FROM #System/Project 
and !#Status/Achieved 
WHERE file.name != "Project template"
```

## To-dos
- [ ]  review all my active and non-active value goals. do they need update?
- [ ]  have goal outcomes setup for the rest of the year (by quarters), and for the first 2, attach habits or projects
- [ ]  add/adjust projects as necessary, be careful not to have too many active at once
- [ ] adjust periodic notes folder to new files location (for the new year)
