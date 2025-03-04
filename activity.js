let tarik = new Date();
const toDate = tarik.toDateString();
const todayDate = document.getElementById('todays-date');
todayDate.innerText = toDate;

let countN = 23;
const navCount = document.getElementById('nav-count');
navCount.innerText = countN;

let countT = 6;
const taskCount = document.getElementById('task-count');
taskCount.innerText = countT;


const activityBox = document.getElementById('activity-box');

function completed1() {
    alert('Board Successfully Updated');
    countN += 1;
    navCount.innerText = countN;
    countT -= 1;
    taskCount.innerText = countT;
    document.getElementById('completed-btn1').setAttribute("disabled", true);
    let activLog = document.createElement('p');
    activLog.innerText = "You have completed the task " + document.getElementById('card1-title').innerText + " at " + tarik.getHours() + ":" + tarik.getMinutes() + ":" + tarik.getSeconds();
    activLog.classList.add("bg-indigo-50", "p-3", "rounded-xl", "mb-3");
    activityBox.appendChild(activLog);
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
function clearHis() {
    const clearHist = document.getElementById("activity-box");
    clearHist.innerText = "";
}

function colorChng() {
    let bgColor = "#";
    let hexCode = "ABCDEF"
    for (let i = 4; i < 8; i++) {
        const color = i * (Math.round(Math.random())) + hexCode[Math.round(Math.random())];
        bgColor += color;
    }
    document.getElementById("body").setAttribute("style", `background-color:${bgColor}`);
}


