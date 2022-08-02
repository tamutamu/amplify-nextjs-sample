// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Amplify, graphqlOperation, withSSRContext } from "aws-amplify";
import type { NextApiRequest, NextApiResponse } from "next";
import { createPost } from "../../src/graphql/mutations";
import config from "../../src/aws-exports";
Amplify.configure({ ...config, ssr: true });

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { Auth, API } = withSSRContext({ req });
    const user = await Auth.currentAuthenticatedUser();
    console.log(user);
    const ret = await API.graphql(
      graphqlOperation(createPost, { input: req.body })
    );
    console.log(ret);
  } catch (err: any) {
    console.log(err);
  }
  res.status(200).json({ name: "John Doe" });
}
