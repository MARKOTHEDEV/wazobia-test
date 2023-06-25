import Button from "../Button/Button"
import InputWithLabel from "../InputWithLabel/InputWithLabel"
import SelectWithLabel from "../SelectWithLabel/SelectWithLabel"
import { Box } from "../generalboxes"


import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Switch from "../Switch/Switch";
import { useState } from "react";



const schema = yup.object({
  provider:yup.string().required(),
  url:yup.string().required(),
})

export type FormI = yup.InferType<typeof schema>


type Prop ={
    setModal:any;
    onSave:(value:string)=>void
}
export const CreationOfVimeoAndYoutube= ({setModal,onSave}:Prop)=>{

    const { register, handleSubmit, setValue,formState: { errors } } = useForm<FormI>({
        resolver: yupResolver(schema)
      });
      const onSubmit = (data: FormI) =>{
        // data.url.slice(-11) means get just the id of the video
        const youbtube=`<iframe width="560" height="315" src="https://www.youtube.com/embed/${data.url.slice(-11)}"
         title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
        clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
        const vimeo=`<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/${
          data.url.replace(/^\D+/g, '').slice(0,9)
        }?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" 
        title="${data.provider}"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`
        onSave(data.provider==='youtube'?youbtube:vimeo)
      }
    return (
        <Box>
            <form 
            
         onSubmit={handleSubmit(onSubmit)}
         >
            <br /><br />
              <SelectWithLabel
              setValue={setValue}
              name='provider'
              errorMessage={errors.provider?.message}
              options={[
                {'label':'YouTube','value':'youtube'},
                {'label':'Vimeo','value':'Vimeo'},
              ]}
              label="VIDEO PROVIDER"
              />
              <br />
              <InputWithLabel
              label="URL" 
              register={register('url')}
              errorMessage={errors.url?.message}
               />
                           <Box css={{'display':'flex','gap':'0 10px','padding':'.6rem 0'}}>
                <Button>Embed</Button>
                <Button color='white'
                onClick={e=>{
                    e.preventDefault()
                    if(setModal){
                        setModal(false)
                    }
                }}
                >Cancel</Button>
            </Box>
            </form>
        </Box>
    )
}






const faceBookTickTockschema = yup.object({
  code :yup.string().required(),
  socials_plat:yup.string().required(),
  url:yup.string().required(),
})
export type faceBookTickTockschemaI = yup.InferType<typeof faceBookTickTockschema>

export const CreationOfFaceBookAndTicktok = ({setModal,onSave}:Prop)=>{

  const { register, handleSubmit, setValue,formState: { errors } } = useForm<faceBookTickTockschemaI>({
    resolver: yupResolver(faceBookTickTockschema)
  });
  const [isChecked,setIsChecked] = useState(false)

  const onSubmit = (data: faceBookTickTockschemaI) =>{
    console.log(data)
    onSave(data.code)
  }
  return (
    <Box>
      <form 
      onSubmit={handleSubmit(onSubmit)}
      >

        
      <br /><br />
      <SelectWithLabel
      label="SOCIAL MEDIA PLATFORM"
      setValue={setValue}
      name="socials_plat"
      options={[
        {'label':'FaceBook','value':'facebook'},
        {'label':'TicToc','value':'tictoc'},
      ]}
      css={{'marginBottom':'10px'}}
      errorMessage={errors.socials_plat?.message}
      />
            <InputWithLabel
      register={register('url')}
      errorMessage={errors.url?.message}

      label="URL" 
      />
                  <InputWithLabel
      label="CODE" 
      register={register('code')}
      errorMessage={errors.code?.message}
      />
      <Box css={{'padding':'.5rem 0',
      color:'$black50',
      fontSize:'.7rem',
      fontWeight:400,
      'display':'flex','alignItems':'center','justifyContent':'space-between'}}>
        <p>Disable caption</p>
        
        <Switch
                label=""
                onChange={(value)=>{
                    //
                    setIsChecked(!isChecked)
                }}            
                defaultChecked={true}
                value={isChecked}
                />
      </Box>
                                 <Box css={{'display':'flex','gap':'0 10px','padding':'.6rem 0'}}>
                <Button>Embed</Button>
                <Button color='white'
                onClick={e=>{
                    e.preventDefault()
                    if(setModal){
                        setModal(false)
                    }
                }}
                >Cancel</Button>
            </Box>
      </form>
    </Box>
  )
}

export const FileUpload = ({setModal,onSave}:Prop)=>{
  const [image,setImage]= useState<any>()

  const handleImport =(e: React.ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault()
    const input = e.target as HTMLInputElement;
    if (!input.files?.length) {
      return;
    }
    setImage(URL.createObjectURL(input.files[0]))
  }
  return (
    <Box css={{
      'h3':{
        'color':'$black150','fontWeight':'500',
        'marginBottom':'.7rem'
      }
    }}>
        <h3>Upload Image</h3>
        <Box 
        css={{'label':{
          color:'$black50',
          fontSize:'.7rem',
          fontWeight:400,
        }}}
        >
          <label htmlFor="">FILE UPLOAD</label>
          <Box css={{'border':'1px dashed  #0A7227','minHeight':'100px','backgroundColor':'$gray50','borderRadius':'5px','display':'flex','alignItems':'center','justifyContent':'center',
          'marginTop':'.5rem',
          
        }} >
              <label htmlFor="importdevice" style={{'cursor':'pointer'}}>
            <Button color='white' css={{'border':'1px solid #6CAA7D','pointerEvents':'none'}}>
                Import Image from Device
            </Button>
              </label>

            <input type="file"
            id={'importdevice'}
            style={{'display':'none'}}
            onChange={handleImport}/>
          </Box>
        </Box>

        <Box css={{'display':'flex','gap':'0 10px','padding':'.6rem 0'}}>
                <Button
                onClick={e=>{
                  e.preventDefault()
                  onSave(`<img src="${image}" alt="hive-deck-img" />`)
                  setModal(false)

                }}
                >Embed</Button>
                <Button color='white'
                onClick={e=>{
                    e.preventDefault()
                    if(setModal){
                        setModal(false)
                    }
                }}
                >Cancel</Button>
            </Box>
    </Box>
  )
}