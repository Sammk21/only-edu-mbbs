import Link from "next/link";
import React from "react";

const Postlistright = ({ data }) => {
  return (
    <div className="border-l border-l-borderLight dark:border-l-border pl-5 mt-10 hidden lg:block">
      <div>
        <h2 className="font-semibold">Recommended topics</h2>
        <div className="">
          <div className="">
            {data.map((post) => (
              <div key={post.id} className="flex flex-wrap gap-2 mt-3">
                {post.category.name}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="font-semibold">Trendy Blogs</h2>
        <div className="mt-3 text-sm">
          <p>
            {data.map((post) => (
              <Link key={post.id} className="" href={`/blog/post/${post.slug}`}>
                {post.title}
                <br />
              </Link>
            ))}
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Postlistright;
