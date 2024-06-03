import Image from "next/image";
import Link from "next/link";
import { cx } from "@/utils/all";
// import { urlForImage } from "@/lib/sanity/image";
// import { parseISO, format } from "date-fns";
// import { PhotoIcon } from "@heroicons/react/24/outline";
import CategoryLabel from "@/modules/blog-components/blog/category";

export default function PostList({
  post,
  // aspect,
  // minimal,
  // pathPrefix,
  // preloadImage,
  // fontSize,
  // fontWeight
}) {
  // const imageProps = post?.mainImage ? urlForImage(post.mainImage) : null;
  // const AuthorimageProps = post?.author?.image
  //   ? urlForImage(post.author.image)
  //   : null;

  const image = post.image.url;

  const imageUrl = "http://localhost:1337";

  return (
    <>
      <div className={cx("group cursor-pointer grid gap-1  ")}>
        <div
          className={cx(
            " overflow-hidden  rounded-xl bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800"
          )}
        >
          <Link
            className={cx(
              "relative block",
              // aspect === "landscape"
              "landscape"
                ? "aspect-video"
                : aspect === "custom"
                ? "aspect-[5/4]"
                : "aspect-square"
            )}
            href={"/blog/post/@sam"}
          >
            {true ? (
              <Image
                src={imageUrl + image}
                // {...(post.mainImage.blurDataURL && {
                //   placeholder: "blur",
                //   blurDataURL: post.mainImage.blurDataURL
                // })}
                alt={"Thumbnail"}
                // priority={preloadImage ? true : false}
                className="object-cover transition-all"
                fill
                sizes="(max-width: 768px) 30vw, 33vw"
              />
            ) : (
              <span className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-gray-200">
                <PhotoIcon />
              </span>
            )}
          </Link>
        </div>

        <div className={cx("flex items-center")}>
          <div>
            <CategoryLabel category={post.category} />{" "}
            {/**nomargin={minimal}  */}
            <h2
              className={cx(
                "text-2xl"
                  ? "line-clamp-2 font-medium text-xl  tracking-normal text-dark"
                  : "font-semibold leading-snug tracking-tight",
                "mt-2  dark:text-light"
              )}
            >
              <Link
                // href={`/post/${pathPrefix ? `${pathPrefix}/` : ""}${
                //   post.slug.current
                // }`}
                href="#"
              >
                <span
                  className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom
      bg-no-repeat
      transition-[background-size]
      duration-500
      hover:bg-[length:100%_3px]
      group-hover:bg-[length:100%_10px]
      dark:from-purple-800 dark:to-purple-900"
                >
                  {post.title}
                </span>
              </Link>
            </h2>
            <div className="hidden">
              {/* {post?.excerpt || ( */}
              <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                <Link
                  // href={`/post/${pathPrefix ? `${pathPrefix}/` : ""}${
                  //   post.slug.current
                  // }`}
                  href={"#"}
                >
                  {/* {post.excerpt} */} excerpt
                </Link>
              </p>
              {/* )} */}
            </div>
            <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
              <Link href={`#`}>
                <div className="flex items-center gap-3">
                  <div className="relative h-5 w-5 flex-shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      // alt={post?.author?.name}
                      alt="Author name"
                      className="rounded-full object-cover"
                      fill
                      sizes="20px"
                    />
                  </div>
                  <span className="truncate text-sm">Author name</span>
                </div>
              </Link>
              <span className="text-xs text-gray-300 dark:text-gray-600">
                &bull;
              </span>
              <time
                className="truncate text-sm"
                // dateTime={post?.publishedAt || post._createdAt}
                dateTime="12 10 2024"
              >
                12 12 2019
                {/* {format(
                  parseISO(post?.publishedAt || post._createdAt),
                  "MMMM dd, yyyy"
                )} */}
              </time>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
