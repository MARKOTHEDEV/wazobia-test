import type * as Stitches from '@stitches/react';
import { styled } from '../../../stitches.config'



export const InputWithLabelContainer =styled('div',{
    position:'relative',
    // 'margin':'0 auto',
    // border:'1px solid green',
    'width':'100%',
    'input , textarea':{
        padding: '.7rem',
        display:' block',
        width: '100%',
        outline: 'none',
        border: '1px solid $green100',
        borderRadius: '5px',
        'margin':'5px 0',
        backgroundColor:'$gray50',
        
    },
    'input:focus':{
        'border':'1px solid $green100',
    },
    'textarea:focus':{
        'border':'1px solid $green100',
    },
    'label , textarea':{
        color:'$black50',
        fontSize:'.7rem',
        fontWeight:400
    },
    '.inputIconContainer':{
        position:'absolute',
        transform:'translateY(-40px)',
        // 'border':'1px solid red',
        'width':'100%',
        justifyContent:'space-between',
        'display':'flex',
        'padding':'0 .5rem',
        'pointerEvents':'none',
        'fontSize':'1.2rem'
        
    },
    '.inputIconContainer div:last-child':{
            // transform:'translateX(30px)'
    },
    'variants':{
        'color':{
            'danger':{
                'color':'$red',
                'input , textarea':{
                    'border':'1px solid $red'}
            },
        }
    }
})

