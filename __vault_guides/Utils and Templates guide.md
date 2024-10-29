# Utils and Templates guide

## Plugins

Useful settings for plugins that don't always appear in their Github/documentation page

### Templater

1. **Template folder location** - check that it points to the right folder (configured here to Extras/Templates)
2. **Trigger Templater on new file creation** - turn "on", that way we could trigger templater when creating a new note
3. **Folder template** - automatically uses a template whenever a new note is created within that folder. If you set a "/" as a folder, this will trigger that template for every new note in the vault no matter where you create it. This is useful for the [[note_picker_template]] which allows for dynamic control on which note to create directly from the quick switcher tab (see templates section ahead)
4. **Snippets folder** - Allows adding custom functions to templater. For example this vault uses custom functions to detect which weeks belong to each month. Check that it points towards the right folder (configured here to Extras/Snippets)
5. **Template Hotkeys** - adding a template to the template hotkeys list would actually turn the template into an obsidian action, which could then be triggered through the command palette or slash commands, regardless of whether we set up a hotkey for that or not.

### Metadata Menu

1. **Scope** - Do you plan on using metadata menu only with properties in the frontmatter or across the entire note? Best to use "frontmatter only" for easier indexing
2. **fileClass settings** - define where fileClasses are stored (configured here to Extras/fileClasses) and what is the name of the property that assigns a class to a note (default fileClass)

### Tasks

1. **Global filter** - Do you want every checkbox in the vault to be recognized as a task, or only certain checkboxes? For example, only those that have "#task" tag attached to it. This will help to reduce clutter and optimize indexing

## Templates overview

After you have allowed for community plugins and activated the "templater" plugin, I recommend setting up the [[note_picker_template]] as a folder template.

The note picker templates allows you to create whichever type of note from anywhere in the vault (including the quick switcher) by simply selecting the relevant note from the pop up list. For a more technical overview, see the *note picker template section*

