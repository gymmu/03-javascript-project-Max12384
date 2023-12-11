
export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e"){
    result.push("")}
    else if(currentElement === "E"){
    result.push("")}
    else {
      result.push(currentElement)
    }
  }
  return result.join("")
}

export function aufgabe02 (args) {
  const input = args
  const result = []
  
  for (let i = 0; i < input.length; i++) {
    let currentElement = input[i]
    currentElement = currentElement.toUpperCase()
    result.push(currentElement)
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
    } else if (currentElement === "E") {
      count++
  }
}
  return count
}

export function aufgabe04 (args) {
  const input = args
  const result = []
  let count = 1
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " ") {
      count++
    
  }
}
  return count
}

export function aufgabe05 (args) {
  const input = args

  for (let i =0; i < input.length; i++) {
    const ascii = input[i].charCodeAt (0)

    if (65 <= ascii && ascii <= 90) {
      return true
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
    if (currentElement === "u" && currentElement1 === "n" && currentElement2 === "d"){
     return true 
    } else if (currentElement === "U" && currentElement1 === "n" && currentElement2 === "d") {
      return true
    }
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
    else {
      result.push(currentElement)
    }
  }
  return result.join("")
}


export function aufgabe09 (args) {
  const input = args
  const result = []
  if (input.length === 6){
    return true
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
      //Ist eine Ziffer
    }
    else if (65 <= ascii && ascii <= 70) {
      //ist A-F
    } else {
      return false
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
    }
  }
  return -1
}

export function aufgabe13 (args) {
  const input = args
  const result = []
  
  
  for (let i = input.length; i > 1; i--) {

    const currentElement = input[i]
    
    if (currentElement === "e"){
      return i
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
    if (number === 3){
      return i
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
  }
  else if (currentElement === "$" && count === 0) {
  result.push(",")
  count++
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
    return false
  }
}
  return true
}

export function aufgabe21 (args) {
  const input = args
  const result = []

  for (let i = input.length; i > -1; i--) {
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
    }
    else if (currentElement === "k") {
      count++
      result.push(currentElement)
    }
    else {
      result.push("_")
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
    } else if (i+2 > input.length) { 
      result.push(currentElement)
      result.push(currentElement1)
    }
    else {
      result.push(currentElement)
    }

  }
  return result.join("")
}

export function aufgabe24 (args) {
  const input = args
  const result = []
  

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const currentElement1 = input[0]
    const currentElement2 = input[input.length-1]

    if (i === 0) {
      result.push(currentElement2)
    } else if (i === input.length-1)
      result.push(currentElement1)
    else {
      result.push(currentElement)
    }
   }
  
  return result.join("")
}

export function aufgabe25 (args) {
  const input = args
  const result = []
  let count = 0
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const averageOdd = (input.length / 2) + .5
    const averageEven1 = (input.length / 2) 
    const averageEven2 = (input.length / 2) + 1
    
    if (i+1 == averageOdd && count === 0) {
      result.push("")
      count++
    } else if (i+1 == averageEven1) {
      result.push("")
      count++
    } else if (i+1 == averageEven2) {
      result.push("")
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
    const ascii1 = currentElement1.charCodeAt (0)
    
    if (number == 0 && ascii1 < ascii) {
      result.push(currentElement1)
      result.push(currentElement)
      number++
    }
      else if (number == 0 && ascii1 > ascii) {
      result.push(currentElement)
      result.push(currentElement1)
      number++
      }
      else if(number == 1) {
        number++
      }
      else {
        result.push(currentElement)
      }

  }
  
  return result.join("")
}

export function aufgabe27 (args) {
  const input = args
  const result = []
  
  return input.length
}