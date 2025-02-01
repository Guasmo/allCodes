'use strict'

let nums = [ 1, 2, 3, 4, 5, 6, 7, 8 ]

nums.unshift(0) && nums.push(9)  
alert(nums)

// Resultado: 0,1,2,3,4,5,6,7,8,9