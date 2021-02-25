import { handleActions, createAction } from "redux-actions";
import {
  dummyPostsCreator,
  dummyPostCreator,
  dummyMeCreator,
} from "../lib/util/dummyCreator";
import shortid from "shortid";
import { getMe } from "./user";

// initial state

const initialState = {
  post: null,
  temporalPostsLength: 0,
  studyPosts: [],
  projectPosts: [],
  forumPosts: [],
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  mainLoadPostsLoading: false,
  mainLoadPostsDone: false,
  mainLoadPostsError: null,
  writePostLoading: false,
  writePostDone: false,
  writePostError: null,
  postScrapLoading: false,
  postScrapDone: false,
  postScrapError: null,
  postUnScrapLoading: false,
  postUnScrapDone: false,
  postUnScrapError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  deleteCommentLoading: false,
  deleteCommentDone: false,
  deleteCommentError: null,
  loadForumPostsLoading: false,
  loadForumPostsDone: false,
  loadForumPostsError: null,
  deletePostLoading: false,
  deletePostDone: false,
  deletePostError: null,
  likeCommentLoading: false,
  likeCommentDone: false,
  likeCommentError: null,
  unLikeCommentLoading: false,
  unLikeCommentDone: false,
  unLikeCommentError: null,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unLikePostLoading: false,
  unLikePostDone: false,
  unLikePostError: null,
  // editPostLoading: false,
  // editPostDone: false,
  // editPostError: null,
  // searchPostsLoading: false,
  // searchPostsDone: false,
  // searchPostsError: null,
  // filterSearchLoading: false,
  // filterSearchDone: false,
  // filterSearchError: null,
};

// action type

export const INITIALIZE_POST = "post/INITIALIZE_POST";
export const INITIALIZE_POSTS = "post/INITIALIZE_POSTS";

export const LOAD_POST_REQUEST = "post/LOAD_POST_REQUEST";
export const LOAD_POST_SUCCESS = "post/LOAD_POST_SUCCESS";
export const LOAD_POST_FAILURE = "post/LOAD_POST_FAILURE";

export const LOAD_POSTS_REQUEST = "post/LOAD_POSTS_REQUEST";
export const LOAD_POSTS_SUCCESS = "post/LOAD_POSTS_SUCCESS";
export const LOAD_POSTS_FAILURE = "post/LOAD_POSTS_FAILURE";

export const MAIN_LOAD_POSTS_REQUEST = "post/MAIN_LOAD_POSTS_REQUEST";
export const MAIN_LOAD_POSTS_SUCCESS = "post/MAIN_LOAD_POSTS_SUCCESS";
export const MAIN_LOAD_POSTS_FAILURE = "post/MAIN_LOAD_POSTS_FAILURE";

export const WRITE_POST_REQUEST = "post/WRITE_POST_REQUEST";
export const WRITE_POST_SUCCESS = "post/WRITE_POST_SUCCESS";
export const WRITE_POST_FAILURE = "post/WRITE_POST_FAILURE";

export const POST_SCRAP_REQUEST = "post/POST_SCRAP_REQUEST";
export const POST_SCRAP_SUCCESS = "post/POST_SCRAP_SUCCESS";
export const POST_SCRAP_FAILURE = "post/POST_SCRAP_FAILURE";

export const POST_UNSCRAP_REQUEST = "post/POST_UNSCRAP_REQUEST";
export const POST_UNSCRAP_SUCCESS = "post/POST_UNSCRAP_SUCCESS";
export const POST_UNSCRAP_FAILURE = "post/POST_UNSCRAP_FAILURE";

export const ADD_COMMENT_REQUEST = "post/ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "post/ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "post/ADD_COMMENT_FAILURE";

export const DELETE_COMMENT_REQUEST = "post/DELETE_COMMENT_REQUEST";
export const DELETE_COMMENT_SUCCESS = "post/DELETE_COMMENT_SUCCESS";
export const DELETE_COMMENT_FAILURE = "post/DELETE_COMMENT_FAILURE";

export const LOAD_FORUM_POSTS_REQUEST = "post/LOAD_FORUM_POSTS_REQUEST";
export const LOAD_FORUM_POSTS_SUCCESS = "post/LOAD_FORUM_POSTS_SUCCESS";
export const LOAD_FORUM_POSTS_FAILURE = "post/LOAD_FORUM_POSTS_FAILURE";

