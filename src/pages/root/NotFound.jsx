import { Box } from "@material-ui/core";
import React from "react";
import { Layout, SEO, Header, Content, Footer } from "../../components/layout";
import { Button } from "../../components/UI";
import { APP } from "../../config/index";

export default function NotFound() {
  return (
    <Layout>
      <SEO title={APP.title} description={APP.description} />
      <Header
        title="404 Page Not Found"
        subtitle="The page you are looking for was not found."
      />
      <Content>
        <Box textAlign="center">
          <Button to="/">Back to home page</Button>
        </Box>
      </Content>
      <Footer></Footer>
    </Layout>
  );
}
