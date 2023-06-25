import { Box } from "../generalboxes"
import { useState ,useRef} from 'react'
import { Editor ,} from '@tinymce/tinymce-react';
import ExtraEditorOption from "../ExtraEditorOption/ExtraEditorOption";
import CustomModal from "../Modal/Modal";

import {CreationOfFaceBookAndTicktok, CreationOfVimeoAndYoutube, FileUpload} from "../ElementCreationForms/ElementCreationForms";
import Button from "../Button/Button";



const CustomEditor = ()=>{ 
    const [modalIsOpen,setModalIsOpen]= useState(false)
    const editorRef = useRef(null);
    const  [value,setValue]=useState<string>()
    const [selectedVariant,setSelectedVariant]= useState<'youtube'|'pics'|'social'>()

    const handleOnSave =(new_value:string)=>{
      setValue(value+new_value)
    }
    return (  
        <Box>
            <CustomModal
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
            heading={'Embed'}

            element={<Box>
                {
                  selectedVariant==='youtube'?
                  <CreationOfVimeoAndYoutube 
                  onSave={new_value=>handleOnSave(new_value)}
                  setModal={setModalIsOpen}
                  />:''
                }
                {
                  selectedVariant ==='social'?
                  <CreationOfFaceBookAndTicktok
                  onSave={new_value=>handleOnSave(new_value)}

                  setModal={setModalIsOpen}
                  />:''
                }
                {
                  selectedVariant ==='pics'?
                  <FileUpload
                  setModal={setModalIsOpen}
                  onSave={new_value=>handleOnSave(new_value)}

                  />:''
                }

            </Box>}
            />
 <Box css={{'maxWidth':'1000px','margin':'0 auto','border':'1px solid $green100','borderRadius':'5px','overflow':'hidden'}}>
        <Box css={{'padding':'1.5rem 0','border':'1px solid $green100',}}></Box>
          <Box css={{'padding':'1rem .8rem','color':'$black150','minHeight':'70vh'}}>
          <Editor
        
        value={value}
        ref={editorRef}
        onEditorChange={(newValue,)=>{
          setValue(newValue)
        }}
          apiKey={
            process.env.NODE_ENV == 'production'?
            process.env.REACT_TINY_API:''}
        
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
            if(value==='youtube'||value=='social' || value =='pics'){
              setSelectedVariant(value)
              setModalIsOpen(true)
            }
            
          }}
          />
          </Box>
          <Box css={{'backgroundColor':'White','padding':'.5rem 1rem','textAlign':'right'}}>
              <p>{value?.length??0}/1000 words</p>
          </Box>
      </Box>
      <Box css={{'maxWidth':'1000px','margin':'0 auto'}}>
          <Button css={{'margin':'1rem 0','marginLeft':'auto'}}>Post</Button>
      </Box>

        </Box>
    )
}

export default CustomEditor