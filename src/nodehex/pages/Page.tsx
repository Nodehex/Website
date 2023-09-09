import { Box } from "@mui/material"
import React from "react"
import Footer from "../components/Footer"
import { Column, ThemedBox } from "../components/Util"

const Page = ({ children }: { children: React.ReactNode }) => {

  return (
    <ThemedBox variant="dark">
      <Column style={{ width: '100%' }}>
        <Box style={{ flexGrow: '1', width: '100%' }}>
          { children }
        </Box>
        <Footer/>
      </Column>
    </ThemedBox>
  )
}

export default Page