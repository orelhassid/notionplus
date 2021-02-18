import React from "react";
import { Layout, SEO, Header, Content, Footer } from "../../components/layout";
import { APP } from "../../config/index";
import FormFieldsCheck from "../../components/forms/FormFieldsCheck";
export default function Lab() {
  return (
    <Layout>
      <SEO title={APP.title} description={APP.description} />
      <Header title="Lab Page" subtitle="Test and check your components" />
      <Content>
        <FormFieldsCheck />
      </Content>
      <Footer></Footer>
    </Layout>
  );
}
