import React from "react";
import { Helmet } from "react-helmet-async";
import { APP } from "../../config";

export default function SEO({ title, description }) {
  const siteName = APP.title;
  return (
    <Helmet>
      <title>
        {siteName} | {title}
      </title>
      <meta name="description" content={description}></meta>
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
}

SEO.defaultProps = {
  title: APP.title,
  description: APP.description,
};
