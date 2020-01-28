import React, { FC } from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { App } from '../components/App'

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

type IndexPageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const Index: FC<IndexPageProps> = ({ data }) => (
  <App>
    <Wrapper>
      <Title>Hi people</Title>
      <Text>
        Welcome to your new <Strong>{data.site.siteMetadata.title}</Strong>.
        <br />
        Now go build something great.
      </Text>
      <TextLink to="/page-2/">Go to page 2</TextLink>
    </Wrapper>
  </App>
)

export default Index

const Wrapper = styled.div`
  padding: 2.4rem;
`
const Title = styled.h1`
  margin-bottom: 1.6rem;
  font-size: 3rem;
`
const Text = styled.h1`
  margin-bottom: 1.6rem;
  font-size: 1.8rem;
  line-height: 1.5;
`
const Strong = styled.strong`
  font-weight: bold;
`
const TextLink = styled(Link)`
  color: blue;
  font-size: 1.6rem;
  text-decoration: underline;
`
