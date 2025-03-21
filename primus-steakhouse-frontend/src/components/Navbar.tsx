import { urlFor } from "@/helpers/urlFor";
import { sanityFetch } from "@/sanity/live";
import { defineQuery } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";

export const Navbar = async (): Promise<JSX.Element> => {
  const LOGO_QUERY = defineQuery(`*[_type == "logo"]`);

  const { data: logos } = await sanityFetch({ query: LOGO_QUERY });

  return (
    <nav
      className={
        "flex flex-row py-4 w-full top-0 z-50 fixed items-center justify-center sm:px-4"
      }
    >
      <div className="max-w-[800px] w-full flex flex-row ">
        <Link href={"/"}>
          <Image
            src={urlFor(logos[1].image).url()}
            width={150}
            height={150}
            alt=""
          />
        </Link>

        <ul className="flex text-2xl items-center flex-row ml-auto w-52 justify-between">
          <Link href={"/menu"}>
            <li className="font-[JejuHallasan-Regular] hover:bg-red-800 transition-all duration-300 px-4 py-2 rounded-md">
              Menu
            </li>
          </Link>
          <Link href={"/about"}>
            <li className="font-[JejuHallasan-Regular] hover:bg-red-800 transition-all duration-300 px-4 py-2 rounded-md">
              About
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};
