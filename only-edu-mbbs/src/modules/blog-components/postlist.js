import Image from "next/image";
import Link from "next/link";
import { cx } from "@/utils/all";
import CategoryLabel from "@/modules/blog-components/blog/category";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  style: "normal",
  display: "swap",
});

export default function PostList() {
  return (
    <section>
      <div className="border-b border-b-borderLight dark:border-b-border mt-5">
        <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
          <Link href="#">
            <div className="flex items-center gap-3">
              <div className="relative h-5 w-5 flex-shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Author name"
                  className="rounded-full object-cover"
                  fill
                  sizes="20px"
                />
              </div>
              <span className="truncate text-sm">Author name</span>
            </div>
          </Link>
        </div>

        <div className={cx("group cursor-pointer grid gap-1")}>
          <div className="flex mt-3 gap-1 sm:gap-10 justify-between">
            <Link href="#" className="sm:w-[70%] w-[70%]">
              <h2 className="font-semibold sm:text-xl text-sm mb-2 line-clamp-2">
                High-Level System Architecture of Booking.com
              </h2>
              <p
                className={`text-sm line-clamp-1 sm:line-clamp-3 ${merriweather.className}`}
              >
                Hello everyone! In this article, we will take an in-depth look
                at the possible high-level architecture of Booking.com, one of
                the world’s leading travel and hospitality platforms. Serving
                millions of users globally, Booking.com offers various features
                and services that cater to diverse travel needs.
              </p>
            </Link>
            <Link
              href="#"
              className="relative block aspect-square h-20 w-20 sm:h-28 sm:w-28"
            >
              <Image
                src="https://images.unsplash.com/photo-1714779573259-216b0cf746be?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Thumbnail"
                className="object-cover transition-all"
                fill
              />
            </Link>
          </div>

          <div className="sm:py-8 py-4 flex justify-between items-center">
            <Link
              href="#"
              className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm"
            >
              <div className="bg-dark/5 rounded-2xl w-fit px-2 py-1 text-[10px] sm:text-sm">
                Design
              </div>
              <div className="bg-dark/5 rounded-2xl w-fit px-2 py-1 text-[10px] sm:text-sm">
                Development
              </div>
              <div className="bg-dark/5 rounded-2xl w-fit px-2 py-1 text-[10px] sm:text-sm">
                Architecture
              </div>
            </Link>
            <div className="flex sm:gap-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="lj"
              >
                <path
                  d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V5.75z"
                  fill="#000"
                ></path>
              </svg>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.39 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.4.59.56 0 1.03-.2 1.42-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.6-1.41A1.93 1.93 0 0 0 6.4 10c-.55 0-1.02.2-1.41.59-.4.39-.6.86-.6 1.41zM10 12c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.54 0 1.02-.2 1.4-.59.4-.39.6-.86.6-1.41 0-.55-.2-1.02-.6-1.41a1.93 1.93 0 0 0-1.4-.59c-.55 0-1.04.2-1.42.59-.4.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.57 1.41.4.4.88.59 1.43.59.57 0 1.04-.2 1.43-.59.39-.39.57-.86.57-1.41 0-.55-.2-1.02-.57-1.41A1.93 1.93 0 0 0 17.6 10c-.55 0-1.04.2-1.43.59-.38.39-.57.86-.57 1.41z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
