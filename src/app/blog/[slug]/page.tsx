import { getPostBySlug } from "@/lib/server/utils";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "mdx-components";

const components = useMDXComponents({});
type Props = {
    params: { slug: string };
};

export default async function BlogPostPage({ params }: Props) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    const { frontmatter, content } = getPostBySlug(slug);

    return (
      <div className="p-4">
        <MDXRemote source={content} components={components} />
      </div>
    );
}
