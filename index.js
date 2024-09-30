// Function to declare the default activity for Saturday
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
};

// Function to wrap an adjective
function wrapAdjective(wrapper = '*') {
    return function(adjective) {
        return `You are ${wrapper}${adjective}${wrapper}!`;
    };
}

// Export the functions for testing
module.exports = { saturdayFun, mondayWork, wrapAdjective };
