import ReactDOM from 'react-dom';
import React, { useRef, useState } from 'react';
// import ReactCrop, { makeAspectCrop } from 'react-image-crop';
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
// import 'react-image-crop/dist/ReactCrop.css';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import SelectInput from '@/Components/SelectInput';
import axios from 'axios';
import { Textarea } from '@headlessui/react';
import DefaultEditor from 'react-simple-wysiwyg';
// import TextArea from '@/Components/TextArea';

// import './App.css';

export default function AddProject (props) {
  const [state, setState] = useState({
    message: "",
    response: "",
    src: null,
    processing: false,
    data: {
      title: '',
      description: '',
      file: '',
    }
  });

  const [image, setImage] = useState('');
  const [cropData, setCropData] = useState("");
  const cropperRef = useRef(null);
  const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  function dataURLtoFile(dataURL, filename) {
    const arr = dataURL.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
  
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
  
    return new File([u8arr], filename, { type: mime });
  }

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
      setState({
        ...state,
        data: {
          ...state.data,
          file: dataURLtoFile(cropperRef.current?.cropper.getCroppedCanvas().toDataURL(), "cropped.png")
        }
      })
    }
  };
  

  const handleOnChange = (event) => {
      setState({
        ...state,
        data: {
        ...state.data,
        [event.target.name]:  event.target.value
      }});
      // console.log(data)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(state);
    

    try {
      if(
        cropData && 
        state.data.title.length > 0 && 
        state.data.description.length > 0
      ){

        setState({
          ...state,
          formError: false,
          processing: true
        })
        
        let fd = new FormData();
        fd.append('title', state.data.title);
        fd.append('description', state.data.description);
        fd.append('file', state.data.file);
  
      //   const API = "group_util_uploadImage";
      // const HOST = "https://us-central1-wisy-dev.cloudfunctions.net";
      const config = {
        headers: {
          "content-type": "multipart/form-data"
        }
      };
      const url = `/projects/post`;
  
        const result = await axios.post(url, fd, config);
        console.log(result);
        setState({
          ...state,
          response: result.data,
          error: false,
          src: null,
          processing: false,
          data: {
            title: '',
            description: '',
            file: '',
          }
        });
        window.scrollTo(0, 0)
      }
      else
      {
        setState({
          ...state,
          formError: true,
          processing: false
        })
      }
    } catch (error) {
      console.error(error.response.data);
      setState({
        ...state,
        response: error.response.data,
        error: true,
        processing: false
      });
      window.scrollTo(0, 0);
    }
  }
    const { crop, croppedImageUrl, src } = state;
    const {closeAdd, message} = props;

    

    const handleClose = () => {
      closeAdd()
    }
    // console.log(crop);
    console.log(croppedImageUrl);
    console.log(props.cat);

    return (
      <div className="absolute overflow-y-scroll flex top-0 left-0 z-40 justify-center w-full min-h-full bg-dark-blue bg-opacity-50">
        <div className="w-full md:w-11/12 min-h-full bg-white">
          <div onClick={handleClose} className="cursor-pointer close ml-auto"><i className="las la-times text-3xl"></i></div>
          <div className="text-center text-xl">Post a writeup</div>
          {
            !state.error && state.response &&
            <div className={`w-full text-center p-2 text-success-txt bg-[#88ff88]`}>
              {state.response.message}
            </div>
          }
          {
            state.error &&
            <div className={`w-full text-center p-2 bg-danger-bg text-danger-txt`}>
              {state.response.message}
            </div>
          }
          {
            state.formError &&
            <p className='bg-danger-bg text-danger-txt'>Make sure you fill all fields.</p>
          }

          
          <div className="App p-5">
            <div className="">
              <div className='picture w-full'>
                <div className=''>
                  <input className='' accept="image/png, image/gif, image/jpg, image/jpeg" type="file" onChange={onChange} />
                </div>
                <div className=' sm:flex flex-wrap'>
                  
                  <div className="">
                    {
                        image &&
                        <Cropper
                            style={{ height: 400, width: "100%" }}
                            initialAspectRatio={16/9}
                            src={image}
                            ref={cropperRef}
                            viewMode={1}
                            guides={true}
                            minCropBoxHeight={10}
                            minCropBoxWidth={10}
                            background={false}
                            aspectRatio={16/9}
                            responsive={true}
                            checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                        />
                    }
                    {image &&
                    <button className='my-2 bg-silver p-2 rounded-lg border shadow border-[#aaa]' onClick={getCropData}>
                        Crop Image
                    </button>
                    }
                  </div>
                  <div className='px-4'>
                    {cropData && (
                      <img alt="Cropped Image" style={{width:400}} src={cropData} />
                    )}
                  </div>
                </div>
              </div>
              <div className="form w-full sm:w-7/12">
                <form onSubmit={(e) => {handleSubmit(e)}} >
                    <div className="my-1">
                        <TextInput 
                            id="title"
                            name="title"
                            autoComplete="Title"
                            value={state.data.title}
                            onChange={handleOnChange}
                            className=' w-full'
                            placeholder='Post Title'
                        />
                    </div>
                    <div className="my-1">
                        <DefaultEditor id="description"
                            name="description"
                            value={state.data.description}
                            onChange={(e) => {handleOnChange(e)}}
                            tagName="p"
                            className='w-full h-84'
                            rows="10"
                            placeholder=''
                        />
                        {/* <Textarea
                            id="content"
                            name="content"
                            rows="10"
                            value={state.data.content}
                            onChange={}
                            className=' w-full'
                            placeholder='Enter the post content here'
                        /> */}
                    </div>
                    <PrimaryButton  className=" bg-blue w-full flex text-center hover:bg-dark-blue" disabled={state.processing}>
                        <p className="text-center mx-auto">Submit</p>
                    </PrimaryButton>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}


