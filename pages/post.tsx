import { CognitoUser } from "@aws-amplify/auth";
import "@aws-amplify/ui-react/styles.css";
import { API, Auth, graphqlOperation } from "aws-amplify";
import type { NextPage } from "next";
import { useState } from "react";
import { CreatePostInput, PostStatus } from "../src/API";
import { createPost } from "../src/graphql/mutations";

const Post: NextPage = () => {
  const [content, setContent] = useState<string>("");

  const handleCreatePost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = (await Auth.currentAuthenticatedUser()) as CognitoUser;

    if (!content) return;

    const data: CreatePostInput = {
      content: content,
      owner: user.getUsername(),
      status: PostStatus.published,
    };

    try {
      await API.graphql(graphqlOperation(createPost, { input: data }));
      setContent("");
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <>
      <form className="add-todo-form" onSubmit={handleCreatePost}>
        <input
          value={content}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setContent(e.target.value);
          }}
        />
        <button type="submit">Post</button>
      </form>
    </>
  );
};

export default Post;
