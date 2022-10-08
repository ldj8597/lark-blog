import Link from "next/link";
import Image from "next/future/image";

type PostPreviewProps = {
  title: string;
  date: string;
  excerpt: string;
  image: string;
  slug: string;
};

export default function PostPreview({
  title,
  date,
  excerpt,
  image,
  slug,
}: PostPreviewProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Link href={`/blog/${slug}`}>
      <a>
        <div className="rounded-md shadow-lg border flex flex-col overflow-hidden">
          <Image
            src={`/images/post/${slug}/${image}`}
            alt={title}
            width={200}
            height={200}
            className="w-full aspect-video bg-slate-200 object-cover"
          />
          <div className="px-5 py-5 flex flex-col gap-1">
            <h3 className="text-xl font-bold">{title}</h3>
            <time className="text-slate-500 italic text-sm self-end">
              {date}
            </time>
            <p className="text-slate-500">{excerpt}</p>
          </div>
        </div>
      </a>
    </Link>
  );
}
