// const seatingMember = [
//     ['ted', 'jessica', 'david'],
//     ['kate', 'nathan', 'cary', 'patrick'],
//     ['yuvil', 'lim', 'hong'],
//     ['tim', 'pete', 'patty'],
// ]

// for (let i = 0; i < seatingMember.length; i++) {
//     console.log(seatingMember[i]);
//     const row = seatingMember[i];
//     console.log(`Row ${i + 1}: `);
//     for (j = 0; j < row.length; j++) {
//         console.log(`    ${row[j]}`);
//     }
// }


// *********************guessing game***************************


// const targetNum = Math.floor(Math.random() * 10) + 1;
// let guess = prompt("Enter your guess");
// console.log(targetNum);

// while (guess !== targetNum) {
//     if (guess > targetNum) {
//         guess = prompt("Your number is too large");
//     } else {
//         guess = prompt("Your number is too small");
//     }
// }
// console.log("You've got it");



//******************* TODO LIST************************************ */

// New - Add a todo;
// list - List all todo;
// delete - remove specifi todo;
// quit - quit APP


// let commandList = 'new, list. delete, quit'
let request = prompt('Please enter a command request');
let todoList = [];
while (request !== 'quit') {
    if (request === 'new') {
        request = prompt('Please list the todo item');
        todoList.push(`${request}`);
        console.log(`${request} is added to the list successfully.`);
        console.log(`${todoList}`);
        request = prompt('Please enter a new request');
    }
    else if (request === 'list') {
        console.log(todoList);
        request = prompt('Please enter a new request');
    } else if (request === 'delete' && todoList !== '') {
        request = parseInt(prompt('Please enter the item index of the item to be deleted.'))
        todoList.splice(request, 1);
        console.log(`${todoList[request]} item has been removed from the list`);  // the item index needs to be worked out
        console.log(todoList);
        request = prompt('Please enter a new request');
    }
    else {
        request = prompt('Request unidentified, enter a valid request');
        console.log('Request unidentified');
    }

}


function returnDay(digit) {
    if (digit < 1 || digit > 7) {
        return null;
    } else {
        const dayArray = {
            1: 'Monday',
            2: 'Tuesday',
            3: 'Wednesday',
            4: 'Thursday',
            5: 'Friday',
            6: 'Saturday',
            7: 'Sunday'
        };
        let days = Object.values(dayArray);
        return days[digit - 1];
    }

}

function returnDay(digit) {
    if (digit < 31 || digit > 77) {
        return null;
    } else {
        const dayArray = {
            31: 'Monday',
            42: 'Tuesday',
            34: 'Wednesday',
            4: 'Thursday',
            15: 'Friday',
            68: 'Saturday',
            77: 'Sunday'
        };
        let digitList = Object.keys(dayArray);
        let days = Object.values(dayArray);
        let indexofDigit = digitList.indexOf(digit);
        // if (digitList.includes(digit)) {
        //     return days.indexOf(indexofDigit);
        // }
        return indexofDigit;
    }

}

