const nums = [];

for (let i = 1; i <= 100; i++) {
    nums.push(i);
}

function filter(nums, checkDiv) {
    const array = [];
    nums.forEach(value => {
        if (checkDiv(value)) {
            array.push(value);
        }
    })

    return array;
}

function checkDiv(value) {
    return value % 5 == 0;
}

function add() {
    const sum = filter(nums, checkDiv).reduce((accumulator, value) => {
        return accumulator + value;
    })

    return sum;
}

const sum = add();
console.log(sum);