import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { App } from '../components/App'

const SecondPage = () => (
  <App>
    <Wrapper>
      <Title>Hi from the second page</Title>
      <Text>Welcome to page 2</Text>
      <TextLink to="/">Go back to the homepage</TextLink>
    </Wrapper>
  </App>
)

export default SecondPage

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
const TextLink = styled(Link)`
  color: blue;
  font-size: 1.6rem;
  text-decoration: underline;
`
