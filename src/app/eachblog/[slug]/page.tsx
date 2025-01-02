// //HERE IM FETCHING STATIC DATA IN "MARKDOWN .MD FILES" DYNAMICALLY 
// // I CAN FETCH DYNAMIC DATA TOO (FROM API) IN THE SAME WAY 
// //I CAN FETCH DATA FROM SANITY AND RENDER IT DYNAMICALLY

// import { useRouter } from 'next/router';
// import { GetStaticProps, GetStaticPaths } from 'next';
// import Image from 'next/image'; 
// import fs from'fs';
// import path from 'path';
// import remark from 'remark';
// import html from 'remark-html';
// import matter from 'gray-matter';


// interface Posts {
//   slug: string;
//   title: string;
//   image: string;
//   readTime: string;
//   date: string;
// }
// export default async function BlogPostPage(params :any){
//   const filepath = `content/${params.slug}.md`;

// return (
//   <div className="max-w-6xl mx-auto p-4">
//       <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
//       <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic">&quot;{data.description}&quot;</p>
//       <div className="flex gap-2">
//           <p className="text-sm text-gray-500 mb-4 italic">By {data.author}</p>
//           <p className="text-sm text-gray-500 mb-4">{data.date}</p>
//       </div>
//       <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="prose dark:prose-invert"></div>
//       <OnThisPage htmlContent={htmlContent}/>
//   </div>
// )
// }
export default function BlogPostPage() {
  return (
    <div>
        <main></main>
    </div>
  )
}