import React, {useState, useEffect} from 'react';
import Post from './Post';

function Home () {

    function handleSubmit(e) {
        // post request for Post
    }

    const [allPosts, setAllPosts] = useState([])

    useEffect(()=> {
        fetch('/posts')
        .then((res) => res.json())
        .then(data => {
            setAllPosts(data)
            console.log(data)
        })
    }, []);

    const RenderPosts = allPosts?.map((onePost) => {
        return(
            <Post
            key={onePost.id}
            user={onePost.user}
            text={onePost.text}
            textTran={onePost.text_translated}
            />
        )
    })

    return(
        <div>
            <h1>Home</h1>
            <form className="post-form">
                <textarea type ="text" placeholder="Compose Tweet..." maxLength={256} className="post-input"></textarea>
                <button className="post-submit-btn" onSubmit={handleSubmit}>Post</button>
            </form>
            <div className="post-container">
                {RenderPosts}
            </div>
            
        </div>

    )
    // return (
    //     <div>
    //         <h1>Home</h1>
    //         <form className="post-form">
    //             <textarea type ="text" placeholder="Compose Tweet..." maxLength={256} className="post-input"></textarea>
    //             <button className="post-submit-btn" onSubmit={handleSubmit}>Post</button>
    //         </form>
    //         <div className="post-container">
    //             <h2 className="post-display-name">Name</h2>
    //             <h4 className="post-username">@username</h4>
    //             <p className="post-content">Content</p>
    //         </div>
    //     </div>
    // )
}

export default Home