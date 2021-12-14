function saturdayFun(bits = 'roller-skate'){
    return `This Saturday, I want to ${bits}!` ;
};
function mondayWork(work = 'go to the office'){
    return `This Monday, I will ${work}.` ;
}

function wrapAdjective(flair = '*') {
    return function(result = 'special') {
       return `You are ${flair}${result}${flair}!`;
    }
}
