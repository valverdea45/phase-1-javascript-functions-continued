// Your code here
function saturdayFun(activity = `roller-skate`) {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function (activity = `go to the office`) {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(visualFlair = `*`){
    return function (noun = `special`){
        return `You are ${visualFlair}${noun}${visualFlair}!`
    }
}