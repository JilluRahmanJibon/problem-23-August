//--------------------- practice problem: 1----------------------
// problem 1-2
const arrayFunction = (a, b, c) => a + b + c;
const array = arrayFunction(10, 20, 30)
// console.log(array);

// problem 1-2
const threeLine = `
I am a web developer .
I love to code.
I love to eat biriyani.
`
// console.log(threeLine);


// problem 1-3
const arrayFunction2 = (a, b = 0) => a + b;
const array2 = arrayFunction2(50)
// console.log(array2);


// ------------------------------------Practice Problem : 2 ---------------------------------

const friend = (arr) => {
    let result = []
    for (const friend of arr) {
        if (friend.length % 2 === 0) {
            // console.log(friend);
            result.push(friend)
        }
    }
    return result
}

const friendArray = ['Abdul', 'Jillu', 'Quyaem', 'Jibon', 'Rashed', 'Shojib', 'Jhankar', 'jaihok']
const result = friend(friendArray)
// console.log(result);


// -------------------------practice problem: 3  -------------------------
const square = (sqr) => {
    let sumResult = 0
    for (const result of sqr) {
        const sum = Math.sqrt(result)
        // const toFixes = sum.toFixed(2)

        sumResult = sumResult + parseInt(sum)
        box = sumResult / sqr.length
    }

    return box
}
const squareArray = [20, 50, 40, 60, 85, 78];
const sumResult = square(squareArray)
console.log(sumResult);



// ----------------------------practice problem : 4 -------------------

const maxNumber = (num1, num2) => {

    const total = [...num1, ...num2]
    const maxNumber = Math.max(...total)
    return maxNumber
}

const maxArray1 = [50, 90, 65, 54, 75, 35]
const maxArray2 = [58, 96, 87, 85, 87, 48, 75]
const maxNumResult = maxNumber(maxArray1, maxArray2)
console.log(maxNumResult);