import React from 'react'
import Link from 'gatsby-link'
import styled from '../../node_modules/styled-components';
import PostListing from '../components/PostListing';

const IndexPage = ({data}) => (
  <div>
    <h1>{data.site.siteMetadata.title}</h1>        
    <p>{data.site.siteMetadata.desc}</p>
    {data.allMarkdownRemark.edges.map(({node}) => {
      return <PostListing key={node.id} post={node} />
    })}
  </div>
)

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
        desc
      }
    }  
    allMarkdownRemark(sort: {
      fields: [frontmatter___date]
    }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMM YYYY")
          }
          fields {
            slug
          }
          html
          excerpt(pruneLength: 280)
        }
      }
    }
  }
`
