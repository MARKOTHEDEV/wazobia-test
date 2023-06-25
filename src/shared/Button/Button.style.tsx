import type * as Stitches from '@stitches/react';
import { styled } from '../../../stitches.config';
// import { styled } from "../../../stitches.config";




export const StyledButton = styled('button',{
    border:'transparent',
    borderRadius:'4px',
    padding:' .5rem 1rem',
    fontSize:'1rem',
    'textAlign':'center',
    cursor:'pointer',
    display:'block',
    // 'outline':'none',
    'position':'relative',
    
    'transition':'all .2s ease-in-out',
    backgroundColor:'#0A7227',
    'color':'White',
    '&:hover':{
        backgroundColor:'#0A7227'
    },
    '&:focus':{
        outline: '#0A7227 solid 2px',
        border:'2px solid white ',
     
    },
    '& .btn_icon':{
        fontSize:'1.2rem',
        padding:'0',
        'transform':'translateY(3px)',
        display:'inline-block',
        '&.left':{
        },
        '&.right':{
            // paddingLeft:'.9rem',
        },
    },
    '& .btn_icon.left':{
            paddingRight:'.9rem',
    },
    '& .btn_icon.right':{
        paddingLeft:'.9rem',
    },
    variants:{
        'color':{
            'disable':{
                'opacity':.5
            },
            'white':{
                backgroundColor:'white',
                color:'$black150',
                'border':'1px solid $black150',
                '&:hover':{
                    backgroundColor:'white',
                    color:'$black150',
                    'border':'1px solid $black150',
                }
            },
            'danger':{
                backgroundColor:'transparent',
                color:'#D40F0F',
                'border':'1px solid #D40F0F',
                '&:hover':{
                    backgroundColor:'#D40F0F',
                    color:'white',       
                 }
            },
            'defualt':{}
        },
    }
})

export type StyledButtonVariants =   Stitches.VariantProps<typeof StyledButton>
