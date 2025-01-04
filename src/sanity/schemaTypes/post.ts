import { defineField } from "sanity"
export default {
    name: 'blogPost',
    title: 'Blog Post',
    type: 'document',
    fields: 
    [   defineField({
        name: 'title',
        title: 'Title',
        description: 'This is main title of the blog post with big font size',
        type: 'string',
       
    }),
        defineField({
            name:'image',
            title:'Image',
            type:'image',
            options:{
                hotspot:true
            }
        }) ,
        defineField({
            name:'description',
            title:'Description',
            description:'Here i will write same content for all my blog posts',
            type:'text',
            validation: Rule => Rule.required().min(3).max(30)
        })
        ,
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
            }
        }),
            defineField({
                name:'Content',
                title:'Content',
                type:'array',
                of:[{type:'block'}],
                
            })
        
       
        
    ]}