// @flow strict
import * as React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

import { prop, theme } from '../../Tools/interpolation'

type ContainerPropsType = { +size: string }

const bounceAnimation = keyframes`
  0%,
  100% { transform: scale(0); }
  50% { transform: scale(1); }
`

const Container = styled.div`
  position: relative;
  width: ${prop<ContainerPropsType>('size')};
  height: ${prop<ContainerPropsType>('size')};
`

const Circle1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  opacity: 0.7;
  background-color: ${theme('loaderColor')};
  animation: ${bounceAnimation} 2s infinite ease-in-out;
`

const Circle2 = styled(Circle1)`
  animation-delay: -1s;
`

export type PropsType = { +size?: string }

const HeartbeatLoader = (props: PropsType) => (
  <Container {...props}>
    <Circle1 />
    <Circle2 />
  </Container>
)

HeartbeatLoader.propTypes = {
  size: PropTypes.string.isRequired,
}

HeartbeatLoader.defaultProps = {
  size: '40px',
}

export default HeartbeatLoader
