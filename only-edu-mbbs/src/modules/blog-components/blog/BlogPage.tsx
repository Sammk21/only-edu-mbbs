import React from "react";
import Container from "@/modules/blog-components/container";
import PostList from "@/modules/blog-components/postlist";
import Link from "next/link";
const BlogPage = () => {
  return (
    <Container>
      <h1>Only Education Blogs</h1>
      <div className="grid gap-10 md:grid-cols-2 lg:gap-10  ">
        <PostList
          key={0}
          //   post={}
          //   aspect="landscape"
          //   preloadImage={true}
        />
        <PostList
          key={0}
          //   post={}
          //   aspect="landscape"
          //   preloadImage={true}
        />
      </div>
      <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
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
      <div className="mt-10 flex justify-center mb-6">
        <Link
          href="/archive"
          className="relative inline-flex items-center gap-1 rounded-full border border-borderLight bg-dark px-3 py-2 pl-4 text-sm font-medium text-light hover:bg-dark/80 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-border dark:bg-foreground dark:text-light"
        >
          <span>View all Posts</span>
        </Link>
      </div>
    </Container>
  );
};

export default BlogPage;
