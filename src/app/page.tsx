
import Image from "next/image";
import Link from "next/link";
interface BlogCardType {
  slug: string;
  title: string;
  image: string;
  description: string;
}
const BlogCards: BlogCardType [] = [
  {
    slug: "0",
    title: "A SURREAL CONCRETE DREAM",
    image: "/blog.png",
    description: "Mar 32, 2024 . 2 min read",
  },]
export default function Home() {
  // const featuredPosts = post.slice(0, 3); // Get the first 3 blog posts for the homepage

  return (
    <main>
          <h1 className="text-2xl md:text-3xl md:my-0 my-3 font text-center">Stories About Design & Fashion</h1>
      <div className="md:flex md:justify-between grid grid-cols-1 md:my-11 md:px-20">
          <Image
            src={"/blog.png"}
            width={657}
            height={611}
            alt="herosection01"
          />
          
          
        <div className="bg-black text-white py-12 text-center md:w-[637px] md:h-[611px]">
        {BlogCards.map((BlogCard) => (
          <Link key={BlogCard.slug} href={`/blog/${BlogCard.slug}` }>
          <h1 className="text-2xl font-semibold">FEATURED STORY</h1> 
          <h5 className="text-sm font-extralight mt-10 md:mt-20">{BlogCard.description}</h5>
          <h1 className="md:text-7xl text-6xl font mt-11">{BlogCard.title}</h1>
          </Link>))}
        </div>
       
      </div>
      <div className="border-b-[1px] border-white flex md:hidden"></div>
    </main>
  );
}
