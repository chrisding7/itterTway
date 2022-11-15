import React, {useState} from 'react';

function Home () {
    const [posts, setPosts] = useState([])

    function handleSubmit(e) {
        // post request for Post
    }

    return (
        <div>
            <h1>Home</h1>
            <form className="post-form">
                <textarea type ="text" placeholder="Compose Tweet..." maxlength={256} className="post-input"></textarea>
                <button className="post-submit-btn" onSubmit={handleSubmit}>Post</button>
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