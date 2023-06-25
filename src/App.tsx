
import { Box } from './shared/generalboxes';
import { globalStyles } from '../stitches.config';
import CustomEditor from './shared/CustomEditor/CustomEditor';
function App() {

globalStyles()//for stiches.dev config

  return (
    <Box css={{'backgroundColor':'$gray50','width':'100vw','height':'100vh'}}>
      <br /><br /><br />

      <CustomEditor/>
    </Box>
  )
}

export default App

