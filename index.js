



// let arr = Object.entries(collection)
// if (typeof collection === "object")



// function myEach(collection, callback){


// }

// if (typeof collection === "object"){
//     let arr = Object.entries(collection)
//     console.log("pizza", arr[i], callbackAlert)
//     return collection
// }
// else if (typeof collection != "object") {
//  console.log("pasta", collection[i], callbackAlert)


// }

// collection.value
// if (typeof collection === "object"){
//     const objNewArray = []
//     for (const element in collection){
//         objNewArray.push(element.value)
//         console.log(callbackAlert(objNewArray[element]))
//     }
// }




const myEach = (collection, callbackAlert) => {
    if (typeof collection === "object"){
        const objNewArray = Object.values(collection)
        console.log(objNewArray)
      
      for (let j=0; j < objNewArray.length; j++){
        
        console.log("obj item being alerted on", objNewArray[j])
        callbackAlert(objNewArray[j])
        
      
        }
        // return objNewArray
    
    }
    else if (typeof collection != "object"){
    for (let i =0; i < collection.length; i++){

        console.log("plain collection w/i", (collection[i]))
        callbackAlert(collection[i])
        
    }}
    return collection
}



function myMap(collection, callback){

    if (Array.isArray(collection)){
      console.log("I'm an array")

      const newArray = [];

      for (let i = 0; i < collection.length; i++){
       
        newArray.push(callback(collection[i]))
      }
      console.log(newArray)
      return newArray
} else {
 console.log("I'm an object")
 const objNewArray = Object.values(collection)

 const modObjArray = []

 for (let j = 0; j < objNewArray.length; j++){
       
    modObjArray.push(callback(objNewArray[j]))
  }
  console.log(modObjArray)
  return modObjArray
} }

myMap(collection)



function myReduce(collection, callback, ...acc){
    
    let arr = Object.values(collection)
    let newAcc;
    let i;
    

    if(acc.length > 0 ){
        newAcc = acc[0]
        i=0
    } else {
        newAcc = arr[0]
        i=1
    }

    for (i; i <arr.length; i++){
        newAcc = callback(newAcc, arr[i], collection)

       
    }
    return newAcc

}








function myFind(collection, predicate){

    let arr = Object.values(collection)

    for (let i =0; i <arr.length; i++) {

        console.log(arr[i])
        if (predicate(arr[i])=== true) {
            
        console.log(`${arr[i]} was found!`)
            return arr[i]
        }
    }
    
}




function myFilter(collection, predicate){

    let arr = Object.values(collection)

    const matchArr = []

    for (let i =0; i <arr.length; i++) {

        console.log(arr[i])
        if (predicate(arr[i])=== true) {
            console.log("Value added!")
            matchArr.push(arr[i])
        }
      
    }
    return matchArr
    
}



function mySize(collection){

    let arr = Object.values(collection)


    console.log(arr.length)
    return arr.length
    
}

function myFirst (array, n){

    const newArr = []

   if (n === undefined) return array[0];
   for (var i =0; i <n; i ++){
    newArr.push(array[i]);
   }
   return newArr
      
    }

    function myLast(array, n){

        const newArr = []

        if (n === undefined) return array[array.length-1];
        for (var i =0; i <n; i ++){
         newArr.push(array[array.length -(n-i)])
         console.log(newArr)
          ;
        }
        return newArr

    }

    function myKeys(object){

        const keyList = []

        for (let key in object){
           
            keyList.push(key)
            
        }
        console.log("keyList", keyList)
        return keyList

    }

    function myValues(object){

        const valueList = []

        for (let key in object){
           
            valueList.push(object[key])
            
        }
        console.log("valueList", valueList)
        return valueList

    }
