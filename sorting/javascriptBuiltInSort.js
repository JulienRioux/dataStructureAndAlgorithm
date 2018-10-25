// ================================
//    Javascript Built in sort
// ================================

// Sort numbers
let nums = [4,3,6,8,3,8,1,9,10,13];
nums.sort((num1, num2) => num1 - num2)

console.log(nums);

// sort by alphabetical
let lst = ["beth", "alice", "sol", "marguerite"];

lst.sort();
console.log(lst);

// sort by length
let lst2 = ["beth", "alice", "sol", "marguerite"];

lst2.sort((str1, str2) => str1.length - str2.length);
console.log(lst2);
