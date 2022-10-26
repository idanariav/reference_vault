
>[!metal]- MetalMinds
>Aluminum:: <%*
let identity = tp.frontmatter['Identity']
if (identity == "Yes") {tR += 1} else {tR += 0}
%>
Bendalloy:: <%* 
let meat =  tp.frontmatter["Meat"]
let salad =  tp.frontmatter["Salad"]
if (meat == "Yes") {meat = -1} else {meat = 0}
if (salad == "Yes") {salad = 1} else { salad = 0}
tR += salad + meat
%>
Brass:: <%*
let partner = tp.frontmatter['As_partner']
if (partner>=9) {tR += 1} else if (partner<7) {tR += -1} else {tR += 0}
%>
Bronze:: <%*
let sleep = tp.frontmatter['Sleep_hrs'] * 60 + tp.frontmatter['Sleep_mins']
tR += sleep - 420
%>
Cadmium:: <%* 
let highlight =  tp.frontmatter["Highlight_completed"]
if (highlight == "Yes") {tR += 1} else {tR += -2}
%>
Chromium:: <%*
let fortune = tp.frontmatter['Fortune']
if (fortune == undefined) {tR += 0} else {tR += fortune}
%>
Copper:: <%*
let studying =  tp.frontmatter["Studying"]
if (studying == 0) {tR += -15} else {tR += studying}
%>
Duralumin:: <%*
let social = tp.frontmatter['Social']
if (social>=9) {tR += 1} else if (social<7) {tR += -1} else {tR += 0}
%>
Electrum:: <%*
let focus = tp.frontmatter['Efficiency']
if (focus>=9) {tR += 1} else if (focus<7) {tR += -1} else {tR += 0}
%>
Gold:: <%* 
let health =  tp.frontmatter["Health"]
if (health == "Yes" || health == undefined) {health = 1} else {health = -30}
tR += health
%>
Iron:: <%*
let weight = tp.frontmatter['Weight']
let bmi
if (weight == 0 || weight == undefined) {tR += 0} else {bmi = weight / (1.68 ** 2)}
if (bmi == undefined) {} else if (bmi <= 24.9 || bmi >= 18.5) {tR += 1} else {tR += -1}
%>
Nicrosil:: <%* 
let moral =  tp.frontmatter["Helping"]
if (moral == "Yes") {moral = 1} else {moral = 0}
tR += moral
%>
Pewter:: <%* 
let workout =  tp.frontmatter["Workout"]
if (workout == 0) {tR += -3} else {tR += workout}
%>
Steel:: <%* 
let cardio =  tp.frontmatter["Cardio"]
if (cardio == 0) {tR += -3} else {tR += cardio}
%>
Tin:: <%* 
let thanks =  tp.frontmatter["Gratitude"]
if (thanks == null) {tR += -2} else {tR += 2}
%>
Zinc:: <%* 
let developing = tp.frontmatter['Developing']
if (developing == 0) {tR += -15} else {tR += developing}
%>