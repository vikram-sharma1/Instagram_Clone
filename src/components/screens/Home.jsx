
const Home = () => {
    return (
        <div className="home">
            <div className="card home-cardV">
                <h3>Demo name</h3>
                <div>
                    <img src="https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FydG9vbiUyMGltYWdlc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" alt="Home Image" />
                </div>  
                <div>
                <i className="material-icons">favorite_border</i>
                    <h5>Title</h5>
                    <p>This is Amazing Post</p>
                    <input type="text" placeholder="Add Coment" />
                </div>  
            </div>
            <div className="card home-cardV">
                <h3>Demo name</h3>
                <div>
                    <img src="https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FydG9vbiUyMGltYWdlc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" alt="Home Image" />
                </div>  
                <div>
                <i className="material-icons">favorite_border</i>
                    <h5>Title</h5>
                    <p>This is Amazing Post</p>
                    <input type="text" placeholder="Add Coment" />
                </div>  
            </div>
        </div>
    )
}

export {Home}