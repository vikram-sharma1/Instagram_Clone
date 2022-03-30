import React from "react";


const CreatePost = () => {
    return (
        <div className="card createPostBoxV">
            <input type="text" placeholder="Title" />
            <input type="text" placeholder="Content" />
            <div class="file-field input-field">
                <div class="btn #64b5f6 blue darken-1">
                    <span>Upload Pic</span>
                    <input type="file" />
                </div>
                <div class="file-path-wrapper">
                    <input class="file-path validate" type="text" placeholder="Upload Image" />
                </div>
            </div>
            <button class="btn waves-effect waves-light #64b5f6 blue darken-1" type="submit">Submit
            </button>
        </div>
    )
}

export {CreatePost}