/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      content
      owner
      image
      status
      comments {
        items {
          id
          postId
          content
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      content
      owner
      image
      status
      comments {
        items {
          id
          postId
          content
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      content
      owner
      image
      status
      comments {
        items {
          id
          postId
          content
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      postId
      content
      owner
      post {
        id
        content
        owner
        image
        status
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      postId
      content
      owner
      post {
        id
        content
        owner
        image
        status
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      postId
      content
      owner
      post {
        id
        content
        owner
        image
        status
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createProcessLock = /* GraphQL */ `
  mutation CreateProcessLock(
    $input: CreateProcessLockInput!
    $condition: ModelProcessLockConditionInput
  ) {
    createProcessLock(input: $input, condition: $condition) {
      processType
      startDateTime
      createdAt
      updatedAt
    }
  }
`;
export const updateProcessLock = /* GraphQL */ `
  mutation UpdateProcessLock(
    $input: UpdateProcessLockInput!
    $condition: ModelProcessLockConditionInput
  ) {
    updateProcessLock(input: $input, condition: $condition) {
      processType
      startDateTime
      createdAt
      updatedAt
    }
  }
`;
export const deleteProcessLock = /* GraphQL */ `
  mutation DeleteProcessLock(
    $input: DeleteProcessLockInput!
    $condition: ModelProcessLockConditionInput
  ) {
    deleteProcessLock(input: $input, condition: $condition) {
      processType
      startDateTime
      createdAt
      updatedAt
    }
  }
`;
export const commonValidator = /* GraphQL */ `
  mutation CommonValidator($content: String!) {
    commonValidator(content: $content)
  }
`;
