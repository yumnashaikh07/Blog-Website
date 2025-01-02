
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  // const featuredPosts = posts.slice(0, 3); // Get the first 3 blog posts for the homepage

  return (
    <main>
          <h1 className="text-3xl  font text-center">Stories About Design</h1>
      <div className="md:flex md:justify-between my-11 px-20">
          <Image
            src={"/blog.png"}
            width={657}
            height={611}
            alt="herosection01"
          />
        <div className="bg-black text-white py-12 text-center w-[637px] h-[611px]">
          <h1 className="text-2xl font-semibold">FEATURED STORY</h1> 
          <h5 className="text-sm font-extralight mt-40">Jun 32, 2023 . 2 min read</h5>
          <h1 className="text-7xl font mt-11"><Link href={"/"}>A SURREAL CONCRETE DREAM</Link></h1>
        </div>
      </div>

      <section>
        <h3 className=" text-3xl px-20">LATEST</h3>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {featuredPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div> */}
   
      </section>
    </main>
  );
}
