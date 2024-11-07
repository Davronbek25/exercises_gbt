/*
1)
Create a function to determine if a given integer is prime and, if not, return the list of its prime factors.
*/
function primeOrFactors(num){

    let isPrime = true

    for(let i = 2; i < Math.sqrt(num); i++){
        let residual = num % 2
        if(residual == 0) isPrime = false
    }

    if(!isPrime){
        console.log('hey')
    }
}

function primeOrFactors(n) {
    if (n < 2) return "Number must be greater than 1"; // Only consider numbers greater than 1

    // Function to check if a number is prime
    function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false; // Not prime if divisible
        }
        return true; // Is prime
    }

    // If the number is prime
    if (isPrime(n)) {
        return `${n} is a prime number.`;
    } else {
        // If not prime, find the prime factors
        const primeFactors = [];
        for (let i = 2; i <= n; i++) {
            while (n % i === 0) { // Check for divisibility
                primeFactors.push(i); // Push the prime factor
                n /= i; // Reduce n
            }
        }
        return `Prime factors: ${primeFactors.join(', ')}`;
    }
}

// Test the function
// console.log(primeOrFactors(28)); // Example usage
// console.log(primeOrFactors(17)); // Example usage

// 2)
// Create a function that accepts an array of numbers and returns the maximum difference between any two elements.
const maxDifference = (arr) => {
    let big = 0
    let small = arr[0]
    let i = 0

    while(i < arr.length) {
        if(arr[i] > big) {
            big = arr[i]
        } 
        if(arr[i] < small) {
            small = arr[i]
        }
        i += 1
    }

    let diff = big - small 
    return diff
}

// console.log(maxDifference([10, 3, 5, 1, 25]))
/*
3)
Create a function that checks if a given string is a palindrome, ignoring spaces, punctuation, and case sensitivity.
*/
const isPalindrome = (str) => {
    let newStr = ''
    str.toLowerCase().split('').map(s => {
        if(s != ' ' && s != ','){
        newStr += s
        }
    })
    let reversedString = ''
    for (let i = 1; i <= newStr.split('').length; i++) {
        reversedString += newStr.split('')[newStr.split('').length - i]
    }
    if(newStr == reversedString) return true
    else return false
}

console.log(isPalindrome("A man, a plan, a canal, Panama"))

/*
4)
Create a function to return an array of unique permutations of a given string.
*/

// console.log(getPermutations("abc"))

/*
5)
Create a function that, given an array of numbers, returns a new array where each element is the product of all other elements except itself.
*/

// console.log(productOfOthers([1, 2, 3, 4]))

/*
6)
Create a function to evaluate a mathematical expression given as a string and return the result.
Examples: "3 + 5 * (2 - 8)" should return -13.
*/

// console.log(evaluateExpression("3 + 5 * (2 - 8)"))

/*
7)
Create a function to find the longest common subsequence between two strings.
*/

// console.log(longestCommonSubsequence("abcdxyz", "xyzabcd"))

/*
8)
Create a function to return the n-th Fibonacci number using memoization to improve efficiency.
*/

// console.log(fibonacci(30))

/*
9)
Create a function to find all pairs in an array that sum up to a given target. Ensure no duplicates.
*/

// console.log(findPairs([1, 3, 2, 2, 4, 3, 5], 6))

/*
10)
Create a function that returns all possible combinations of elements from an array that add up to a given target.
*/

// console.log(combinationSum([2, 3, 5], 8))

/*
11)
Create a function to find the first non-repeating character in a string and return its index. If all characters repeat, return -1.
*/

// console.log(firstNonRepeating("swiss"))

/*
12)
Create a function to determine the minimum number of operations needed to make all elements of an array equal. Allowed operations: increment or decrement by 1.
*/

// console.log(minOperations([1, 2, 3, 4]))

/*
13)
Create a function to implement basic string compression using counts of repeated characters, e.g., "aabcccccaaa" becomes "a2b1c5a3". If the compressed string is longer, return the original string.
*/

// console.log(stringCompress("aabcccccaaa"))

/*
14)
Create a function that checks if an array can be partitioned into two subsets with equal sum.
*/

// console.log(canPartition([1, 5, 11, 5]))

/*
15)
Create a function to determine if a given string can be rearranged into a palindrome.
*/

// console.log(canFormPalindrome("civic"))

/*
16)
Create a function to convert a given integer to its equivalent string representation in any base (2 through 36).
*/

// console.log(convertBase(255, 16))

/*
17)
Create a function to find the smallest missing positive integer in an unsorted array of integers without using sorting or extra space.
*/

// console.log(smallestMissingPositive([3, 4, -1, 1]))

/*
18)
Create a function to check if a given string has balanced parentheses, brackets, and braces.
*/

// console.log(isBalanced("({[]})"))

/*
19)
Create a function to flatten a nested array structure of arbitrary depth into a single-level array.
*/

// console.log(flatten([1, [2, [3, [4]], 5]]))

/*
20)
Create a function that takes a list of words and returns the longest compound word (a word that is made up of two or more smaller words from the list).
*/

// console.log(longestCompoundWord(["cat", "cats", "catsdogcats", "dog", "dogcatsdog", "hippopotamuses", "rat", "ratcatdogcat"]))

