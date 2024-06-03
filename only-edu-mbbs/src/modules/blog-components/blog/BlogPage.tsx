import React from "react";
import Container from "@/modules/blog-components/container";
import PostList from "@/modules/blog-components/postlist";
import Postlistright from "@/modules/blog-components/postlistright";

const BlogPage = () => {
  return (
    <Container className="">
      <div className="sm:flex gap-10">
        <div className="mt-10 flex flex-col pr-0 lg:pr-14 ">
          <PostList
          // key={post._id}
          // post={post}
          // aspect="square"
          />
          <PostList
          // key={post._id}
          // post={post}
          // aspect="square"
          />
          <PostList
          // key={post._id}
          // post={post}
          // aspect="square"
          />
          <PostList
          // key={post._id}
          // post={post}
          // aspect="square"
          />
          <PostList
          // key={post._id}
          // post={post}
          // aspect="square"
          />
        </div>
        <Postlistright />
      </div>
    </Container>
  );
};

export default BlogPage;
