import { MenuItem } from "@/components/MenuItem";
import { sanityFetch } from "@/sanity/live";
import { defineQuery } from "next-sanity";
import { JSX } from "react";

export default async function Page(): Promise<JSX.Element> {
  const MENU_ITEMS_QUERY = defineQuery(`*[
  _type == "menu-item"]`);

  const { data: menuItems } = await sanityFetch({ query: MENU_ITEMS_QUERY });

  return (
    <div className="flex flex-col gap-4 pt-24 max-w-[800px] mb-4 m-4 sm:m-0 md:m-4 lg:m-0">
      {menuItems.map((item: MenuItem) => {
        return <MenuItem key={item.slug.current} item={item} />;
      })}
    </div>
  );
}
