import App, { Container } from 'next/app'
import React from 'react'
import styled from 'styled-components'
import { Transition } from 'react-spring'
import Layout from '../components/MyLayout'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Transition
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
          keys={this.props.router.route}
        >
          {style => (
            <Positioner style={style}>
              <Layout layout>
                <Component {...pageProps} />
              </Layout>
            </Positioner>
          )}
        </Transition>
      </Container>
    )
  }
}

const Positioner = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
