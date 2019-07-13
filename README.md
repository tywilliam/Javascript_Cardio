## Longest Word Challenge
    - Longest word in a sentence.

  1. Use .match and .toLowerCase() to make all letters of the word [word] lower case the function accepts letters a-z and numbers 0-9
      (Does the word contain numbers?, Does the word has lowercase letters?)
    - Return an array of the matched and lowercased strings 
  
  2. Use .sort to sort the array from descending order. Return an array sorted in place.
    - Return an array of elements in descending UTF-16 order.
  
  3.  Use .filter loop if one word length equals to the sorted array first index ( holds the longest word ).
      ( The longest word )
      - Return an array of words that equals the length of the sorted array [0] index.
    
   Because the sort method returned an array of the words in a sentence in descending order, we grabbed the longest word.
   Now we must filter it to see if any other word in the sentence equals the longest word which is the first in the array of
   descending order.
   
   4. With the filtered array from .filter let's check if it contains a result
      before returning the value (longest word) and completing the challenge. 
      Check if there's more than one long word in a sentence.
      
## Chunk Array
  - Split an array into chunked arrays of a specific length.
  
  1.  Use const & let to create an empty array and a 0 index value.
  2. Use while loop continue the challenge if index is less than array length
  3. Push onto the empty array after slicing from the index to the index + the length
    Note: .slice works by slicing from an array not including the given value
      [1,2,3,4,5,6] .slice(0,1) => [1]. (It wouldn't return [1,2])
      [1,2,3,4,5,6] .slice(0,2) => [1,2]
      [1,2,3,4,5,6] .slice(0,3) => [1,2,3] (It wouldnt return [1,2,3,4])
      
## Flatten array
    Flatten a chunked array by conjoining them together
    this is easy
    1. Take input as arguments from an array 
    2. Loop through each index using .forEach and conjoining each array with .concat to an empty array.
