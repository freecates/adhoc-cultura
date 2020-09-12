import styled from 'styled-components'
import { Transition } from 'react-spring'
import Layout from '../components/MyLayout'

const Positioner = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

function MyApp(props) {
  const { Component, pageProps } = props

  return (
    <Transition
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
      keys={props.router.route}
    >
      {style => (
        <Positioner style={style}>
          <Layout layout>
            <Component {...pageProps} />
          </Layout>
        </Positioner>
      )}
    </Transition>)
}

export default MyApp