export const DELETE_POST_REQUEST = "post/DELETE_POST_REQUEST";
export const DELETE_POST_SUCCESS = "post/DELETE_POST_SUCCESS";
export const DELETE_POST_FAILURE = "post/DELETE_POST_FAILURE";

export const LIKE_POST_REQUEST = "post/LIKE_POST_REQUEST";
export const LIKE_POST_SUCCESS = "post/LIKE_POST_SUCCESS";
export const LIKE_POST_FAILURE = "post/LIKE_POST_FAILURE";

export const UNLIKE_POST_REQUEST = "post/UNLIKE_POST_REQUEST";
export const UNLIKE_POST_SUCCESS = "post/UNLIKE_POST_SUCCESS";
export const UNLIKE_POST_FAILURE = "post/UNLIKE_POST_FAILURE";

export const LIKE_COMMENT_REQUEST = "post/LIKE_COMMENT_REQUEST";
export const LIKE_COMMENT_SUCCESS = "post/LIKE_COMMENT_SUCCESS";
export const LIKE_COMMENT_FAILURE = "post/LIKE_COMMENT_FAILURE";

export const UNLIKE_COMMENT_REQUEST = "post/UNLIKE_COMMENT_REQUEST";
export const UNLIKE_COMMENT_SUCCESS = "post/UNLIKE_COMMENT_SUCCESS";
export const UNLIKE_COMMENT_FAILURE = "post/UNLIKE_COMMENT_FAILURE";

// export const EDIT_POST_REQUEST = "post/EDIT_POST_REQUEST";
// export const EDIT_POST_SUCCESS = "post/EDIT_POST_SUCCESS";
// export const EDIT_POST_FAILURE = "post/EDIT_POST_FAILURE";

// export const SEARCH_POSTS_REQUEST = "post/SEARCH_POSTS_REQUEST";
// export const SEARCH_POSTS_SUCCESS = "post/SEARCH_POSTS_SUCCESS";
// export const SEARCH_POSTS_FAILURE = "post/SEARCH_POSTS_FAILURE";

// export const FILTER_SEARCH_REQUEST = "post/FILTER_SEARCH_REQUEST";
// export const FILTER_SEARCH_SUCCESS = "post/FILTER_SEARCH_SUCCESS";
// export const FILTER_SEARCH_FAILURE = "post/FILTER_SEARCH_FAILURE";

// action creator

export const initializePostAction = createAction(INITIALIZE_POST);
export const initializePostsAction = createAction(INITIALIZE_POSTS);

export const loadPostRequestAction = createAction(
  LOAD_POST_REQUEST,
  (data) => data, // type, id를 포함한 객체
);
export const loadPostsReqeustAction = createAction(
  LOAD_POSTS_REQUEST,
  (data) => data,
);

export const mainLoadPostsReqeustAction = createAction(MAIN_LOAD_POSTS_REQUEST);

export const writePostRequestAction = createAction(
  WRITE_POST_REQUEST,
  (data) => data, // saga에서 타입에 따라 분기해야함
);

export const postScrapRequestAction = createAction(
  POST_SCRAP_REQUEST,
  (data) => data,
);

export const postUnScrapRequestAction = createAction(
  POST_UNSCRAP_REQUEST,
  (data) => data,
);

export const addCommentRequestAction = createAction(
  ADD_COMMENT_REQUEST,
  (data) => data,
);

export const deleteCommentRequestAction = createAction(
  DELETE_COMMENT_REQUEST,
  (data) => data,
);

export const loadForumPostsRequestAction = createAction(
  LOAD_FORUM_POSTS_REQUEST,
  (data) => data,
);

export const deletePostRequestAction = createAction(
  DELETE_POST_REQUEST,
  (data) => data,
);

export const likePostRequestAction = createAction(
  LIKE_POST_REQUEST,
  (data) => data,
);

export const unLikePostRequestAction = createAction(
  UNLIKE_POST_REQUEST,
  (data) => data,
);

export const likeCommentRequestAction = createAction(
  LIKE_COMMENT_REQUEST,
  (data) => data,
);

