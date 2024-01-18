//let currentValue=document.querySelector(`.a`).value;
let display=document.querySelector(`.display`);
let buttons=document.querySelectorAll(`.btn`);
let string="";

Array.from(buttons).forEach((Currentbutton)=>{ //here we have used Array constructor to create an array of
    Currentbutton.addEventListener(`click`,(e)=>{  
    // the 'e' here is the event object to the Currentbutton. The event object in JavaScript is an object that contains information about an event that has occurred. It is passed to event handlers when an event is triggered. The event object contains properties that describe the event, such as the type of event, the target element, and the current state of the browser.
    //The event object is a useful tool for responding to events in JavaScript. It allows you to get detailed information about the event, which can be used to take appropriate action. For example, you can use the event object to determine which element was clicked, or to get the current position of the mouse cursor.
    //The event object in JavaScript in addEventListener is an object that contains information about the event that triggered the event handler. This information can include the type of event, the target element, and the current state of the browser.
    //The event object is passed as an argument to the event handler function. The event handler function can then use this information to perform the appropriate action.
    
    //the target is a property of the event(e) object that tell us where the event was triggered
        const {target}=e; //object destructuring
        if(target.value == '=')  //now here we can directly write traget.value instead of e.targer.value.
        {
                string=eval(string);
                display.value=string;   
        }
        else if(target.value=='c')
        {
            string='';
            display.value=string;
        }
        else
        {
            // console.log(target);
            if(string.charAt(string.length-1)!==target.id)  // this check ensures that we do not get the operators more than once
            {
                string=string + target.innerHTML;
                display.value=string;
            }
            
        }
    })
})
    



