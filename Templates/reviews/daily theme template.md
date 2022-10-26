<%*
let today = tp.date.now("dddd")

switch(today) {
	case "Sunday":
		tR = "🤗Social day - lets chat with some friends!";
		break;
	case "Monday":
		tR = "📖Reading day - lets open those books!";
		break;
	case "Tuesday":
		tR = "🔬Study day - lets dive into some courses!";
		break;
	case "Wednesday":
		tR = "⭐Goals day - lets work on my long term goals!";
		break;
	case "Thursday":
		tR = "🔧Systems day - yay! lets add/fix stuff in our life-support system!";
		break;
	case "Friday":
		tR = "📝Writing day - lets write some posts or new ideas!";
		break;
	default:
		tR = "📥Cleanup day - lets deal with this week's leftovers!"
}
%>