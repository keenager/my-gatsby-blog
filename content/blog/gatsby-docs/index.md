---
title: Links to Gatsby Documents
date: "2022-03-29"
description: Gatsby 공식 문서 중 참조할 만한 부분 링크 모음
category: gatsby
---

:smile:

### Graphql 관련

[Graphql Query Options](https://www.gatsbyjs.com/docs/graphql-reference/)

[query variables 관련](https://www.gatsbyjs.com/docs/how-to/querying-data/page-query/#how-to-add-query-variables-to-a-page-query)

> All context values are made available to a template’s GraphQL queries as arguments prefaced with $, so from our example above the slug property will become the $slug argument in our page query: [링크](https://www.gatsbyjs.com/docs/programmatically-create-pages-from-data/#creating-pages)

모든 context value[^각주1]는 템플릿의 graphql 쿼리에서 사용할 수 있게끔 `$`가 붙은 argument로 만들어진다. 따라서 예제에서의 `slug` 프로퍼티는 page query에서 `$slug` 알규먼트가 된다. 

[^각주1]: `gatsby-node.js`에서 `createPage` 함수의 파라미터인 context

```js
`gatsby-node.js`

data.allMarkdownRemark.edges.forEach(edge => {
  const slug = edge.node.fields.slug
  actions.createPage({
    path: slug,
    component: require.resolve(`./src/templates/blog-post.js`),
    context: { slug: slug },
  })
})

`blogPost.js`

export const query = graphql`
  query($slug: String!) {
    ...
  }
`
```
### Migrating Remark to MDX
[link](https://www.gatsbyjs.com/docs/how-to/routing/migrate-remark-to-mdx/)