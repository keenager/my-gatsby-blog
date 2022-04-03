import * as React from "react"
import { useState } from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMdx.nodes
  const [category, setCategory] = useState("all")

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  let categorySet = new Set()
  const separator = /\s*,\s*/
  for (let post of posts) {
    if (post.frontmatter.category) {
      let splittedCats = post.frontmatter.category.split(separator)
      for (let split of splittedCats) {
        categorySet.add(split)
      }
    }
  }
  categorySet.delete("")
  let categories = [...categorySet]
  categories.push("all")
  categories.sort()

  const handleCategory = event => {
    setCategory(event.target.innerText)
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <Bio />
      <div className="category-list">
        {categories.map((category, index) => {
          return (
            <button
              key={index}
              className="category-list-item"
              onClick={handleCategory}
            >
              {category}
            </button>
          )
        })}
      </div>
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.slug

          return category === "all" ||
            post.frontmatter.category?.includes(category) ? (
            <li key={post.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          ) : null
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        excerpt
        slug
        frontmatter {
          title
          date(locale: "ko", formatString: "LL")
          description
          category
        }
      }
    }
  }
`
// {
//   allMdx(sort: {fields: frontmatter___date, order: DESC}) {
//     nodes {
//       excerpt
//       slug
//       frontmatter {
//         title
//         date(locale: "ko", formatString: "LL")
//         description
//       }
//     }
//   }
// }
