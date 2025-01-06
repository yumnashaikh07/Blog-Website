// HERE IM FETCHING DATA FROM SANITY AND RENDERING IT MY CARDS ARE STATICALY GENERATED IN Blog/page.tsx
//IT IS EACH BLOG POST CONTENT WHICH IS SHOWN DYNAMICLY IN [slug].tsx HERE 
// I CAN FETCH DATA FROM SANITY AND RENDER IT DYNAMICALLY
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { ArrowBigLeft, HomeIcon } from "lucide-react";
import Link from "next/link";

interface BlogPostType {
  title: string;
  description: string;
  slug: string;
  image: string;
  Content: any;
}

async function getBlogPost(slug: string) {
  const query = `*[_type == "blogPost" && slug.current == "${slug}"]{
    title,
    description,
    image,
    "slug" : slug.current,
    Content,
  }[0]`;

  return await client.fetch(query);
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post: BlogPostType = await getBlogPost(params.slug);
  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <main className="flex flex-col max-w-5xl items-center p-4 mx-auto ">
      <h1 className="text-3xl md:text-5xl my-5 font-semibold">{post.title}</h1>
      <p className="text-sm mb-4 border-l-2 mr-52 text-gray-600 pl-3 italic border-gray-500">{post.description}</p>
      <Image src={urlFor(post.image).url()} alt={post.title} width={500} height={500}  className="mb-5"/>
      
      <div className="text-xl ">
        <PortableText value={post.Content}/>
      </div>
      <div className="border-b-2 mt-5 w-full border-gray-500 mx-auto"></div>
      <div className="border-b-2 mt-1 w-full border-gray-500 mx-auto"></div>
      <div className="flex justify-between mx-auto space-x-[250px] md:space-x-[900px]  mb-20 items-center">
      <Link href={"/blog"} ><ArrowBigLeft size={47} strokeWidth={1.25} className=" transition-transform duration-500 hover:scale-150 "/></Link>
      <Link href={"/"} ><HomeIcon size={35} strokeWidth={1.5} className=" transition-transform duration-500 hover:scale-150 "/></Link>
      </div>
    </main>
  );
}