export const unLikeCommentRequestAction = createAction(
  UNLIKE_COMMENT_REQUEST,
  (data) => data,
);

// export const editPostReqeustAction = createAction(
//   EDIT_POST_REQUEST,
//   (data) => data,
// );

// export const searchPostsRequestAction = createAction(
//   SEARCH_POSTS_REQUEST,
//   (data) => data,
// );

// export const filterSearchRequestAction = createAction(
//   FILTER_SEARCH_REQUEST,
//   (data) => data,
// );

// reducer

const postReducer = handleActions(
  {
    [INITIALIZE_POSTS]: (state, action) => ({
      ...state,
      studyPosts: [],
      projectPosts: [],
      forumPosts: [],
    }),
    [INITIALIZE_POST]: (state, action) => ({
      ...state,
      post: null,
    }),
    [LOAD_POST_REQUEST]: (state, action) => ({
      ...state,
      loadPostLoading: true,
      loadPostDone: false,
      loadPostError: null,
    }),
    [LOAD_POST_SUCCESS]: (state, action) => ({
      ...state,
      loadPostLoading: false,
      loadPostDone: true,
      loadPostError: null,
      post: action.post,
    }),
    [LOAD_POST_FAILURE]: (state, action) => ({
      ...state,
      loadPostLoading: false,
      loadPostDone: false,
      loadPostError: action.error,
    }),
    [LOAD_POSTS_REQUEST]: (state, action) => ({
      ...state,
      loadPostsLoading: true,
      loadPostsDone: false,
      loadPostsError: null,
    }),
    [LOAD_POSTS_SUCCESS]: (state, action) => ({
      ...state,
      loadPostsLoading: false,
      loadPostsDone: true,
      loadPostsError: null,
      temporalPostsLength: action.temporalPostsLength,
      [action.contentType + "Posts"]: state[
        action.contentType + "Posts"
      ].concat(action.data),
    }),
    [LOAD_POSTS_FAILURE]: (state, action) => ({
      ...state,
      loadPostsLoading: false,
      loadPostsDone: false,
      //loadPostsError: action.error,
    }),
    [MAIN_LOAD_POSTS_REQUEST]: (state, action) => ({
      ...state,
      mainLoadPostsLoading: true,
      mainLoadPostsDone: false,
      mainLoadPostsError: null,
    }),
    [MAIN_LOAD_POSTS_SUCCESS]: (state, action) => ({
      ...state,
      mainLoadPostsLoading: false,
      mainLoadPostsDone: true,
      mainLoadPostsError: null,
      studyPosts: action.study,
      projectPosts: action.project,
      forumPosts: action.forum,
      // studyPosts: [...dummyPostsCreator("study", 5), ...state.studyPosts],
      // projectPosts: [...dummyPostsCreator("project", 5), ...state.projectPosts],
      // forumPosts: [...dummyPostsCreator("forum", 8), ...state.forumPosts],
    }),
    [MAIN_LOAD_POSTS_FAILURE]: (state, action) => ({
      ...state,
      mainLoadPostsLoading: false,
      mainLoadPostsDone: false,
      mainLoadPostsError: action.error,
    }),
    [WRITE_POST_REQUEST]: (state, action) => ({
      ...state,
      writePostLoading: true,
      writePostDone: false,
      writePostError: null,
    }),
    [WRITE_POST_SUCCESS]: (state, action) => ({
      ...state,
      writePostLoading: false,
      writePostDone: true,
      writePostError: null,
    }),
    [WRITE_POST_FAILURE]: (state, action) => ({
      ...state,
      writePostLoading: false,
      writePostDone: false,
      writePostError: action.error,
    }),
    [POST_SCRAP_REQUEST]: (state, action) => ({
      ...state,
      postScrapLoading: true,
      postScrapDone: false,
      postScrapError: null,
    }),
    [POST_SCRAP_SUCCESS]: (state, action) => ({
      ...state,
      postScrapLoading: false,
      postScrapDone: true,
      postScrapError: null,
      post: {
        ...state.post,
        scraps: [...state.post.scraps].concat(action.scrap),
      },
    }),
    [POST_SCRAP_FAILURE]: (state, action) => ({
      ...state,
      postScrapLoading: false,
      postScrapDone: false,
      postScrapError: action.error,
    }),
    [POST_UNSCRAP_REQUEST]: (state, action) => ({
      ...state,
      postUnScrapLoading: true,
      postUnScrapDone: false,
      postUnScrapError: null,
    }),
    [POST_UNSCRAP_SUCCESS]: (state, action) => ({
      ...state,
      postUnScrapLoading: false,
      postUnScrapDone: true,
      postUnScrapError: null,
      post: {
        ...state.post,
        scraps: [...state.post.scraps].filter((v, i) => {
          if (v._id !== action.scrapId) {
            return { ...v };
          }
        }),
      },
    }),
    [POST_UNSCRAP_FAILURE]: (state, action) => ({
      ...state,
      postUnScrapLoading: false,
      postUnScrapDone: false,
      postUnScrapError: action.error,
    }),
    [ADD_COMMENT_REQUEST]: (state, action) => ({
      ...state,
      addCommentLoading: true,
      addCommentDone: false,
      addCommentError: null,
    }),
    [ADD_COMMENT_SUCCESS]: (state, action) => ({
      ...state,
      addCommentLoading: false,
      addCommentDone: true,
      addCommentError: null,
      post: action.post,
    }),
    [ADD_COMMENT_FAILURE]: (state, action) => ({
      ...state,
      addCommentLoading: false,
      addCommentDone: false,
      addCommentError: action.error,
    }),
    [DELETE_COMMENT_REQUEST]: (state, action) => ({
      ...state,
      deleteCommentLoading: true,
      deleteCommentDone: false,
      deleteCommentError: null,
    }),
    [DELETE_COMMENT_SUCCESS]: (state, action) => ({
      ...state,
      deleteCommentLoading: false,
      deleteCommentDone: true,
      deleteCommentError: null,
    }),
    [DELETE_COMMENT_FAILURE]: (state, action) => ({
      ...state,
      deleteCommentLoading: false,
      deleteCommentDone: false,
      deleteCommentError: action.error,
    }),
    [LOAD_FORUM_POSTS_REQUEST]: (state, action) => ({
      ...state,
      loadForumPostsLoading: true,
      loadForumPostsDone: false,
      loadForumPostsError: null,
    }),
    [LOAD_FORUM_POSTS_SUCCESS]: (state, action) => ({
      ...state,
      loadForumPostsLoading: false,
      loadForumPostsDone: true,
      loadForumPostsError: null,
      temporalPostsLength: action.temporalPostsLength,
      forumPosts: state.forumPosts.concat(action.forumPosts),
    }),
    [LOAD_FORUM_POSTS_FAILURE]: (state, action) => ({
      ...state,
      loadForumPostsLoading: false,
      loadForumPostsDone: false,
      loadForumPostsError: action.error,
    }),
    [DELETE_POST_REQUEST]: (state, action) => ({
      ...state,
      deletePostLoading: true,
      deletePostDone: false,
      deletePostError: null,
    }),
    [DELETE_POST_SUCCESS]: (state, action) => ({
      ...state,
      deletePostLoading: false,
      deletePostDone: true,
      deletePostError: null,
    }),
    [DELETE_POST_FAILURE]: (state, action) => ({
      ...state,
      deletePostLoading: false,
      deletePostDone: false,
      deletePostError: action.error,
    }),
    [LIKE_POST_REQUEST]: (state, action) => ({
      ...state,
      likePostLoading: true,
      likePostDone: false,
      likePostError: null,
    }),
    [LIKE_POST_SUCCESS]: (state, action) => ({
      ...state,
      likePostLoading: false,
      likePostDone: true,
      likePostError: null,
      post: {
        ...state.post,
        likes: [...state.post.likes].concat(action.like),
      },
      // todo
    }),
    [LIKE_POST_FAILURE]: (state, action) => ({
      ...state,
      likePostLoading: false,
      likePostDone: false,
      likePostError: action.error,
    }),
    [UNLIKE_POST_REQUEST]: (state, action) => ({
      ...state,
      unLikePostLoading: true,
      unLikePostDone: false,
      unLikePostError: null,
    }),
    [UNLIKE_POST_SUCCESS]: (state, action) => ({
      ...state,
      unLikePostLoading: false,
      unLikePostDone: true,
      unLikePostError: null,
      post: {
        ...state.post,
        likes: [...state.post.likes].filter((v, i) => {
          if (v._id !== action.likeId) {
            return { ...v };
          }
        }),
      },
      //todo
    }),
    [UNLIKE_POST_FAILURE]: (state, action) => ({
      ...state,
      unLikePostLoading: false,
      unLikePostDone: false,
      unLikePostError: action.error,
    }),
    [LIKE_COMMENT_REQUEST]: (state, action) => ({
      ...state,
      likeCommentLoading: true,
      likeCommentDone: false,
      likeCommentError: null,
    }),
    [LIKE_COMMENT_SUCCESS]: (state, action) => ({
      ...state,
      likeCommentLoading: false,
      likeCommentDone: true,
      likeCommentError: null,
      post: {
        ...state.post,
        comments: [...state.post.comments].map((v, i) => {
          return v._id === action.commentId
            ? {
                ...v,
                likes: [...v.likes].concat(action.like),
              }
            : { ...v };
        }),
      },
    }),
    [LIKE_COMMENT_FAILURE]: (state, action) => ({
      ...state,
      likeCommentLoading: false,
      likeCommentDone: false,
      likeCommentError: action.error,
    }),
    [UNLIKE_COMMENT_REQUEST]: (state, action) => ({
      ...state,
      unLikeCommentLoading: true,
      unLikeCommentDone: false,
      unLikeCommentError: null,
    }),
    [UNLIKE_COMMENT_SUCCESS]: (state, action) => ({
      ...state,
      unLikeCommentLoading: false,
      unLikeCommentDone: true,
      unLikeCommentError: null,
      post: {
        ...state.post,
        comments: [...state.post.comments].map((v, i) => {
          return v._id === action.commentId
            ? {
                ...v,
                likes: [...v.likes].filter((v, i) => {
                  if (v._id !== action.likeId) {
                    return { ...v };
                  }
                }),
              }
            : { ...v };
        }),
      },
    }),
    [UNLIKE_COMMENT_FAILURE]: (state, action) => ({
      ...state,
      unLikeCommentLoading: false,
      unLikeCommentDone: false,
      unLikeCommentError: action.error,
    }),
    // [EDIT_POST_REQUEST]: (state, action) => ({
    //   ...state,
    //   editPostLoading: true,
    //   editPostDone: false,
    //   editPostError: null,
    // }),
    // [EDIT_POST_SUCCESS]: (state, action) => ({
    //   ...state,
    //   editPostLoading: false,
    //   editPostDone: true,
    //   editPostError: null,
    // }),
    // [EDIT_POST_FAILURE]: (state, action) => ({
    //   ...state,
    //   unLikeCommentLoading: false,
    //   unLikeCommentDone: false,
    //   unLikeCommentError: action.error,
    // }),
    // [SEARCH_POSTS_REQUEST]: (state, action) => ({
    //   ...state,
    //   searchPostsLoading: true,
    //   searchPostsDone: false,
    //   searchPostsError: null,
    // }),
    // [SEARCH_POSTS_SUCCESS]: (state, action) => ({
    //   ...state,
    //   searchPostsLoading: false,
    //   searchPostsDone: true,
    //   searchPostsError: null,
    //   [action.contentType + "Posts"]: action.posts,
    // }),
    // [SEARCH_POSTS_FAILURE]: (state, action) => ({
    //   ...state,
    //   searchPostsLoading: false,
    //   searchPostsDone: false,
    //   searchPostsError: null,
    // }),
    // [FILTER_SEARCH_REQUEST]: (state, action) => ({
    //   ...state,
    //   filterSearchLoading: true,
    //   filterSearchDone: false,
    //   filterSearchError: null,
    // }),
    // [FILTER_SEARCH_SUCCESS]: (state, action) => ({
    //   ...state,
    //   filterSearchLoading: false,
    //   filterSearchDone: true,
    //   filterSearchError: null,
    //   [action.contentType + "Posts"]: action.posts,
    // }),
    // [FILTER_SEARCH_FAILURE]: (state, action) => ({
    //   ...state,
    //   filterSearchLoading: false,
    //   filterSearchDone: false,
    //   filterSearchError: null,
    // }),
  },

  initialState,
);

export default postReducer;
