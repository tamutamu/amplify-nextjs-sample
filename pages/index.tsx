import type { NextPage } from "next";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useRouter } from "next/dist/client/router";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <Authenticator>
      {({ signOut, user }) => {
        router.push("/post");
      }}
    </Authenticator>
  );
};

export default Home;
