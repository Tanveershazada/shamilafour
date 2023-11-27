import React from 'react'
import { blogImgOne, blogImgTwo, blogImgThree, } from '../../assest';
import BlogCard from './BlogCard';
import Title from "../roundDesign/home/Title";


const Blog = () => {
  return (
    <div> 
      <Title title="Latest" subTitle="Posts"/>
      <div className='grid grid-cols-2 gap-10'>
        <div className='px-6'>
          <BlogCard
          image={blogImgOne}
          title="september 16, 2022"
          subTitle="UI & UX Conference at Luiv 2022"
          category="Travel"
          />
            <BlogCard
          image={blogImgTwo}
          title="july 15, 2020"
          subTitle="How to become a creative designer"
          category="Travel"
          />
            <BlogCard
          image={blogImgThree}
          title="july 14, 2020"
          subTitle="Designer thoughts about mobile UI templates"
          category="Travel"
          />
            <BlogCard
          image={blogImgOne}
          title="july 13, 2020"
          subTitle="Designer Conference at Florida, Pakistan 2020"
          category="Travel"
          />
        </div>
        <div className='px-6'>
        <BlogCard
          image={blogImgThree}
          title="september 16, 2022"
          subTitle="UI & UX Conference at Luiv 2022"
          category="Travel"
          />
          <BlogCard
          image={blogImgOne}
          title="september 16, 2022"
          subTitle="UI & UX Conference at Luiv 2022"
          category="Travel"
          />
          <BlogCard
          image={blogImgTwo}
          title="september 16, 2022"
          subTitle="UI & UX Conference at Luiv 2022"
          category="Travel"
          />
          <BlogCard
          image={blogImgOne}
          title="september 16, 2022"
          subTitle="UI & UX Conference at Luiv 2022"
          category="Travel"
          />
        </div>
      </div>
    </div>
  )
}

export default Blog;