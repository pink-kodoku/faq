import React, {useRef} from 'react';
import {Editor} from '@tinymce/tinymce-react';
import {Container} from "@mui/material";
import {Header} from "../../components/header";
import {Layout} from "../../components/layout";

const CreateQuestion = () => {
  const editorRef = useRef<any>(null);

  const getContent = () => {
    console.log(editorRef.current.getContent())
  }

  return (
    <Layout>
      <Editor onInit={(evt, editor) => editorRef.current = editor}/>
      <button onClick={getContent}>Get content</button>
    </Layout>
  );
};

export default CreateQuestion;