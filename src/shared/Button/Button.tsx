import React from 'react'
import { StyledButton,
    StyledButtonVariants
 } from './Button.style'
import type * as Stitches from '@stitches/react';


type Props = React.PropsWithChildren<{
    leftIcon?:React.ReactElement;
    RightIcon?:React.ReactElement;
    css?: Stitches.CSS
    type?:'button'|'submit'
    onClick?:(e:any)=>void;

}>

type ButtonType = Props & StyledButtonVariants

const Button = ({children,color,leftIcon,RightIcon,onClick=()=>null,type='submit',css={},...prop}:ButtonType):React.ReactElement=>{

    return (
        <StyledButton 
        type={type}
        onClick={onClick}
        color={color}
        css={css}
        >
         {
            leftIcon?
            <div className='btn_icon left'>
                {leftIcon}
            </div>:''} 
         {children}
         {
            RightIcon?
            <div className='btn_icon right'>
                {RightIcon}
            </div>:''}
        </StyledButton>
    )
}

export default Button