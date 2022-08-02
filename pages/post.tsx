import { CognitoUser } from "@aws-amplify/auth";
import "@aws-amplify/ui-react/styles.css";
import { API, Auth, graphqlOperation } from "aws-amplify";
import type { NextPage } from "next";
import { useState } from "react";
import { CreatePostInput, PostStatus } from "../src/API";
import { createPost } from "../src/graphql/mutations";

const Post: NextPage = () => {
  const [content, setContent] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleCreatePost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setMessage("更新中");

    const user = (await Auth.currentAuthenticatedUser()) as CognitoUser;

    if (!content) return;

    const data: CreatePostInput = {
      content: content,
      owner: user.getUsername(),
      status: PostStatus.published,
    };

    try {
      const ret = await fetch("/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      //   const ret = await API.graphql(
      //     graphqlOperation(createPost, { input: data })
      //   );

      console.log(ret);

      setContent("");
      setMessage("OK");
    } catch (err: any) {
      console.log(err);
      setMessage(err.errors[0].message);
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
      <div>{message}</div>
    </>
  );
};

export default Post;
