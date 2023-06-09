import { Grid, GridItem, } from "@chakra-ui/layout"
import { Show, Hide } from '@chakra-ui/react'
import NavBar from "./components/NavBar"


function App() {

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}>
      <GridItem area="nav"><NavBar /></GridItem>
      <Show above="lg">
        <GridItem area="aside">ASIDE</GridItem>
      </Show>
      <GridItem area="main">MAIN</GridItem>
    </Grid>
  )
}

export default App
