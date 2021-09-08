import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

export default function IndexPage({ data }) {
  const { title, description } = data.site.siteMetadata

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <Link to="/blog/let-there-be-light/">Go to my first Markdown blog post</Link>

      <img alt="Cute dog" src={data.image.publicURL} />
    </div>
  )
}

export const pageQuery = graphql`
  query MetadataQuery {
    site {
      siteMetadata {
        title
        description
      }
    }

    image: file(base: { eq: "robin.jpeg" }) {
      publicURL
    }
  }
`