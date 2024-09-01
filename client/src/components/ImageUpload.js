import React from 'react'
import {useState} from 'react'
import {Component} from 'react'

function ImageUpload (){
    const [image, setImage] = useState('')
    function handleImage(e){
        console.log(e.target.files)
        setImage(e.target.files[0])
    }
    return (
        <div>
            <input type = 'file' name= 'file' onChange={handleImage}/>
            <button>Aceptar</button>
        </div>
    )
}

export default ImageUpload;