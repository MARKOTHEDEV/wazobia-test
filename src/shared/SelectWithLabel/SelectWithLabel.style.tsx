import { styled } from "../../../stitches.config"



export const SelectWithLabelContainer = styled('div',{
   
    'position':'relative',
    
    'select':{
        width:'100%',
        padding: '.7rem',
        'backgroundColor':'$gray50',
        border: '1px solid $green100',
        borderRadius:'5px',
        '-webkit-appearance': 'none',
    
    '&:focus':{
        'border':'1px solid $green100',
    }
    },
   'svg,img':{
    'color':'#4D5650',
    'position':'absolute',
    'top':'25%',
    'right':'5px',
    'pointerEvents':'none',
    'fontSize':'1.2rem'
   },
   'label':{
    color:'$black50',
    fontSize:'.7rem',
    position:'absolute',
    'top':'-25px'
   }
})

