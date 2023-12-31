


  import ModalCss from './modal.module.css'
  import 'react-responsive-modal/styles.css';
  import { Modal } from 'react-responsive-modal';
import { Box } from '../generalboxes';
  import {GrFormClose} from 'react-icons/gr'
  

  
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