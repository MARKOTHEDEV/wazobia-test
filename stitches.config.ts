import { createStitches } from '@stitches/react';



export const {
    styled,
    
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
  } = createStitches({
    theme: {
      colors: {
        green50:'#E7EFFB',
        green100:'#E7F1E9',
        'red50':'#EF4444',
        white50:'#FFFFFF',
        gray50:'#FAFAFA',
        black50:'#333333',
        black100:'#212121',
        black150:'#343E37',//text
        black200:'#010E05',
        blue50:'#F7FCF8'
      },
      
    //   conditions:{
    //     bp1:'@media (min-width:400px)',
    //   }
    },
    media: {
      bp1: '(min-width: 400px)',
      bp2: '(min-width: 500px)',
      bp3: '(min-width: 1000px)',
      bp4: '(min-width: 1300px)',
      bp5: '(min-width: 1500px)',
      bp16: '(min-width: 1500px)',
      bp17: '(min-width: 1700px)',
      bp18: '(min-width: 1800px)',
      bp19: '(min-width: 1900px)',
      bp300:'(min-width: 300px)',
      bp900:'(min-width: 900px)',
      bp600:'(min-width: 600px)',
      bp700:'(min-width: 700px)',
    },  
    utils: {
    },
    
  });
  

 export const globalStyles = globalCss({
  '@font-face':[

  ],
  '@import':[
    "url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,900&family=Ubuntu:ital,wght@0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap')",
    "url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,900&family=Rubik:wght@400;500;600&family=Ubuntu:ital,wght@0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap')"
  ],
    '*':{
      // 'color':'$white',
      'listStyleType':'none',
      fontFamily: 'Rubik',
      'margin':'0',
      'padding':'0',
      'boxSizing':'border-box',
      fontStyle: 'normal',
    },
    'body':{

    },
   
  })
  // ../assets/fonts/static/SpaceGrotesk-Bold.ttf