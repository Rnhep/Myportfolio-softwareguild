function countingCharacters(stringToCount){
    console.log (stringToCount + " has " + stringToCount.length + " chacracters.");
}

function countingCharacter2(stringToCount, characterToFind){
    var characterCount = 0;
    for (var characterPosition = 0; characterPosition < stringToCount.length; characterPosition++){
        if (stringToCount[characterPosition] == characterToFind){ 
            characterCount++;
        
    }
}
console.log("string to seach in: " + stringToCount);
console.log("character to find: " + characterToFind);
console.log("Number of time the character appears:" + characterCount);
}

function countingCharacter3(str, search){
    var count = 0;
    var numChars = search.lenght;

    var lastIndex = str.legnth - numChars;
    for (var index = 0; index <= lastIndex; index++){
        var current = str.substring(index, index + numChars);
        if (current == search){
            count++;
        }
    }
return count;
}
