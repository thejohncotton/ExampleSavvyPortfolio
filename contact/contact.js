// Generate html content from an array using forEach.

let contactArray = ["John Cotton", "555-5555", "email@example.com",]
contactArray[3] = "A new Item"
contactArray[4] = "johncotton.us"

// function addContent(array){
// console.log(array)
// $("#contact-list").append("<li>" + array + "</li>");
// }
//
// contactArray.forEach(addContent)
// Refactor to use an Object and For In loop.

let contactObject = {
  "name" : {
          "firstName" : "John",
          "lastName" : "Cotton"
            },
  "email" : "john@johncotton.us",
}
contactObject["twitter"] = "@thejohncotton"
//contactObject["quote"] = "johncotton.us is my website."
contactObject.quote = [
    "Prepare to meet thy doom",
    "Nobody expects Professor Chaos",
    "Bow before the power of the DARK SIDE"
]


// var sayingOfTheDay = "quote";
// console.log(contactObject[sayingOfTheDay])

contactObject.getName = function(){
    return contactObject.name //is there a better way to do this?
}
// console.log(contactObject.getName())


var elementLister = function( contactElement ){
  var listString = "<li>" + contactElement + "</li>";
  if (typeof contactElement === "function"){
    console.log("don't want to list functions")
  } else if (typeof contactElement === "array"){
    listString = "<ol>";
    console.log("3");

    contactElement.forEach( function( element ){
      listString += "<li>" + element + "</li>";
    });

    listString += "</ol>";
  } else if (typeof contactElement === "object"){
    listString = "<li>";
    console.log("ob2");

    for(var element in contactElement){
      listString += contactElement[element] + " ";
    }

    listString += "</li>";
  }

  $("#contact-list").append(listString);
};

for(var i in contactObject){
  elementLister( contactObject[i] );
  console.log("hello")
}
