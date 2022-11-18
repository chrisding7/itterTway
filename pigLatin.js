const pigLatinize = (string) => {
    const stringArray = string.split(/\s*\b\s*/)
    console.log(stringArray)
    
    function isVowel(char){
        return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U' || false;
    }
    const newStringArray = stringArray.map(element => {
        if(element.match(/\W/)){
            console.log(`punctuation: ${element}`)
            return element
        }

        else if(isVowel(element[0])){
            console.log(`first position vowel: ${element}`)
            element = element.concat("way")
            console.log(element)
            return element


        }
        else if(isVowel(element[1]) && !isVowel(element[0])){
            console.log(`second position vowel: ${element}`)
            element = element.concat(element.at(0))
            element = element.replace(element.at(0), "")
            element = element.concat("ay")
            console.log(element)
            return element

        }
        else if(!isVowel(element[0]) && !isVowel(element[1])){
            console.log(`neither first or second position vowel: ${element}`)
            element = element.concat(element.at(0))
            element = element.concat(element.at(1))
            element = element.replace(element.at(0), "")
            element = element.replace(element.at(0), "")
            element = element.concat("ay")
            console.log(element)
            return element
        
        }

    });
    const newString = newStringArray.join(" ")
    newString.replace(" ,", ",")
    newString.replace(" .", ".")
    newString.replace(" :", ":")
    newString.replace(" '", "'")
    newString.replace(" ?", "?")
    console.log(newString)
    return newString

}

pigLatinize("I like 'to pet llamas' with? furry shawls.")