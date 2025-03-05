//declaring date object to use it in multiple multiple elements
let tarik = new Date();
const toDate = tarik.toDateString();
const todayDate = document.getElementById('todays-date');
todayDate.innerText = toDate;

//these counts will be shown by default after the website loads
let countN = 23;
const navCount = document.getElementById('nav-count');
navCount.innerText = countN;

let countT = 6;
const taskCount = document.getElementById('task-count');
taskCount.innerText = countT;

//getting hold of the activity column to be able to add elements dynamically
const activityBox = document.getElementById('activity-box');

//here i've declared couple of onlick functions to respond to user's event clicks
function completed1() {
    alert('Board Successfully Updated'); //1st alert after completing an action
    countN += 1; //changing Navbar count
    navCount.innerText = countN;
    countT -= 1; //changing Task Assigned count
    taskCount.innerText = countT;
    document.getElementById('completed-btn1').setAttribute("disabled", true); //this makes the button unclickable
    //here dynamically activity log is being created
    let activLog = document.createElement('p');
    //dynamic message along with timestamp using GET methods on date object
    activLog.innerText = "You have completed the task " + document.getElementById('card1-title').innerText + " at " + tarik.getHours() + ":" + tarik.getMinutes() + ":" + tarik.getSeconds();
    //adding some tailwind css styles to the activity logs
    activLog.classList.add("bg-indigo-50", "p-3", "rounded-xl", "mb-3");
    //dynamically makeing the logs available to view for the users in the website
    activityBox.appendChild(activLog);
    //last alert only if 6 tasks get completed
    if (countT === 0) {
        alert('COngratulations for completing all current tasks');
    }
}
function completed2() {
    alert('Board Successfully Updated');
    countN += 1;
    navCount.innerText = countN;
    countT -= 1;
    taskCount.innerText = countT;
    document.getElementById('completed-btn2').setAttribute("disabled", true);
    let activLog = document.createElement('p');
    activLog.innerText = "You have completed the task " + document.getElementById('card2-title').innerText + " at " + tarik.getHours() + ":" + tarik.getMinutes() + ":" + tarik.getSeconds();
    activLog.classList.add("bg-indigo-50", "p-3", "rounded-xl", "mb-3");
    activityBox.appendChild(activLog);
    if (countT === 0) {
        alert('COngratulations for completing all current tasks');
    }
}
function completed3() {
    alert('Board Successfully Updated');
    countN += 1;
    navCount.innerText = countN;
    countT -= 1;
    taskCount.innerText = countT;
    document.getElementById('completed-btn3').setAttribute("disabled", true);
    let activLog = document.createElement('p');
    activLog.innerText = "You have completed the task " + document.getElementById('card3-title').innerText + " at " + tarik.getHours() + ":" + tarik.getMinutes() + ":" + tarik.getSeconds();
    activLog.classList.add("bg-indigo-50", "p-3", "rounded-xl", "mb-3");
    activityBox.appendChild(activLog);
    if (countT === 0) {
        alert('COngratulations for completing all current tasks');
    }
}
function completed4() {
    alert('Board Successfully Updated');
    countN += 1;
    navCount.innerText = countN;
    countT -= 1;
    taskCount.innerText = countT;
    document.getElementById('completed-btn4').setAttribute("disabled", true);
    let activLog = document.createElement('p');
    activLog.innerText = "You have completed the task " + document.getElementById('card4-title').innerText + " at " + tarik.getHours() + ":" + tarik.getMinutes() + ":" + tarik.getSeconds();
    activLog.classList.add("bg-indigo-50", "p-3", "rounded-xl", "mb-3");
    activityBox.appendChild(activLog);
    if (countT === 0) {
        alert('COngratulations for completing all current tasks');
    }
}
function completed5() {
    alert('Board Successfully Updated');
    countN += 1;
    navCount.innerText = countN;
    countT -= 1;
    taskCount.innerText = countT;
    document.getElementById('completed-btn5').setAttribute("disabled", true);
    let activLog = document.createElement('p');
    activLog.innerText = "You have completed the task " + document.getElementById('card5-title').innerText + " at " + tarik.getHours() + ":" + tarik.getMinutes() + ":" + tarik.getSeconds();
    activLog.classList.add("bg-indigo-50", "p-3", "rounded-xl", "mb-3");
    activityBox.appendChild(activLog);
    if (countT === 0) {
        alert('COngratulations for completing all current tasks');
    }

}
function completed6() {
    alert('Board Successfully Updated');
    countN += 1;
    navCount.innerText = countN;
    countT -= 1;
    taskCount.innerText = countT;
    document.getElementById('completed-btn6').setAttribute("disabled", true);
    let activLog = document.createElement('p');
    activLog.innerText = "You have completed the task " + document.getElementById('card6-title').innerText + " at " + tarik.getHours() + ":" + tarik.getMinutes() + ":" + tarik.getSeconds();
    activLog.classList.add("bg-indigo-50", "p-3", "rounded-xl", "mb-3");
    activityBox.appendChild(activLog);
    if (countT === 0) {
        alert('COngratulations for completing all current tasks');
    }
}
//this function is used for defining the click event for clearing History button
function clearHis() {
    const clearHist = document.getElementById("activity-box");
    clearHist.innerText = ""; //simply adding empty string
}
//fun little function for changing theme of the website [BONUS SECTION]
function colorChng() {
    //CREATING HASH value for chnaging colors
    let bgColor = "#";
    let hexCode = "ABCDEF"
    //simple for loop and started the loop from 4 until before 8 cz I liked the color scheme of this range
    for (let i = 4; i < 8; i++) {
        const color = i * (Math.round(Math.random())) + hexCode[Math.round(Math.random())];
        bgColor += color;
    }
    //used here template literals to custom the theme color
    document.getElementById("body").setAttribute("style", `background-color:${bgColor}`);
}


