import { useContext, useRef } from "react";

import {PostList} from "../store/post-list-store";

const CreatePost = () => {

  const {addPost} = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);
  };

  return (
    <form className="create-post" onSubmit={handleSubmit} >

      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your User Id here
        </label>
        <input
          placeholder="Your User Id"
          type="text"
          className="form-control"
          ref={userIdElement}
          id="userId"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          placeholder="How are you feeling today?"
          type="text"
          className="form-control"
          ref={postTitleElement}
          id="title"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          placeholder="Tell us more about it"
          type="text"
          rows='4'
          className="form-control"
          ref={postBodyElement}
          id="body"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Post Content
        </label>
        <input
          placeholder="How many people reacted to this post?"
          type="text"
          className="form-control"
          ref={reactionsElement}
          id="reactions"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          placeholder="Please Enter Tags using space"
          type="text"
          className="form-control"
          ref={tagsElement}
          id="tags"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
export default CreatePost;
