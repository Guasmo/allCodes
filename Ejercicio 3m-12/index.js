'use strict'

let nums = [3, 2, 4, 1];
let maxSum = 0;
let outPut = "Combinaciones:\n";
let sum 

for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        sum = nums[i] + nums[j];
        outPut += nums[i] + "+" + nums[j] + "=" + sum + "\n";
        if (sum > maxSum) {
            maxSum = sum;
        }
    }
}

outPut += "\nEl mayor es " + maxSum;
alert(outPut);