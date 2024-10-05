---
<%*
const title = tp.file.title
await tp.file.move("Calendar/Yearly/" + title)
-%>
Year: <% title %>
tags: Review/Yearly
---
# <% title %>

down:: [[<% `${title}-Q1` %>]] [[<% `${title}-Q2` %>]] [[<% `${title}-Q3` %>]] [[<% `${title}-Q4` %>]]

> [!success]+ Yearly Review
> 
The yearly review’s goal is to deeply review multiple aspects on the passing year, to consider, adjust and update my Core Values if necessary, and to plan Visions and Quarterly plans for the next year.

## ⚖Assessment

### 🌱Growth 

> [!info]- Growth
> - Did I actively seek feedback and use it to improve my skills and approaches?
> - How committed was I to self-reflection and self-awareness throughout the past year?
> - What specific steps did I take to understand the reasons behind my thoughts, actions, and beliefs?
> - How did I cultivate a mindset of continuous learning and curiosity about the world around me?
> - Did I actively seek out diverse perspectives and wisdom from others to broaden my understanding?

### 🏅Determination

> [!info]- Determination
> - How well did I stay committed to my goals and habits throughout the past year?
> - Did I consistently prioritize my goals over short-term distractions or temptations?
> - Can I identify moments when my determination wavered, and what factors contributed to those moments?
> - How has my determination positively impacted my lifestyle and overall well-being?
> - Have there been instances where I had to say no to certain activities or commitments to stay focused on my goals?

### 🔨Initiative

> [!info]- Initiative
> - In what ways did I demonstrate a proactive approach to challenges rather than a reactive one?
> - How consistently did I take ownership of my actions and decisions over the past year?
> - How did I contribute to shaping the direction of my life and the lives of those around me?
> - In what ways have I changed this year? new habits I adopted or old habits that I discarded
> - What are the initiatives I am most proud of? things that wouldn't have happened without my initiative


### 🧠Ingenuity

> [!info]- Ingenuity
> - How did I contribute something new or innovative to my personal or professional spheres in the past year?
> - Can I identify instances where I actively sought creative solutions to challenges or problems?
> - In what ways did I synthesize my unique qualities and perspectives into something new?
> - In what ways did I foster a creative and open-minded environment in my personal and professional life?
> - Did I actively share my creative insights and discoveries with others?


### 🗻Grandeur

> [!info]- Grandeur
> - Did I set and pursue new goals that required me to step out of my comfort zone?
> - In what ways did I embrace challenges as opportunities for personal growth and learning?
> - Were there instances where I had to overcome limiting beliefs or mindset blocks, and how did I address them?
> - What efforts did I make to align my actions with my authentic self and values?
> - In what ways did I stay resilient and persistent in the face of setbacks or moments of doubt?


### 😊Connection

> [!info]- Connection
> - Were there instances where I stepped out of my comfort zone to initiate connections with new people?
> - Did I prioritize and invest time in nurturing relationships?
> - How did I approach challenges and conflicts in my relationships, seeking understanding and resolution?
> - In what ways did I contribute to the happiness of others?
> - Were there instances where I actively practiced being fully present in the moment, enhancing my connections with those around me?


### 💪Empowerment

> [!info]- Empowerment
> - In what ways did I share my own wisdom and experiences with others to contribute to their growth?
> - How actively did I support and empower those within my inner circle to be their best selves?
> - Can I identify specific instances where I shared in the struggles of friends and family, contributing to their well-being?
> - Can I point to specific moments where I fought for the rights and well-being of others in my outer circle of society?
> - Were there instances where I advocated for a better world and future, working towards the common good of humanity?


### 💝Harmony

> [!info]- Harmony
> - Did I prioritize my mental, emotional, and physical well-being as part of my overall growth journey?
> - How did I deal with situations where I couldn't change external circumstances, finding peace within the acceptance of the unchangeable?
> - How well did I navigate the synthesis between my desires and beliefs in the past year, finding a middle ground that resonated with my values?
> - In what ways did I cultivate a sense of peace and acceptance with who I am, even in the face of aspirations and challenges?
> - Were there instances where I took deliberate steps to simplify my life, reducing unnecessary stress and promoting overall harmony?


## 📝Planning

### 🏅Goals
> [!info]- Goals
> - How do I picture the next year in broad strokes?
> - What will I be glad that I have accomplished this year?
> - What are my greatest challenges this year?


### ⛔ Anti Goals
> [!info]- Anti-Goals
> - What do I want to avoid doing?
> - Which outcomes will indicate that I have failed?
> - Which aspects of my life are harmful to my growth and happiness?


### 🔄 Habits
> [!info]- Habits
> - Which new habits I want to embrace this year?
> - Which existing habits I should continue doing?
> - Which habits I should get rid of?


### 🌟Values
> [!info]- Values
> - which values I have fulfilled?
> - do I have new Values?
> - which Values are now redundant?

```dataview
LIST FROM #System/Core_Principle 
WHERE file.name != "Core_Principle_template"
```

### 🔭Vision

```dataview
LIST FROM #System/Vision 
and !#Status/Completed 
WHERE file.name != "OKR template"
```

### 💼Projects

```dataview
LIST FROM #System/Project 
and !#Status/Completed 
WHERE file.name != "Project template"
```

## 🔧To-dos
- [ ]  Create new visions according to the existing (and new) values
- [ ]  Update/create projects with quarterly plans for the rest of the year in broad strokes, and clearly define the plans for Q1
