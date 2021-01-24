import React, { useCallback, useEffect, useState } from "react";
import { Form, Input, Button, Checkbox, Divider } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styled from "styled-components";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { loginRequestAction } from "../../reducers/user";
import Router, { withRouter } from "next/router";
import SocialTemplate from "../common/auth/SocialTemplate";
import useInput from "../../hooks/useInput";

const LoginInputForm = () => {
  const dispatch = useDispatch();
  const { loginLoading, me, loginError } = useSelector((state) => state.user);

  // hook 필요
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onLogin = useCallback(() => {
    if (email == "" || password == "") {
      return;
    }
    dispatch(loginRequestAction({ email, password }));
  }, [email, password]);

  useEffect(() => {
    if (loginError) {
      // 로그인 에러에 따라 분기 필요
      alert("이메일 인증이 완료되지 않았습니다!");
      return;
    }
    if (me) {
      //localStorage.setItem("user", JSON.stringify(me));
      Router.push("/");
    }
  }, [me, loginError]);

  return (
    <>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        //onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "이메일을 입력해주세요.",
            },
          ]}
          onChange={onChangeEmail}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "비밀번호를 입력해주세요.",
            },
          ]}
          onChange={onChangePassword}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item style={{ textAlign: "center" }}>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ width: "100%" }}
            onClick={onLogin}
            loading={loginLoading}
          >
            로그인
          </Button>
        </Form.Item>
        <Divider style={{ fontSize: "12px", color: "#888" }}>
          소셜 로그인
        </Divider>
        <SocialTemplate />
        <Form.Item style={{ textAlign: "center" }}>
          계정이 없으신가요?
          <Link href="/auth/register">
            <a style={{ textDecoration: "underline" }}>회원가입</a>
          </Link>
        </Form.Item>
        <Form.Item style={{ textAlign: "center" }}>
          <Link href="/">
            <a style={{ color: "#888" }}>홈으로가기</a>
          </Link>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginInputForm;
