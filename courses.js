const courses = [{
        prefix: 'ITIS',
        id: 5166,
        title: 'Network based app development'
    },
    {
        prefix: 'ITIS',
        id: 5180,
        title: 'Mobile application development'
    },
    {
        prefix: 'ITCS',
        id: 5156,
        title: 'Applied machine learning'
    },
    {
        prefix: 'ITCS',
        id: 5160,
        title: 'Database systems'
    }
];

//return course that matches the id
function findById(id) {
    return courses.find(course => course.id === id);
}

//To do: implement save(course)
function save(course) {
    //Pushes new course to the end of the array.
    //Could also use courses.splice(courses.length, 0, course), but I'm not sure if that's ever "better" than push
    courses.push(course);
}


//To do: implement findByPrefix(prefix)
function findByPrefix(prefix) {
    //Use filter to return a new array where only those of the conditions are met
    return courses.filter(course => course.prefix === prefix);
}

//To do: implement updateById(id, course)
function updateById(id, course) {
    //if else statement that finds if there is a valid course.id and updates it and returns true if so
    if (courses.find(course => course.id === id)) {
        courses[courses.findIndex(course => course.id === id)] = course;
        return true;
    } else { //Return false otherwise
        return false;        
    }
}

//To do: implement removeById(id)
function removeById(id) {
    //ifelse statement that finds if there is a valid course.id and removes it and returns true if so
    if (courses.find(course => course.id === id)) {
        courses.splice(courses.findIndex(course => course.id === id), 1);
        return true;
    } else { //Return false otherwise
        return false;        
    }
}



//To do: uncommet the following testing code when you are ready to test your functions

save({ prefix: 'ITIS', id: 5250, title: 'Computer forensics' });
save({ prefix: 'ITIS', id: 6220, title: 'Data privacy' });
save({ prefix: 'ITIS', id: 6420, title: 'Usable security and privacy' });
console.log(courses);
console.log(findById(5166));
console.log(findByPrefix('ITIS'));
console.log(removeById(6000));
console.log(updateById(6000));
console.log(updateById(5166, {
    prefix: 'ITIS',
    id: 5166,
    title: 'Network-based app development'
}, ));
console.log(removeById(6420));
console.log(courses);