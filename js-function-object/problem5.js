/* 
You are in hurry to go to your school on time. But when you are crossing
the road, the traffic signal is red coloured. In this situation, if you try
to cross the road, you may be in danger. If you notice a yellow coloured
traffic signal, you should stop. If you notice a green coloured light signal,
you should cross the road. So write a javaScript code, where there is a 
variable called signal. It's value can be green, yellow or red & we will
get diffrent activities as output depending on the variable. So hurry up.
*/

var signal = "Yellow";
switch (signal) {
    case "Red":
        console.log("Don't cross the road");
        break;
    case "Yellow":
        console.log("You should stop now");
        break;
    case "Green":
        console.log("You may cross the road now");
        break;
    default:
        console.log("There might be a problem with the signal this should be Red, Green or Yellow");    
}