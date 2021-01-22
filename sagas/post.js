import { takeLatest, call, put, delay, throttle } from "redux-saga/effects";
import {
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE,
  MAIN_LOAD_POSTS_REQUEST,
  MAIN_LOAD_POSTS_SUCCESS,
  MAIN_LOAD_POSTS_FAILURE,
  LOAD_POST_REQUEST,
  LOAD_POST_SUCCESS,
  LOAD_POST_FAILURE,
  WRITE_POST_REQUEST,
  WRITE_POST_SUCCESS,
  WRITE_POST_FAILURE,
} from "../reducers/post";
import { dummyPostCreator } from "../lib/util/dummyCreator";

// saga

function* loadPostSaga(action) {
  try {
    // 서버에서 post하나 받아오면 post에 데이터 바로 넣기
    const { id, contentType } = action.payload;
    // yield call({id,...})
    // data
    yield delay(1000);
    yield put({
      type: LOAD_POST_SUCCESS,
      post: dummyPostCreator(contentType),
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: LOAD_POST_FAILURE,
      error: error.response.data,
    });
  }
}

function* loadPostsSaga(action) {
  // 쿼리값에 따라 요청
  try {
    yield delay(1000);
    // 수정 필요
    // action.payload.contentType, action.payload.query가 필요
    // term도 필요
    // forum일 경우 sortingBy 쿼리 필요 -> study, project와 분기 필요
    yield put({ type: LOAD_POSTS_SUCCESS, contentType: action.payload });
  } catch (error) {
    console.log(error);
    yield put({
      type: LOAD_POSTS_FAILURE,
      contentType: action.payload,
      error: error.response.data,
    });
  }
}

function* mainLoadPostsSaga(action) {
  try {
    yield delay(1000);
    yield put({ type: MAIN_LOAD_POSTS_SUCCESS });
  } catch (error) {
    console.log(error);
    yield put({
      type: MAIN_LOAD_POSTS_FAILURE,
      error: error.response.data,
    });
  }
}

function* writePostSaga(action) {
  const { type } = action.payload;
  // type에 따라 call 다르게 처리
  let data;
  if (type === "study" || type === "project") {
    data = {
      type,
      title: action.payload.title,
      description: action.payload.description,
      skill: action.payload.skill,
      peopleNumber: action.payload.peopleNumber,
      location: action.payload.location,
      file: null, // 처리 필요
    };
    console.log(data);
  } else {
    data = {
      type,
      title: action.payload.title,
      description: action.payload.description,
      filter: action.payload.filter,
      tags: action.payload.tags,
    };
    console.log(data);
  }
  try {
    yield delay(1000);
    // yield call(...data)
    yield put({ type: WRITE_POST_SUCCESS });
  } catch (error) {
    console.log(error);
    yield put({
      type: WRITE_POST_FAILURE,
      error: error.response.data,
    });
  }
}

// watcher

export function* watchPost() {
  yield takeLatest(MAIN_LOAD_POSTS_REQUEST, mainLoadPostsSaga);
  yield takeLatest(LOAD_POSTS_REQUEST, loadPostsSaga);
  yield takeLatest(LOAD_POST_REQUEST, loadPostSaga);
  yield takeLatest(WRITE_POST_REQUEST, writePostSaga);
}
