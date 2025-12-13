import { getPostBySlug } from "@/lib/server/utils";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "mdx-components";
import { TableOfContents } from "@/components/table-of-contents";

const components = useMDXComponents({});
type Props = {
    params: { slug: string };
};

export default async function BlogPostPage({ params }: Props) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;

const { frontmatter, content, headings } = getPostBySlug(slug);

    return (
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-8 h-full">
        <article className="p-4 prose dark:prose-invert">
          <MDXRemote source={content} components={components} />
        </article>

        <aside className="sticky p-4 hidden lg:block border-l border-neutral-300">
          <TableOfContents headings={headings} />
        </aside>
      </div>
    );
}
