import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom"
import { useTranslation } from "react-i18next";
import MarkDown from "../../components/MarkDown";
import Page from "../Page"

const OM = () => {
  const { t, i18n } = useTranslation();
  const [fileName, setFileName] = useState("");
  useEffect(() => {
    setFileName(`om_${ fileName }`)
  }, [i18n.language])
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