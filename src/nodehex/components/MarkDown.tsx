import { Alert, Box, LinearProgress } from '@mui/material';
import React from 'react';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import styled from 'styled-components';

const LoadingError = () => (
  <Box mt={3} sx={{ display: 'flex' }}>
    <Alert severity="error">Somethign went wrong loading the page contents!</Alert>
  </Box>
)

const LoadingProgress = () => (
  <Box mt={3}>
    <LinearProgress color="secondary" />
  </Box>
);

const Media = (args: any) => {
  if (args['src']) {
    if (args['src'].includes('mp4')) return (
      <video controls>
        <source src={args['src']} type="video/mp4"/>
      </video>
      )
    return <img src={args['src']}></img>
  }
  return <img></img>
};

const MarkDown = ({filename}: {filename: string}) => {
  const [markdownText, setMarkdownText] = useState("");
  useEffect(() => {
    const file = new Request(`/markdown/${filename}.md`)
    fetch(file)
      .then(res => res.text())
      .then(text => setMarkdownText(text))
  });

  if (!filename) return <LoadingError></LoadingError>
  if (!markdownText) return <LoadingProgress></LoadingProgress>
  if (markdownText && markdownText.includes("<!DOCTYPE html>")) return <LoadingError></LoadingError>
  return (<ReactMarkdown remarkPlugins={[remarkGfm]} components={{img: Media}}>{markdownText}</ReactMarkdown>);
};

export default MarkDown;