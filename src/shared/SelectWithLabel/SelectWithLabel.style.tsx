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
    'position':'absolute',
    'top':'40%',
    'right':'10px',
    'pointerEvents':'none'
   },
   'label':{
    color:'$black50',
    fontSize:'.7rem',
    position:'absolute',
    'top':'-25px'
   }
})

