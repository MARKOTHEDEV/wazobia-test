import { Box } from "../generalboxes"
import { useState ,useRef} from 'react'
import { Editor ,} from '@tinymce/tinymce-react';
import ExtraEditorOption from "../ExtraEditorOption/ExtraEditorOption";






const CustomEditor = ()=>{

    const editorRef = useRef(null);
    const [value,setValue]=useState<string>()
    return (
        <Box>
 <Box css={{'maxWidth':'1000px','border':'1px solid $green100','margin':'0 auto'}}>
        <Box css={{'padding':'1.5rem 0','border':'1px solid $green100'}}></Box>
          <Box css={{'padding':'1rem .8rem','color':'$black150'}}>
          <Editor
        
        value={value}
        ref={editorRef}
        onEditorChange={(newValue,editor)=>{
          console.log(newValue)
          setValue(newValue)
        }}
          apiKey='your-api-key'
        
          initialValue="<h2>This is the title</h2>"
          init={{
            height: 500,
            menubar: false,
            inline:true,
            plugins: [
              'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
              'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
              'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
            ],
            toolbar: 'undo redo | blocks | ' +
              'bold italic forecolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
          />
          <br />
          <ExtraEditorOption 
          onSelect={value=>{
            console.log('display '+value)
          }}
          />
          </Box>
      </Box>
        </Box>
    )
}

export default CustomEditor