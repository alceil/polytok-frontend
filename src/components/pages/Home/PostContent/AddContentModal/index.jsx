import {React,useState} from 'react'
import Modal from '../../../../common/Modal'
import TextInput from '../../../../common/TextInput'
import { useDispatch } from "react-redux"
import Button from '../../../../common/Button'
import {addNewPost} from '../../../../../redux/slices/posts.slice'
const AddContentModal = ({isOpen, onClose}) => {
  const [inputData,setInputData] = useState(
    {
      title: "",
      description: "",
      imageUrl: "",
    }
    )
  const dispatch = useDispatch();
  const handlePostSubmit=(e)=>{
    e.preventDefault();
dispatch(addNewPost(inputData))
onClose();
  }


  const handleInputChange = (inputName) => (e) => {
    setInputData((initialValues) => ({ ...initialValues, [inputName]: e.target.value }));
  }; 

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <div className='body-modal'>
            <div className='body-head'>
                    <h1 className='body-title'>Log in</h1>
            </div>
            <form onSubmit={handlePostSubmit} className="body-form">
                <TextInput
                 label="Title"
                 onChange={handleInputChange('title')}
                 />

<TextInput
                 label="Description"
                 onChange={handleInputChange('description')}
                 />
<TextInput
                 label="Image Url"
                 onChange={handleInputChange('imageUrl')}
                 />
<Button >
  Post
</Button>

            </form>
        </div>
    </Modal>
  )
}

export default AddContentModal