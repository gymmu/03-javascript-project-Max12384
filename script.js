


//I didn't use the AI for solving the problems. I did however use it to help autofill the notes.
export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    // As long as i is less than the length of the input the loop will repeat. 
    // For every loop, i increases by 1. 
    const currentElement = input[i]
    // This takes the input at position i, and stores it. 
    if (currentElement === "e"){
    result.push("")}
    // replaces all e's with " "
    else if(currentElement === "E"){
    result.push("")}
    // replaces all E's with " " 
    else {
      result.push(currentElement)
    // keeps all other characters
    }
  }
  return result.join("")
  //once the loop is finished, all characters will be joined together.
}

export function aufgabe02 (args) {
  const input = args
  const result = []
  
  for (let i = 0; i < input.length; i++) {
    let currentElement = input[i]
    currentElement = currentElement.toUpperCase()
    //capitalizes the current element.
    result.push(currentElement)
    //pushes the current element after being capitalized.
  }
  return result.join("")
}

export function aufgabe03 (args) {
  const input = args
  const result = []
  let count = 0
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      count++
      //if e is found, "count" increases by 1
    } else if (currentElement === "E") {
      count++
      //if E is found, "count" increases by 1
  }
}
  return count
}

export function aufgabe04 (args) {
  const input = args
  const result = []
  let count = 1
   //count starts at 1 as there is not an extra space for the first word.
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " ") {
      count++
    //If a space is found, "count" increases by 1.
    //This assumes every word is seperated by a space.
  }
}
  return count
}

export function aufgabe05 (args) {
  const input = args

  for (let i =0; i < input.length; i++) {
    const ascii = input[i].charCodeAt (0)
    //"ascii" is equal to the ASCII value of the current character
    if (65 <= ascii && ascii <= 90) {
      return true
      //If a capital letter is found, the code returns true"
    } 
  }
  return false
}


export function aufgabe06 (args) {
  const input = args

  for (let i =0; i < input.length; i++) {
    const ascii = input[i].charCodeAt (0)

   if (0 <= ascii && ascii <= 31){
    return true
    } else if (33 <= ascii && ascii <= 64){
      return true
    } else if (123 <= ascii){
    return true
    } else if (91 <= ascii && ascii <= 96)
    return true
    //This code includes all ASCII values except capital and lowercase letters. 
    //If the code finds an ascii value inside of these ranges, the code will stop and "true" will be returned

  }
  return false
}


export function aufgabe07(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const currentElement1 = input[i+1]
    const currentElement2 = input[i+2]
    //CurrentElement 1 and 2 are reading values one after and two after the current i value.
  
    if (currentElement === "u" && currentElement1 === "n" && currentElement2 === "d"){
     return true 
    } else if (currentElement === "U" && currentElement1 === "n" && currentElement2 === "d") {
      return true
    }
    //This checks if u, n, d are found sequentially. If found, the code will stop and return "true"
}
  return false
}


export function aufgabe08(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e"){
    result.push("3")}
    //Replaces all e's with 3's
    else {
      result.push(currentElement)
    }
    //Keeps all other characters
  }
  return result.join("")
}


export function aufgabe09 (args) {
  const input = args
  const result = []
  if (input.length === 6){
    return true
    //If the length of the input is 6, the code will return "true"
  }
  return false
}

export function aufgabe10 (args) {
  const input = args
  
  if(input.length !== 7 ) return false
  if (input[0] !== "#") return false

  for (let i =1; i < input.length; i++) {
    const currentElement = input [i]
    const ascii = currentElement.charCodeAt (0)

    if (48 <= ascii && ascii <= 57) {
      //Checks if the current character a number
    }
    else if (65 <= ascii && ascii <= 70) {
      //Checks if the current character is A-F
    } else {
      return false
      //If both checks above fail, "false" is returned
    }
    }
    return true
  }


export function aufgabe11 (args) {
  const input = args

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
  
  if (input.length === 1){
     return ascii
     //returns the ASCII value of the current character
  }
}
}

