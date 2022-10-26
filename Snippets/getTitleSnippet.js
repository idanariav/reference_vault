function getCleanTitle(fileTitle, returnTrigger=false) {
    //  count dashes in the title
    const count = (fileTitle.match(/-/g) || []).length;
    // generating the variables (might change during the script)
    let cleanTitle = fileTitle.trim();
    let newTitle;
    // if you wish to get the trigger back, returns an array with the title and trigger
    // otherwise just returns the title
    function checktrigger(newtitle, returnTrigger, trigger="no_trigger"){
        if (returnTrigger){
            return [newtitle, trigger]
        }
        else {
            return newTitle
        }
    }

    if (count == 0) {
        // if untitled or empty, return "untitled"
        if ((fileTitle === "untitled") || (fileTitle.length == 0)) {
            console.log("no title detected")
            return checktrigger("untitled", returnTrigger);
        }
        else {
            console.log("No Dash in title so returning trimmed:", fileTitle);
            return checktrigger(cleanTitle, returnTrigger);

        }
    }
    // if there is a dash in the title
    else if (count == 1) {
        console.log("Dash detected in:", fileTitle);
        // 
        newTitle = cleanTitle.split("-")[1].trim();
        trigger = cleanTitle.split("-")[0].toLowerCase().trim()
        return checktrigger(newTitle, returnTrigger, trigger)
        


    }
    else if (count > 1) {
        // Check for date
        const dateType = /(\d{4})([-])(\d{2})([-])(\d{2})/;
        const isMatch = dateType.test(fileTitle);

        if (isMatch && count == 2) {
            // since it has a date... and only has dashes for a date, return it.
            console.log("Date detected! No other dash, return as is", fileTitle);
            return checktrigger(cleanTitle.trim(), returnTrigger);

        }
        else if (isMatch && count > 2){
            // has a date but also a front trigger (we assume)
            newTitle = cleanTitle.split("-").slice(1);
            newTitle = newTitle.join("-").trim()
            // if you wish, you get back the trigger as well, otherwise just the title
            trigger = cleanTitle.split("-", 1)[0].toLowerCase().trim()
            return checktrigger(newTitle, returnTrigger, trigger)
        }
        else {
            // might contain date but also other dashes
            console.log("unclear title structure due to multiple dashes, returning as is", fileTitle);
            return checktrigger(cleanTitle, returnTrigger);
        }
    }
    else {
        console.log("Logic Error")
    }

}
module.exports = getCleanTitle;