import { sanityFetch } from "@/sanity/live";
import { defineQuery } from "next-sanity";
import { JSX } from "react";

export default async function Page(): Promise<JSX.Element> {
  const ABOUT_QUERY = defineQuery(`*[
  _type == "about"]`);

  const { data: about } = await sanityFetch({ query: ABOUT_QUERY });

  console.log(about);

  return (
    <div className="flex flex-col gap-4 max-w-[800px] pt-24 mt-auto h-full items-center justify-center m-4 md:m-4">
      <div className="bg-neutral-900 items-center flex flex-col gap-4 rounded-md p-4">
        {about[0].about.map((paragraph: Paragraph) => {
          return (
            <p
              key={paragraph._key}
              className="first:font-[JejuHallasan-Regular] first:text-3xl"
            >
              {paragraph.children[0].text}
            </p>
          );
        })}
      </div>
    </div>
  );
}