export function aufgabe12 (args) {
  const input = args
  const result = []
  
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e"){
      return i
    //Returns the value of i when e is found. "i" represents the position of the current character
    }
  }
  return -1
}

export function aufgabe13 (args) {
  const input = args
  const result = []
  
  
  for (let i = input.length; i > -1; i--) {
  //This code functions the same as the other loops, but it will work in reverse.
  //"i" will start at the length of the input and decrease by 1 for every loop
  //Once i reaches 0, the loop will end
    const currentElement = input[i]
    if (currentElement === "e"){
      return i
      //returns the value of i when when an "e" is found
    }
  }
  return -1
}

export function aufgabe14 (args) {
  const input = args
  const result = []
  let number = 0
  
  
  for (let i = 0; i < input.length; i++) {
   
    const currentElement = input[i]
    
    if (currentElement === "e"){
      number++
      //when an "e" is found, the value of "number" increases by 1
    if (number === 3){
      return i
      //when "number" reaches 3, the value of "i" is returned.
    }
  }
  }
  return -1
}



export function aufgabe15(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
    if (currentElement === " " && i !== input.length){
      return result.join("")
      //when a space is found, the code will stop and return the values up until that point. 
      //This assumes every word is seperated by a space.
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}

export function aufgabe16 (args) {
  const input = args
  const result = []
  let count = 0
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
  if (count === 0 && currentElement === "$" && i+2 > input.length) {
  result.push("")
  count++
  //If a "$" is found at the end of the input, this code will delete it.
  //If you add 2 to i, it will always be greater than the input length on the last value of the input.
  //Therefor, i+2 > input.length, will only be true when it reads the last value of the input.
  }
  else if (currentElement === "$" && count === 0) {
  result.push(",")
  count++
  //If a "$" is found, this code will replace it with a ",".
  //The count is then increased by 1 so that neither this code or the one before it will repeat.
  }
  else {
    result.push(currentElement)
  }
 
}
return result.join("")
}


export function aufgabe17 (args) {
  const input = args
  const result = []
  let count = 0
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
  if (currentElement === "$" && count === 1 && i !== input.length) {
  result.push("")
  result.push(",")
  count++
  }
  else {
    result.push(currentElement)
  }
 
}
return result.join("")
}

export function aufgabe19 (args) {
  const input = args
  const result = []
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement)
    result.push(currentElement)
    //When a character is detected, it will be added to the result twice.
  }
  return result.join("")
}

export function aufgabe20 (args) {
  const input = args
  const result = []
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const currentElement1 = input[i+1]
    if (currentElement === "." && currentElement1 !== " "){
      //This statement will be true if a space is not found after a ".".
    return false
  }
}
  return true
}

export function aufgabe21 (args) {
  const input = args
  const result = []

  for (let i = input.length; i > -1; i--) {
    //This reads the input backwards. See aufgabe13 for explanation.
    const currentElement = input[i]
    result.push(currentElement)
  }
  
  return result.join("")
}

export function aufgabe22 (args) {
  const input = args
  const result = []
  let count = 0
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (count === 1) {
      result.push(currentElement)
      //once the count is increased to 1, all values are returned like normal.
    } 
    else if (currentElement === "k") {
      count++
      result.push(currentElement)
      //when "k" is found, the count is increased to 1.
    }
    else {
      result.push("_")
      //if the count is not 1, all values are replaced with "_".
    }

  }
  return result.join("")
}

export function aufgabe23 (args) {
  const input = args
  const result = []
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const currentElement1 = input[0]
    
    if (count === 0) {
      count++
      result.push(currentElement)
      result.push(currentElement)
      //This doubles the first input.
    } else if (i+2 > input.length) { 
      result.push(currentElement)
      result.push(currentElement1)
      //This will return the last input as normal and then add the first input to the end.
    }
    else {
      result.push(currentElement)
    }

  }
  return result.join("")
}
//Unless I translated it wrong, I believe this code does what it's supposed to do.
//However, there is still a red message when checking on the website.
//It says "aa" should be equal to "aaa"
//However, if you double the first input and then add it to the end, "aa" should turn into "aaaa"

