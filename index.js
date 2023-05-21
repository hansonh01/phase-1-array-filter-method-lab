// Code your solution here
function findMatching(drivers,name){
    return drivers.filter(drivers => drivers.toLowerCase()=== name.toLowerCase())
};
function fuzzyMatch(drivers,letters){
    return drivers.filter(drivers => drivers.startsWith(letters))
};
function matchName(drivers,name){
    return drivers.filter(drivers => drivers.name===name)
};