how to use the note picker template:
1. **Calendar**: insert the date in the following format and then choose "calendar":
	1. **Daily**: %Y-%m-%d format (such as "2024-06-12")
	2. **Weekly**: %Y-%w format (such as "2024-W20")
	3. **Monthly**: %Y-%m format (such as "2024-04")
	4. **Quarterly**: %Y-%q format (such as "2024-q1)
	5. **Yearly**: %Y format (such as "2024")
2. **Content**:
	1. **Regular notes**: "note"
	2. **MOC**: "advanced notes"->"moc"
3. **Sources**:
	1. **References**: "advanced notes"->"References"
	2. **Books**: "book"
4. **System**:
	1. **Projects**: system-> projects
	2. **Quarterly plans**: system-> Quarterly plans
	3. **Visions**: system-> Quarterly Visions


### Calendar templates

Calendar templates are used for journaling, more details can be found here - [[Periodical Journaling]]

#### Daily 
##### inspiration:
this section includes a daily quote for inspiration, and highilghts important event that you wrote on the same day aka "on that day")  in previous years (for example, if you filled the "connection" field in Oct 16 2023, it will pop up in Oct 16 2024-2033)
![[daily_template#💡Inspiration]]


##### Planning
this section shows tasks that should be done today (based on active projects and quarterly plans)

##### Reviewing:
In this section, the "documenting" is for free form text, while the "logs" is for short descriptions of important events based on the category they belong to.
For me, I record events by:
1. **Insights**: things I've learned about myself, healthier mindsets that I should have
2. **Achieved**: successes based on my constant progress such as books read, courses or projects finished (_determination_)  
3. **Initiated**: either one time or long term actions or changes that promotes me towards the person I want to become, especially better defaults or habits
4. **Enriched**: content written, notes created/expanded, thoughts emerged
5. **Overcame**: challenges/failures, either internal or external that I faced and how I overcame them (_Grandeur_)  
6. **Connection**: moments of connection with others, from pure happiness, to sharing feelings, deep moments of connection, acts of kindness, etc. 
7. **Empowerment**: actions made with others in mind, for their wellbeing even at personal cost, such as acts of kindness to your partner, being a good friend/family member, etc. reaching to others from genuine intent and care
8. **Affirmations**: expressions of self confidence, love and compassion

![[daily_template#🔄Reviewing]]


#### Weekly

##### Tasks

An overview of tasks related to this week, divided by status (todo, in progress, completed)

##### past week

A series of open questions to review your week, focusing on actions and habits that you can improve for next week

![[weekly_template#🗓️Past week]]

##### Todos

here you can add checkboxes in the form of "- [ ] " for small things you want to complete during the review. For example I add a task for syncing my kindle so that my weekly highlights won't get lost if something happens to it.

#### Monthly

##### Logs

This Dataview query shows all the logs we filled in the last month. For example, every "connection" log we wrote.

This helps reflect on the meaningful moments that happened in the last month, which can often get overlooked because we are so busy in the day to day

##### Events

This section is similar to the logs section in the daily template, but instead we write the major events that happened this month that will be resurfaced in the quarterly review.
For example:
1. Peak - something great that has happened
2. low - something bad, a sad moment
3. impactful - something that has changed who we are, the way we see the world, our beliefs, values or understanding
4. opportunity - something that we can do differently, a chance for change
5. discovery - something new that has entered our lives

![[monthly_template#📒Events]]

#### Quarterly

##### Assesment
In the quarterly review assesment section, there is a Dataview query that shows all the logs from the monthly table.

Then we have 3 areas for a free text answer, where we can reflect on how we have developed in different areas of our lives - personal, social and professional. 
Usually we don't notice how much things have changed during a quarter, but looking back we can see how far we've come, and be grateful and proud of our journey.


![[quarterly_template#⚖️Assessment]]

##### Planning

In this section we can review our active quarterly plans and whether we have finished what we set out to do in this quarter, and also review our active projects and see whether they require any adaptation based on changes in the last quarter and how far we have progressed.

![[quarterly_template#📝Planning]]

##### Yearly

The yearly template has two sections. The first is all about reflecting on who we are, our core values. It includes sample questions on each one of my core values and how it was expressed in my behavior, actions, and thoughts

The second second is about planning the following year, what are our goals - in terms of visions and projects, what are our anti-goals, and which habits we want to form.

### Content templates

Content template are used as part of the [[Idea Processing]] workflow, follow the link to learn more.

#### Notes template

The note template includes the "notes" section for free form text, the "additional metadata" to link this note to a topic (usually a "map of content"), the origin (for example the name of the book/podcast/person this idea originated from) and a link to the relevant source (for example to a video discussing this topic)

The "visual" section is for displaying the note's drawing, if such exists

#### MOC template

A "map of content" note (aka moc), serves as a note that brifly surveys all the relevant notes in a given topic. For example, the "pkm" moc shows all the notes related to pkm. 

In it, there is a query that shows all the notes related to this moc which hasn't yet been mentioned in this note. This simplifies adapting the moc with time, referencing new notes that were added to it, enriching it.

#### Reference template

The reference template is very similar to the note template. It is meant to represent ideas that are limited in scope, and couldn't be connected to many other ideas. For example, a note describing a specific machine learning model is meant to be a reference note rather than a general one.

### System templates

System template are used mainly for goal setting, project and task management. See more here - [[Goals and Tasks management]]

#### Core Principle template

This is a note for your core values, with several headings meant to inspire reflection on why this is one of your values and what does it mean to pursue it.

It also includes a table that lists all the "visions" related to it

#### Vision template

Similar to a core principle, a vision is an attempt to convert a value into an objective outcome in our lives. You can reflect on what that outcome looks like, be a clear and precise as possible.

It also includes a table that lists all the "projects" related to it

#### Project template

A project is used to track all the quarterly plans related to it, which serves the vision that is it's parent. The table shows all the related quarterly plan, their status, and how many open tasks remain in it.

A project template is a good place to write/link project related information.

##### Quarterly Plan template

A quarterly plan is a place to write all the weekly tasks related to that project by week, following the 12 week year format. It is useful to either add dependencies between tasks (for example task of week 2 will only be available once tasks of week 1 are done - see [task dependencies](https://publish.obsidian.md/tasks/Getting+Started/Task+Dependencies)), or having a due/start date per task based on the week it belongs to