export function aufgabe24 (args) {
  const input = args
  const result = []
  

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const currentElement1 = input[0]
    //This is the first value of the input
    const currentElement2 = input[input.length-1]
    //This is the last value of the input

    if (i === 0) {
      result.push(currentElement2)
    } else if (i === input.length-1)
      result.push(currentElement1)
    else {
      result.push(currentElement)
    }
    //this code swaps the positions of the last and first value.
   }
  
  return result.join("")
}

export function aufgabe25 (args) {
  const input = args
  const result = []
  let count = 0
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //To find the median value, you must take the input length divided by two.
    const middleEven1 = (input.length / 2) 
    const middleEven2 = (input.length / 2) + 1
    //If the input length is even, it should yield two values
    const middleOdd = (input.length / 2) + .5 
    //If the input length is odd, it should yield one value.
    //When the input length is odd, the value will end in a .5
    //This code will increase the number by .5 to account for that
    
    if (i+1 == middleOdd && count === 0) {
      result.push("")
      count--
      //If the current value is "middleOdd", and the count is 0, the current value will be deleted.
    } else if (i+1 == middleEven1) {
      result.push("")
      count++
      //If current input value is equal to "middleEven1", it will delete it.
    } else if (i+1 == middleEven2 && count === 1) {
      result.push("")
      //Deletes the second value if the input length is even.
    }
     else {
      result.push(currentElement)
    }
  }
  return result.join("")
}

export function aufgabe26 (args) {
  const input = args
  const result = []
  let number = 0
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const currentElement1 = input[1]
    const ascii = currentElement.charCodeAt (0)
    //this will get the ascii code of the first value
    const ascii1 = currentElement1.charCodeAt (0)
    //this will get the ascii code of the second value

    
    if (number == 0 && ascii1 < ascii) {
      result.push(currentElement1)
      result.push(currentElement)
      number++
      //if the second Ascii value is less than the first, the second value will be returned first.
    }
      else if (number == 0 && ascii1 > ascii) {
      result.push(currentElement)
      result.push(currentElement1)
      number++
      //if the second ascii value is greater than the first, the first value will be returned first.
      }
      else if(number == 1) {
        number++
      //This will repeat the loop without pushing anything.
      }
      else {
        result.push(currentElement)
      }

  }
  
  return result.join("")
}

export function aufgabe27 (args) {
  const input = args
  let count = 0
  
  for (let i =0; i < input.length; i++) {
    const currentElement = input [i]
    const ascii = currentElement.charCodeAt (0)

    if (48 <= ascii && ascii <= 57) {
      //Checks if the current character a number
      count++
      //If it is a number, the count increases by 1. This is done in case of no input.
    } else {
      return false
      //If there is a non-number in the input, the code is stopped and false is returned.
    }
  }
  if (count > 0) {
    return true
  } else {
    return false
  }
}

export function aufgabe28 (args) {
  const input = args
  const result = []
  const result1 = []
  let count = 0
  let count2 = 0
  let count3 = 0
  
  for (let i =0; i < input.length; i++) {
    const currentElement = input [i]
    const ascii = currentElement.charCodeAt (0)

    if (48 <= ascii && ascii <= 57) {
      //Checks if the current character a number
      count++
      //If it is a number, the count increases by 1. This is done in case of no input.
    }else if (currentElement === " " && count2 === 0) {
      count2++
      //If the currentElement is a space, count2 will be increased by 1
      //If there are two spaces this code will not run
      }
    else {
      return "error"
      //If there is a non-number in the input, the code is stopped and false is returned.
    }
  }
  if (count === 0) {
    return "error"
  }



  //the code before this will make sure the input is formatted correctly
  for (let i = 0; i < input.length; i++) {
    const currentElement = input [i]
    

    if (currentElement === " "){
    count3++ 
    } else if (count3 === 1) {
      result1.push(currentElement)
    } else {
    result.push(currentElement)
    }
  }

  let add1 = result.join("")
  let add2 = result1.join("")
  let final = add3 + add4
  return final
  //almost finished, but I do not know how to add the two results.
}