import { CognitoUser } from "@aws-amplify/auth";
import "@aws-amplify/ui-react/styles.css";
import { API, Auth, graphqlOperation } from "aws-amplify";
import type { NextPage } from "next";
import { useState } from "react";
import { CreatePostInput, PostStatus } from "../src/API";
import {
  createPost,
  createProcessLock,
  deleteProcessLock,
} from "../src/graphql/mutations";

const Post: NextPage = () => {
  const [content, setContent] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleDelete = async () => {
    const ret = await API.graphql({
      query: deleteProcessLock,
      variables: {
        input: {
          processType: "LOCK_TEST_1",
        },
      },
      authMode: "API_KEY",
    });
  };

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
      //  通常の認証
      //   const ret = await fetch("/api/post", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(data),
      //   });

      // ロックのテスト
      //   const ret = await API.graphql({
      //     query: createProcessLock,
      //     variables: {
      //       input: {
      //         processType: "LOCK_TEST_1",
      //         startDateTime: new Date().toISOString(),
      //       },
      //     },
      //     authMode: "API_KEY",
      //   });

      // Lambda Atuh
      const ret = await API.graphql(
        graphqlOperation(
          createPost,
          { input: data, processId: "test1" },
          "custom-authorized"
        )
      );
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
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};

export default Post;
