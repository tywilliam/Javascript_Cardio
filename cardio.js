
// LONGEST WORD
 function longestWord(sen) {
     // Create filtered array.
     const wordarr = sen.toLowerCase().match(/[a-z0-9]*/g);
    //  STORED
    const sorted = wordarr.sort( (a,b) => b.length - a.length );
    /* Sort it based on if the word does equal
        to the sorted first index ( the sorted longest word in the array ) 
        
    */
        const longestwordarray = sorted.filter( word =>  word.length === sorted[0].length )
    // you see undefined if you didn't return it
    // Check if more than one array value 
    // because we just checked if the filter array 
    // has more than one single strictly else
    if(longestwordarray.length === 1) {
        return longestwordarray[0]
    } else {
        return longestwordarray;
    }
 }

 //  CHUNK ARRAY
 function chunkArray(arr, length)
 {
//      // Init
//      const chunkedarray = [];
//      let i = 0;
//      while  (i < arr.length) {
//          console.log(i);
//             chunkedarray.push(
//                 arr.slice(
//                     i , i + length
// )
//             );
//             i += length            
//         }
//         return chunkedarray;
        const chunkedArr = []
        arr.forEach( val => {
            const last = chunkedArr[chunkedArr.length - 1];
            // Check if last and if last length is equal to the chunk len
            if(!last || last.legnth === len) {
                chunkedArr.push([val]);
            } else {
                last.push(val);
            }
        });
        return chunkedArr;

    }
    
    // FLATTEN ARRAY
    function flattenArray(arrays) {
        // return arrays.reduce(function(a,b) {
            // return a.concat(b);
        // });
        // SOLUTION 2
        // return [].concat.apply([], (arrays);

        // SOLUTION 3
        // function add(a,b,c) {
        //     return a + b + c;
        // } 
        // const arr = [1,2,3];
        // console.log(add(...arr));
        // return [].concat(...arrays);
    }

    // ANAGRAM
    function isAnagram(str1, str2) {
        return formatStr(str1) === formatStr(str2);
    }
    function formatStr(str) {
        return str
            .replace(/[^\w]/g, '')
            .toLowerCase()
            .split('')
            // To sort it must be an array
            // Sort by UTF-16
            .sort()
            .join('')

    }
    // Challenge 5: Letter changes
    /* Change every leeter of the string to the one that follows it
            and capitalize the vowel*/

    function letterChanges(str) {
        // .replace filter it and match reg exp
        let newStr = str.toLowerCase().replace(/[a-z]/gi, char => {
            if(char === 'z' || char ==='Z') {
                return 'a';
            } else {
                return String.fromCharCode(char.charCodeAt() + 1)
            }
        });
        newStr = newStr.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase() )
        return newStr;
    }
    const output = letterChanges('Hello There')
    console.log(output);

