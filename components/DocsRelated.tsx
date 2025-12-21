import Link from "next/link";

export default function DocsRelated({
  related,
  linkList,
}: {
  related?: { title?: string; nav_title?: string; description?: string };
  linkList?: any[];
}) {
  const title = related?.nav_title || related?.title || "下一步";
  return (
    <div className="mt-16">
      {related ? (
        <>
          <h2 id={title} className="text-3xl font-bold" data-docs-heading>
            {title}
          </h2>
          <div className="mt-2 text-gray-900">{related?.description}</div>
        </>
      ) : null}
      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {linkList?.map((item) => {
          return (
            <Link
              key={item.slug}
              href={item.slug}
              title={item.nav_title || item.title}
              prefetch={false}
              className="bg-gray-0 shadow-border group block space-y-2 rounded-md p-6 pt-5 transition-shadow duration-300 hover:shadow-lg"
            >
              <h3 className="group-hover:text-gray-1000 truncate text-lg font-medium leading-snug">
                {item.nav_title || item.title}
              </h3>
              <div className="line-clamp-3 text-sm font-normal text-gray-900">
                {item.description}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
