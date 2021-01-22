import React, { useEffect } from "react";
import ArticleLayout from "../../../components/layout/ArticleLayout";
import { useDispatch, useSelector } from "react-redux";
import {
  loadPostsReqeustAction,
  initializePostsAction,
} from "../../../reducers/post";
import List from "../../../components/common/contents/List";
import { Spin } from "antd";
import styled from "styled-components";
import { withRouter } from "next/router";

const SpinWrapper = styled.div`
  text-align: center;
  margin: 100px 0;
`;

const Project = ({ router }) => {
  const dispatch = useDispatch();
  const { projectPosts, loadPostsLoading } = useSelector((state) => state.post);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight && !loadPostsLoading) {
      dispatch(loadPostsReqeustAction("project"));
    }
  };

  useEffect(() => {
    // {
    //   contentType:"project",
    //   query:"asdf"
    // }
    dispatch(loadPostsReqeustAction("project"));
    return () => {
      dispatch(initializePostsAction());
    };
  }, [router]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ArticleLayout contentType="project">
      <List data={projectPosts} type="project" />
      {loadPostsLoading && (
        <SpinWrapper>
          <Spin tip="불러오는중..." />
        </SpinWrapper>
      )}
    </ArticleLayout>
  );
};

export default withRouter(Project);
