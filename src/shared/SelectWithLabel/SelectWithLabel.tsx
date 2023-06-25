import { SelectWithLabelContainer } from "./SelectWithLabel.style"
import {MdOutlineArrowDropDown} from 'react-icons/md'
import type * as Stitches from '@stitches/react';


type Prop = {
    label:string;
    setValue?:any;
    name:string 
    options:{label:string,value:string}[],
    css?: Stitches.CSS;
    errorMessage?:string;
}
const SelectWithLabel = ({label,setValue,name,options,css={},errorMessage}:Prop)=>{
    return (
        <SelectWithLabelContainer css={css}>
            <label htmlFor="">{label}</label>
            <select onChange={e=>{
                if(setValue){
                    setValue(name,e.target.value)
                }
            }}>
                <option   selected>select option</option>

                {
                    options.map(({label,value},index)=>(
                        <option key={index} value={value} >{label}</option>
                    ))
                }
            </select>
            <MdOutlineArrowDropDown />
            <span style={{'color':'crimson'}}>{errorMessage?.replace(/[^\s]*/,label?label:'')}</span>
        </SelectWithLabelContainer>
    )
}

export default SelectWithLabel