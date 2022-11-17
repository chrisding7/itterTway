import React, {useState} from 'react';
import { FormProvider } from 'react-hook-form';
import Post from './Post';

function Home () {
    const [posts, setPosts] = useState([])

    
    const [formData, setFormData] = useState("")



    function pigLatinize(string){
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
        console.log(newString)
        return newString
    
    }
    

    function handleChange(e){
        const formText = e.target.value
        setFormData(formText)

    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/posts", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({
                user_id: "7",
                text: formData,
                text_translated: pigLatinize(formData)
            })
        })
        .then(res => res.json())
        .then(formData => console.log(formData))
        .then(setFormData(""))
    }
            
    
            

    return (
        <div>
            <h1>Home</h1>
            <form className="post-form">
                <textarea type ="text" placeholder="Compose Tweet..." maxLength={256} className="post-input" onChange={handleChange} value={formData}></textarea>
                <button className="post-submit-btn" onClick={handleSubmit}>Post</button>
            </form>
            <div className="post-container">
                <h2 className="post-display-name">Name</h2>
                <h4 className="post-username">@username</h4>
                <p className="post-content">Content</p>
            </div>
        </div>
    )
}

export default Home