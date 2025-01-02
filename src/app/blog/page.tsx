import Image from "next/image";
import Link from "next/link";

interface Posts {
  slug: string;
  title: string;
  image: string;
  readTime: string;
  date: string;
}
const blogPosts: Posts[] = [
  {
    slug: "1",
    title: "The Rise of Minimalism in Fashion",
    image: "/blog1.png",
    readTime: "3 min read",
    date: "Mar 32, 2024",
  },
  {
    slug: "2",
    title:  "Vintage Fashion into Modern Outfits",
    image: "/image2.png",
    readTime: "5 min read",
    date: "Mar 32, 2024",
  },
  {
    slug: "3",
    title:"Top Fashion Trends for Spring 2024",
    image: "/blog3.png",
    readTime: "4 min read",
    date: "Mar 32, 2024",
  },
    
  {
    slug: "4",
    title: "The Impact of Technology on Fashion Design",
    image: "/blog5.png",
    readTime: "3 min read",
    date: "Mar 32, 2024",
  },
  {
    slug: "5",
    title: "The Art of Mixing Patterns in Fashion",
    image: "/blog3.png",
    readTime: "6 min read",
    date: "Mar 32, 2024",
  },

  {
    slug: "6",
    title: "Sustainable Fashion: How the Industry is Evolving",
    image: "/image1.png",
    readTime: "2 min read",
    date: "Mar 32, 2024",
  },

]

export default function Blogs() {
  return (
    <div id="blog-posts" className="container mx-auto md:p-10 ">
      <h2 className="text-5xl font font-extralight flex items-center justify-center text-white h-20 bg-black mb-8">
        BLOGS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:p-0 p-5 gap-8">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="border rounded-lg overflow-hidden shadow-md block"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={500}
              height={300}
              className="w-full h-56 object-cover"
              placeholder="blur"
              blurDataURL="/path/to/low-res-image.jpg"
            />
            <div className="p-4">
              <p className="text-sm  text-gray-500">
                {post.date} 
                <span className="mx-1 text-gray-700">•</span>
                 <span className="text-xs text-gray-500">  {post.readTime}</span>
              </p>
              <h3 className="text-xl font-bold">{post.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
