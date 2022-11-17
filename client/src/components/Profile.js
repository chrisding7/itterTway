import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import Post from "./Post"
import Comment from "./Comment"

function Profile () {
    
    // sets state for the current user, whether the page is done loading or not, and any errors
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)

    // establishes params in the client
    const params = useParams()
    const {id} = params

    // fetches user information, or error
    useEffect(() => {
        fetch(`/users/7`)
        .then(res => {
            if(res.ok){
                res.json().then(user =>{
                    setUser(user)
                    console.log(user)
                    setLoading(false)
                })
            } 
            else{
                res.json().then(data => setErrors(data.error))

            }
        })
    }, [])

if(loading) return <h1>Loading</h1>
if(errors) return <h1>{errors}</h1>



    
    return (
        <div>
            <h1>Profile</h1>
            <h2>Display Name</h2>
            <p>{user["display_name"]}</p>
            <h2>User Name</h2>
            <p>{user.username}</p>
            <h2>Bio</h2>
            <p>{user["bio_translated"]}</p>
            <div>
                <h1>Posts</h1>
                <div>
                    {user.posts.map(post => <Post key={post.id} post={post}/>)}
                <h1>Comments</h1>
                {user.comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
                </div>
            </div>

            

        </div>
    )
}
// add name, username, bio, a list of their eetways
export default Profile