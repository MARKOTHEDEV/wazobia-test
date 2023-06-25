import { Flex, Label, SwitchRoot, SwitchThumb } from "./Switch.style";
import { Box } from '../generalboxes';



type Prop = {
    label:string;
    onChange:(value:boolean)=>void;
    defaultChecked?:boolean;
    value:boolean
}
const Switch = ({onChange,label,value}:Prop):React.ReactElement=>{
    return (
        <Box>
                <Flex css={{ alignItems: 'center',}}>
    
      <SwitchRoot checked={value}  id="airplane-mode" onCheckedChange={(value:boolean)=>{
        onChange(value)
      }}>
        <SwitchThumb />
      </SwitchRoot>
      <Label  htmlFor="airplane-mode" >
          {label}
      </Label>

    </Flex>

        </Box>
    )
}

  
export default Switch