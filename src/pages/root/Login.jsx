import React from "react";
import { Layout, SEO, Header, Content, Footer } from "../../components/layout";
import { APP } from "../../config/index";
import LoginForm from "../../components/forms/LoginForm";
export default function Login() {
  return (
    <Layout>
      <SEO title={APP.title} description={APP.description} />
      <Header title="Login Page" subtitle="Login with your account details" />
      <Content>
        <LoginForm />
      </Content>
      <Footer></Footer>
    </Layout>
  );
}
