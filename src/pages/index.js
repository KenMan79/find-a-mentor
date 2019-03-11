import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `coding coach`,
        `mentor`,
        `mentorship`,
        `coding`,
        `programming`,
        `coach`
      ]}
    />
  </Layout>
);

export default IndexPage;
