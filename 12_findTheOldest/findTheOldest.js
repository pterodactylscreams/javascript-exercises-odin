const findTheOldest = function(people) {
    const currYear=new Date().getFullYear()
    const agesTable= people.map(person => ( 
        {
        ...person, 
        age: (!person.yearOfDeath ? currYear : person.yearOfDeath) - person.yearOfBirth 
        }
    )
    );


const sortAge=agesTable.sort((p1,p2) => p2.age - p1.age)

return sortAge[0]

}

// Do not edit below this line
module.exports = findTheOldest;
