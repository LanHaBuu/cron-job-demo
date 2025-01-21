import Box from '@/components/commonStyled/Box'
import Hero from '@/components/Hero'
import styled from 'styled-components'
import Introduce from '@/components/Introduce'
import TokenOmics from '@/components/TokenOmics'
import Roadmap from '@/components/RoadMap'
const StyledHome = styled(Box)`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export default function Home() {
  return (
    <StyledHome>
      <Hero />
      <Introduce />

      <TokenOmics />
    </StyledHome>
  )
}
