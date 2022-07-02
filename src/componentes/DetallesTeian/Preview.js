import React, {useState} from 'react'


const Preview = ({file}) =>{
    const [preview, setPreview] = useState(null)

    const reader = new FileReader()
    reader.readAsDataURL(file);
    reader.onload = () =>{
        setPreview(reader.result)
    }
    return(
        <>
        {preview ?  <img src={preview} alt="preview" width="50px" height="50px"/>: "loading.."}
        </>
    )
}

export default Preview