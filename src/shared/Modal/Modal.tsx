

import {
    MdClose
  } from 'react-icons/md';
  import { AiOutlineWarning } from 'react-icons/ai';
  import ModalCss from './modal.module.css'
  import 'react-responsive-modal/styles.css';
  import { Modal } from 'react-responsive-modal';
import { Box } from '../generalboxes';
  import {GrFormClose} from 'react-icons/gr'
import Button from '../Button/Button';
  
  const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor:'white',
        background:'transparent',
        border:'transparent',
        // border:'1px solid red',
        borderRadius:'1px',
        'outline':'none',
        padding:'unset ',
        // 'maxHeight':'600px'
        // PointerEvent:''
        // "margin":"0 auto",
      },
      
      overlay:{
        backgroundColor:'#000000b5',
        'zIndex':500
      }
    };
  
  const closeIcon  =(
   <GrFormClose style={{'fontSize':'1.5rem','transform':'translateY(-2px)'}} />
  )
    export interface CustomModalType{
      modalIsOpen:boolean;
      setModalIsOpen:(value:boolean)=>void;
      element:React.ReactElement;
      heading?:string;
    }
    const CustomModal=({setModalIsOpen,modalIsOpen,element,heading='Heading'}:CustomModalType):React.ReactElement=>{
  
      function closeModal() {
        setModalIsOpen(false)
      }
    
    
    
      return (
        <Box>
          {
            modalIsOpen?
            <Modal
        open={modalIsOpen}
        onClose={closeModal}
        classNames={{
          modal: ModalCss.customModal,
          modalContainer: ModalCss.customOverlay
        }}
        // animationDuration={1}
        closeIcon={closeIcon}
        >
            <Box css={{
                'minWidth':'360px',
                'padding':'1rem',
                'h3':{
                    'color':'#010E05',
                    'fontSize':'.9rem'
                },
                '@bp2':{
                'minWidth':'700px',
                }
            }}>
                <h3>{heading}</h3>
                <br></br>
            {
            element
            }

            </Box>
        </Modal>:''
          }
        </Box>
      );
    }
    


    export default CustomModal