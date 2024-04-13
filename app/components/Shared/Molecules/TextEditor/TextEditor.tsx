"use client";

import dynamic from 'next/dynamic';
import React, { useRef, useState } from 'react';
// import ReactQuill from 'react-quill';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import 'react-quill/dist/quill.snow.css';

type InputType = {
    value: any,
    onChange?:any,
    placeHolder?:string,
}

export default function TextEditor({value='', onChange=()=>null}:InputType) {
    const editorRef = useRef();
    const modules = {
        toolbar: [
          [{ font: [] }],
          [{ 'header': 1 }, { 'header': 2 }],
          ["bold", "italic", "underline", "strike"],
          [{ color: [] }],
          [{ script: "sub" }, { script: "super" }],
          ["blockquote", "code-block"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ indent: "-1" }, { indent: "+1" }],
          ["link"],
          ["clean"],
        ]
      }
    return (
        <>
            <ReactQuill
                theme="snow"
                value={value}
                modules={modules}
                onChange={(e) => onChange(e)}
                className="h-[400px]"
                // ref={editorRef}
                placeholder='Enter your content here...'
            />
        </>
    )
}