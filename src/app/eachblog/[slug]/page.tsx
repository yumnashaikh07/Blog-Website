// //HERE IM FETCHING STATIC DATA IN "MARKDOWN .MD FILES" DYNAMICALLY 
// // I CAN FETCH DYNAMIC DATA TOO (FROM API) IN THE SAME WAY 
// //I CAN FETCH DATA FROM SANITY AND RENDER IT DYNAMICALLY
import { client } from "@/sanity/lib/client"

interface BlogPostType {
  title: string,
  description: string,
  slug: string,
  image: string,
  content: string
}
async function getBlogPost(){
  const query = `*[_type == "blogPost"]{
    title,
    description,
    slug,
    image,
    content
    }`
 
return await client.fetch(query)
  }
   
  export default async function BlogPostPage(){
      const Posts : BlogPostType []= await getBlogPost()
      console.log(Posts)
    return(     
    <main>
{Posts.map((Post:BlogPostType , slug :number) => 
  <div><h1>{Post.title}</h1>
<p>{Post.slug}</p></div>

)}
        </main>
  )
}