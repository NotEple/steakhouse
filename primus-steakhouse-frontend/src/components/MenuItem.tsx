import { urlFor } from "@/helpers/urlFor";
import Image from "next/image";
import { JSX } from "react";

export const MenuItem = ({ item }: { item: MenuItem }): JSX.Element => {
  return (
    <div className="flex flex-col bg-neutral-900 p-4 rounded-md h-60">
      <div className="flex flex-row h-full">
        <div className="flex flex-col h-full">
          <h2 className="text-2xl pb-4 font-[JejuHallasan-Regular]">
            {item.name}
          </h2>
          <p className="w-3/4">{item.details[0].children[0].text}</p>
          <p className="mt-auto text-2xl font-[JejuHallasan-Regular]">
            ${item.price}
          </p>
        </div>

        <Image
          src={urlFor(item.image).width(200).height(200).url()}
          width={200}
          height={200}
          layout="intrinsic"
          style={{ borderRadius: "6px", objectFit: "cover" }}
          alt=""
        />
      </div>
    </div>
  );
};
