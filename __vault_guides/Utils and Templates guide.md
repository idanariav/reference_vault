# Utils and Templates guide

## Plugins

Useful settings for plugins that don't always appear in their github/documentation page

### Templater

1. **Template folder location** - check that it points to the right folder (configured here to Extras/Templates)
2. **Trigger Templater on new file creation** - turn "on", that way we could trigger templater when creating a new note
3. **Folder template** - automatically uses a template whenever a new note is created within that folder. If you set a "/" as a folder, this will trigger that template for every new note in the vault no matter where you create it. This is useful for the [[note_picker_template]] which allows for dynamic control on which note to create directly from the quick switcher tab (see templates section ahead)
4. **Snippets folder** - Allows adding custom functions to templater. For example this vault uses custom functions to detect which weeks belong to each month. Check that it points towards the right folder (configured here to Extras/Snippets)

### Metadata Menu

1. **Scope** - Do you plan on using metadata menu only with properties in the frontmatter or across the entire note? Best to use "frontmatter only" for easier indexing
2. **fileClass settings** - define where fileClasses are stored (configured here to Extras/fileClasses) and what is the name of the property that assigns a class to a note (default fileClass)

### Tasks

1. **Global filter** - Do you want every checkbox in the vault to be recognized as a task, or only certain checkboxes? For example, only those that have "#task" tag attached to it. This will help to reduce clutter and optimize indexing

## Templates overview