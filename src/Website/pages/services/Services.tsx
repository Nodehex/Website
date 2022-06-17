import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom"
import MarkDown from "../../components/MarkDown";
import Page from "../Page"

const OM = () => {
  return (
    <Container>
      <MarkDown filename="om"></MarkDown>
    </Container>
  )
};

const Services = () => {
  return (
    <Page>
      <Routes>
        <Route path="/" element={<OM/>}></Route>
        <Route path="/om" element={<OM/>}></Route>
      </Routes>
    </Page>
  )
};

export default Services