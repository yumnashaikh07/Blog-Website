import { defineField } from "sanity"
export default {
    name: 'blogPost', //By this we fetch data through GROQ Query in Sanity
    title: 'Blog Post',
    type: 'document',
    fields: 
    [   defineField({
        name: 'title', //By this we fetch data in [slug].tsx
        title: 'Title',
        description: 'This is main title of the blog post with big font size',
        type: 'string',
       
    }),
        defineField({
            name:'image', //By this we fetch data in [slug].tsx
            title:'Image',
            type:'image',
            options:{
                hotspot:true
            }
        }) ,
        defineField({
            name:'description', //By this we fetch data in [slug].tsx
            title:'Description',
            description:'Here i will write same content for all my blog posts',
            type:'text',
            validation: Rule => Rule.required().min(3).max(30)
        })
        ,
        defineField({
            name: 'slug', //By this we fetch data in [slug].tsx
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
            }
        }),
            defineField({
                name:'Content', //By this we fetch data in [slug].tsx
                title:'Content',
                type:'array',
                of:[{type:'block'}],
                
            })
        
       
        
    ]}