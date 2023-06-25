import { InputWithLabelContainer } from './InputWithLabel.style'
import type * as Stitches from '@stitches/react';

type Prop = {
    errorMessage?:string,
    label?:string,
    placeholder?:string;
    register?:any;
    type?:'password'|'text'|'date'|'datetime-local'|'number'
    css?: Stitches.CSS,
    isTextArea?:boolean;
    defualtValue?:any;
    disabled?:boolean,
    inputID?:string;

    row?:number
}

const  InputWithLabel = ({row=2,inputID,disabled=false,defualtValue,isTextArea=false,label,placeholder='',errorMessage,type='text',register,css={}}:Prop):React.ReactElement=>{
    return (

            <InputWithLabelContainer  css={css}>
            {
                label?
                <label htmlFor={inputID}>{label}</label>
                :''
            }
                {
                    !isTextArea?
                    <input 
                    id={inputID} 
                    type={type} placeholder={placeholder} 
                    value={defualtValue}
                    disabled={disabled}
                    {...register}/>:
                    <textarea 
                    value={defualtValue}
                    rows={row}
                    disabled={disabled}
                    placeholder={placeholder} {...register}>

                    </textarea>
                }
                
            <span style={{'color':'crimson'}}>{errorMessage?.replace(/[^\s]*/,label?label:'')}</span>
        </InputWithLabelContainer>
    )
}

export default InputWithLabel


