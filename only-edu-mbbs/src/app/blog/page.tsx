import React from "react";
import BlogPage from "../../modules/blog-components/blog/BlogPage";

const blogQuery = "/api/articles?filters[id][$eq]=1";

const BlogIndexPage = () => {
  return <BlogPage />;
};

export default BlogIndexPage;
