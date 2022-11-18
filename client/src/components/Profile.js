import {useEffect, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom'
import Post from "./Post"
import Comment from "./Comment"

function Profile ({ user, setUser, bio, setBio}) {
    
    // sets state for the current user, whether the page is done loading or not, and any errors
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState(false);
    const [editBio, setEditBio] = useState(false);
    const [allUserPosts, setAllUserPosts] = useState([])
    
    console.log(user)

    // establishes params in the client
    const params = useParams();
    const history = useHistory();

    function handleEditBio(e) {
        setEditBio(false);
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                bio: bio
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then(() => {
                    history.push("/profile")
                })
            } 
        });
    }

    // fetches user information, or error
    useEffect(() => {
        fetch(`/users/${user.id}`)
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    console.log(user)
                    setLoading(false)
                })
            } 
            else{
                res.json().then(data => setErrors(data.error))
            }
        })
    }, [])
    useEffect(() => {
        fetch(`/posts/`)
        .then(res => res.json())
        .then(data => {
            const filteredData = data.filter(post => post.user.id === user.id)
            setAllUserPosts(filteredData)
        })
    }, []);

    const RenderPosts = allUserPosts?.map((onePost) => {
        return(
            <Post
            key={onePost.id}
            user={onePost.user}
            text={onePost.text}
            textTran={onePost.text_translated}
            />
        )
    })

if(loading) return <h1>Loading</h1>
if(errors) return <h1>{errors}</h1>

    return (
        <div>
            <h1>Profile</h1>
            <h2>Display Name</h2>
            <p>{user["display_name"]}</p>
            <h2>User Name</h2>
            <p>{user.username}</p>
            <div className='bio-container'>
                <h2 className='bio-header'>Bio</h2>
                <button type="button" className='edit-btn' onClick={() => setEditBio(true)}>✎</button>
            </div>

            {editBio ? (
                <div>
                    <form onSubmit={handleEditBio}>
                        <input 
                            placeholder='Profile Bio'
                            type="text"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                        />
                    </form>
                </div>) : (
                <div>
                    <p>{bio}</p>
                </div>
            )}
            
            <div>
                <h1>Posts</h1>
                <div>
                    {RenderPosts}
                {/* <h1>Comments</h1>
                {user.comments.map(comment => <Comment key={comment.id} comment={comment}/>)} */}
                </div>
            </div>

            

        </div>
    )
}
// add name, username, bio, a list of their eetways
export default Profile