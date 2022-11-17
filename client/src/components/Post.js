function Post({user, text, textTran}){

console.log(user)
console.log(text)
console.log(textTran)

return(
    <div>
    <h2 className="displayName">{user["display_name"]}<span className="username"> @{user["username"]}</span></h2>
    <p>{textTran}</p>
    </div>
)
}
export default Post