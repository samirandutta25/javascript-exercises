const currentYear = new Date().getFullYear();

const findTheOldest = function( people ) {
    return people.reduce( ( total, curr ) =>{
        if( ( total.yearOfDeath || currentYear) - total.yearOfBirth  < ( curr.yearOfDeath || currentYear) - curr.yearOfBirth){
            return curr;
        }else{
            return total;
        }
    }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
