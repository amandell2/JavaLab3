//#1
let submissions = [
    {name: 'Jane', score: 95, date: '2020-01-24', passed: true},
    {name: 'Joe', score: 77, date: '2018-05-14', passed: true},
    {name: 'Jack', score: 59, date: '2019-07-05', passed: false},
    {name: 'Jill', score: 88, date: '2020-04-22', passed: true}
];
console.table(submissions); 
//DONE

//#2
function addSubmission(array, newName, newScore, newDate){
    array.push(
        {name: newName, score: newScore, date: newDate, passed: newScore>=60}    
        );
};
//addSubmission(submissions, 'Amanda', 55, '2022-01-05');
//console.log(submissions); 
//DONE

//#3
function deleteSubmissionByIndex(array, index){
    array.splice(index, 1);
};
//deleteSubmissionByIndex(submissions, 3);
//console.log(submissions); 
//DONE

//#4
function deleteSubmissionByName(array, name){
    //Write function that needs to be passed through the findIndex method below
    const pos = array.findIndex(data => data.name === name);
    array.splice(pos, 1);
};

//deleteSubmissionByName(submissions, 'Amanda');
//console.log(submissions); 
//DONE

//#5
function editSubmission(array, index, score){
    //Select score at the given index, change it to the new score given, change "passed" element using conditional
    //passed: newScore>=60  
    array[index].score = score;
    if(score >= 60){
        array[index].passed = true
    };
};
//editSubmission(submissions, 2, 75);
//console.log(submissions);
//DONE

//#6
function findSubmissionByName(array, name){
    return array.find(data => data.name === name);
    //Use find method to return the object in the array with the given name
};
//console.log(findSubmissionByName(submissions, 'Jane')); 
//DONE

//#7
//use the 'forEach' method to loop through array and return the object with the lowest score
function findLowestScore(array){
    let lowestScore = array[0];
    array.forEach((student) => {
            if(student.score < lowestScore.score){
                lowestScore = student;
            }
        })
    return lowestScore; 
};
//console.log(findLowestScore(submissions)); 
//DONE

//#8
function findAverageScore(array){
    //Use a "for...of" loop to return the average quiz score
    let sum = 0;
    for(const student of array){
        sum += student.score;
        }
        const average = sum / array.length;
        return average;
    };
//console.log(findAverageScore(submissions));
//DONE

//#9
function filterPassing(array){
   //Use filter method to return a new array that returns only objects with passing scores
    return array.filter(item => item.passed === true);
};
//console.log(filterPassing(submissions));
//DONE

//#10
function filter90AndAbove(array){
    //Use filter method to return a new array that returns only objects with scores 90 or above
    //Lisa's tutorial
   const get90 = (student) => {
       return student.score >=90;
   };
   const filteredArray = array.filter(get90);
   return filteredArray;

   //My original attempt
    //return array.filter(item => item.score >=90);
};
console.log(filter90AndAbove(submissions)); 
//DONE