function saturdayFun (activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (activity='go to the office'){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = "*") {
    return function (mge = "a hard worker") {
        return `You are ${flair}${mge}${flair}!`;
    }
}