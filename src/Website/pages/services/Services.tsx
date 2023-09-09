import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { getLocale } from "react-i18nify";
import { Route, Routes } from "react-router-dom"
import MarkDown from "../../components/MarkDown";
import Page from "../Page"

const OM = () => {
  const locale = getLocale();
  const [fileName, setFileName] = useState("");
  useEffect(() => {
    setFileName(`om_${ fileName }`)
    console.log(fileName)
  }, [locale])
  return (
    <Container>
      <MarkDown filename={ fileName }></MarkDown>
    </Container>
  )
};

const Services = () => {
  return (
    <Page>
      <Routes>
        <Route path="/" element={<OM/>}></Route>
        <Route path="/om-manuals" element={<OM/>}></Route>
      </Routes>
    </Page>
  )
};

export default Services