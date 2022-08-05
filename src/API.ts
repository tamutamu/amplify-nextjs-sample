/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePostInput = {
  id?: string | null,
  content: string,
  owner: string,
  image?: string | null,
  status: PostStatus,
  createdAt?: string | null,
};

export enum PostStatus {
  published = "published",
  unpublished = "unpublished",
}


export type ModelPostConditionInput = {
  content?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  image?: ModelStringInput | null,
  status?: ModelPostStatusInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelPostStatusInput = {
  eq?: PostStatus | null,
  ne?: PostStatus | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  content: string,
  owner: string,
  image?: string | null,
  status: PostStatus,
  comments?: ModelCommentConnection | null,
  createdAt?: string | null,
  updatedAt: string,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  postId: string,
  content: string,
  owner: string,
  post?: Post | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePostInput = {
  id: string,
  content?: string | null,
  owner?: string | null,
  image?: string | null,
  status?: PostStatus | null,
  createdAt?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  postId: string,
  content: string,
  owner: string,
};

export type ModelCommentConditionInput = {
  postId?: ModelIDInput | null,
  content?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCommentInput = {
  id: string,
  postId?: string | null,
  content?: string | null,
  owner?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateProcessLockInput = {
  processType: string,
  startDateTime: string,
};

export type ModelProcessLockConditionInput = {
  startDateTime?: ModelStringInput | null,
  and?: Array< ModelProcessLockConditionInput | null > | null,
  or?: Array< ModelProcessLockConditionInput | null > | null,
  not?: ModelProcessLockConditionInput | null,
};

export type ProcessLock = {
  __typename: "ProcessLock",
  processType: string,
  startDateTime: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProcessLockInput = {
  processType: string,
  startDateTime?: string | null,
};

export type DeleteProcessLockInput = {
  processType: string,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  image?: ModelStringInput | null,
  status?: ModelPostStatusInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  postId?: ModelIDInput | null,
  content?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelProcessLockFilterInput = {
  processType?: ModelStringInput | null,
  startDateTime?: ModelStringInput | null,
  and?: Array< ModelProcessLockFilterInput | null > | null,
  or?: Array< ModelProcessLockFilterInput | null > | null,
  not?: ModelProcessLockFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelProcessLockConnection = {
  __typename: "ModelProcessLockConnection",
  items:  Array<ProcessLock | null >,
  nextToken?: string | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    content: string,
    owner: string,
    image?: string | null,
    status: PostStatus,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        postId: string,
        content: string,
        owner: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    owner: string,
    image?: string | null,
    status: PostStatus,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        postId: string,
        content: string,
        owner: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    owner: string,
    image?: string | null,
    status: PostStatus,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        postId: string,
        content: string,
        owner: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    postId: string,
    content: string,
    owner: string,
    post?:  {
      __typename: "Post",
      id: string,
      content: string,
      owner: string,
      image?: string | null,
      status: PostStatus,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    postId: string,
    content: string,
    owner: string,
    post?:  {
      __typename: "Post",
      id: string,
      content: string,
      owner: string,
      image?: string | null,
      status: PostStatus,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    postId: string,
    content: string,
    owner: string,
    post?:  {
      __typename: "Post",
      id: string,
      content: string,
      owner: string,
      image?: string | null,
      status: PostStatus,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProcessLockMutationVariables = {
  input: CreateProcessLockInput,
  condition?: ModelProcessLockConditionInput | null,
};

export type CreateProcessLockMutation = {
  createProcessLock?:  {
    __typename: "ProcessLock",
    processType: string,
    startDateTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProcessLockMutationVariables = {
  input: UpdateProcessLockInput,
  condition?: ModelProcessLockConditionInput | null,
};

export type UpdateProcessLockMutation = {
  updateProcessLock?:  {
    __typename: "ProcessLock",
    processType: string,
    startDateTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProcessLockMutationVariables = {
  input: DeleteProcessLockInput,
  condition?: ModelProcessLockConditionInput | null,
};

export type DeleteProcessLockMutation = {
  deleteProcessLock?:  {
    __typename: "ProcessLock",
    processType: string,
    startDateTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CommonValidatorMutationVariables = {
  content: string,
};

export type CommonValidatorMutation = {
  commonValidator?: string | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    content: string,
    owner: string,
    image?: string | null,
    status: PostStatus,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        postId: string,
        content: string,
        owner: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      content: string,
      owner: string,
      image?: string | null,
      status: PostStatus,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    postId: string,
    content: string,
    owner: string,
    post?:  {
      __typename: "Post",
      id: string,
      content: string,
      owner: string,
      image?: string | null,
      status: PostStatus,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      postId: string,
      content: string,
      owner: string,
      post?:  {
        __typename: "Post",
        id: string,
        content: string,
        owner: string,
        image?: string | null,
        status: PostStatus,
        createdAt?: string | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProcessLockQueryVariables = {
  processType: string,
};

export type GetProcessLockQuery = {
  getProcessLock?:  {
    __typename: "ProcessLock",
    processType: string,
    startDateTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProcessLocksQueryVariables = {
  processType?: string | null,
  filter?: ModelProcessLockFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListProcessLocksQuery = {
  listProcessLocks?:  {
    __typename: "ModelProcessLockConnection",
    items:  Array< {
      __typename: "ProcessLock",
      processType: string,
      startDateTime: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    owner: string,
    image?: string | null,
    status: PostStatus,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        postId: string,
        content: string,
        owner: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    owner: string,
    image?: string | null,
    status: PostStatus,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        postId: string,
        content: string,
        owner: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    owner: string,
    image?: string | null,
    status: PostStatus,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        postId: string,
        content: string,
        owner: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    postId: string,
    content: string,
    owner: string,
    post?:  {
      __typename: "Post",
      id: string,
      content: string,
      owner: string,
      image?: string | null,
      status: PostStatus,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    postId: string,
    content: string,
    owner: string,
    post?:  {
      __typename: "Post",
      id: string,
      content: string,
      owner: string,
      image?: string | null,
      status: PostStatus,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    postId: string,
    content: string,
    owner: string,
    post?:  {
      __typename: "Post",
      id: string,
      content: string,
      owner: string,
      image?: string | null,
      status: PostStatus,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProcessLockSubscription = {
  onCreateProcessLock?:  {
    __typename: "ProcessLock",
    processType: string,
    startDateTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProcessLockSubscription = {
  onUpdateProcessLock?:  {
    __typename: "ProcessLock",
    processType: string,
    startDateTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProcessLockSubscription = {
  onDeleteProcessLock?:  {
    __typename: "ProcessLock",
    processType: string,
    startDateTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
