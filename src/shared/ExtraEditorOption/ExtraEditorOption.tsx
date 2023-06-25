import { Box } from "../generalboxes"

import {useState} from 'react'
import {IoMdAdd} from  'react-icons/io'
import { ExtraEditorOptionContainer, OptionsStyles } from "./ExtraEditorOption.style"
import {AiFillPicture} from 'react-icons/ai'
import {TiVideo} from 'react-icons/ti'
import {IoShareSocialSharp} from 'react-icons/io5'

type EachOptionProp = {
    heading:string;
    text:string;
    value:string;
    Icon:React.ReactElement;
    onClick:(value:string)=>void
}
const EachOption =({Icon,heading,text,value,onClick}:EachOptionProp)=>(<OptionsStyles
onClick={()=>{
    onClick(value)
}}
>
{Icon}
    
        <Box>
            <h3>{heading}</h3>
            <p><small>{text}</small></p>
        </Box>
    </OptionsStyles>)

type ExtraEditorOptionProp ={
    onSelect:(value:string)=>void
}
const ExtraEditorOption = ({onSelect}:ExtraEditorOptionProp)=>{
    const [showOptions,setShowOptions]=useState(false)
    const handleClick=(value:string)=>{
        setShowOptions(false)
        onSelect(value)
    }
    return (
           <Box>
             <ExtraEditorOptionContainer onClick={()=>{
                setShowOptions(!showOptions)
             }}>
                <IoMdAdd />
            </ExtraEditorOptionContainer>
            {
                showOptions?
                
            <Box css={{
                'backgroundColor':'$white50',
                'borderRadius':'10px',
                'width':'277px',
                'padding':'.8rem 0',
                'transform':'translateY(10px)',
                '.title':{
                    'color':'#333333c6',
                    'padding':'0 1rem',
                    paddingBottom:'1rem',
                }
            }}>
                <p className="title">EMBEDS</p>
                <Box
                css={{
               
                }}
                >
                        
                        <EachOption
                        Icon={<AiFillPicture/>}
                        heading="Picture"
                        text="jpeg,png"
                        value="pics"
                        onClick={(value)=>{
                            handleClick(value)
                        }}
                        />


                        <EachOption
                        Icon={<TiVideo/>}
                        heading="Video"
                        text="Embed a YouTube Video"
                        value="youtube"
                        onClick={(value)=>{
                            handleClick(value)
                        }}
                        />

                        <EachOption
                        Icon={<IoShareSocialSharp/>}
                        heading="Social"
                        text="Embed a Facebook link"
                        value="social"
                        onClick={(value)=>{
                            handleClick(value)
                        }}
                        />

                </Box>
            </Box>:''
            }

           </Box>
    )
}

export default ExtraEditorOption