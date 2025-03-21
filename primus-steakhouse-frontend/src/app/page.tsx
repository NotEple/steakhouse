import { urlFor } from "@/helpers/urlFor";
import { sanityFetch } from "@/sanity/live";
import { defineQuery } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

export default async function IndexPage() {
  const FRONT_QUERY = defineQuery(`*[_type == "front"]`);

  const { data: front } = await sanityFetch({ query: FRONT_QUERY });

  console.log(front);
  return (
    <div className="rounded-md flex h-full flex-col w-full items-center">
      <div className="relative">
        <h2 className="italic font-bold font-[JejuHallasan-Regular] text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center md:text-6xl w-full">
          {front[0].slogan}
        </h2>
        <div>
          <Image
            src={urlFor(front[0].image).url()}
            width={1920}
            height={0}
            sizes={"100vw"}
            quality={100}
            style={{
              minHeight: "600px",
              maxHeight: "700px",
              objectFit: "cover",
            }}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 px-8 pb-4 pt-8 w-full items-center bg-neutral-900 h-full">
        <div className="flex max-w-[800px] flex-col md:flex-row gap-4">
          <div className="flex flex-col justify-center gap-8 w-full">
            {front[0].intro.map((paragraph: Paragraph) => {
              return (
                <p
                  key={paragraph._key}
                  className="first:font-[JejuHallasan-Regular] first:text-2xl last:font-[JejuHallasan-Regular] last:text-xl leading-6"
                >
                  {paragraph.children[0].text}
                </p>
              );
            })}
          </div>
          <div className="w-full items-center flex justify-center">
            <Image
              src={urlFor(front[0].image).height(400).width(400).url()}
              width={400}
              height={400}
              alt=""
            />
          </div>
        </div>

        <Link href={"/menu"}>
          <button className="bg-red-800 cursor-pointer px-4 py-2 rounded-md font-[JejuHallasan-Regular] hover:outline-2">
            Take me to the menu
          </button>
        </Link>
      </div>
    </div>
  );
}
