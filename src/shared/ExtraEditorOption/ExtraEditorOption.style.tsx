import { styled } from "../../../stitches.config";




export const  ExtraEditorOptionContainer = styled('div',{
    'color':'$black100',
    'backgroundColor':'$green100',
    'width':'35px',
    'height':'35px',
    borderRadius:'50%' ,
    display:'flex',
    alignItems:'center',
    'justifyContent':'center',
    fontSize:'1.3rem',
    cursor:'pointer'
})

export const OptionsStyles = styled('div',{
        'display':'flex',
        'gap':'0 10px',
        'padding':'.4rem 1rem',
        'margin':'.4rem 0',
        'cursor':'pointer',
        'svg':{
            'fontSize':'1.1rem'
        },
        'h3':{
            'color':'$black200'
        },
        'p':{
            'color':'#343e37d5'
        },
        '&:hover':{
            'backgroundColor':'$green100'
        }
})