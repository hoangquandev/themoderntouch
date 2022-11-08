import React from 'react'
import { useState } from 'react'
import "./Slider.css"

const Slider = () => {
    const [zoom, setZoom] = useState(false)
    const zoomable = () => {
        if (window.scrollY > 0) {
            setZoom(true)
        } else {
            setZoom(false)
        }
    }
    window.addEventListener("scroll", zoomable)
    return (
        <div className='container' style={zoom ? { transform: "scale(1)", transition: "all 1s linear" } : { transform: "scale(4)", transition: "all 1s linear" }
        }>
            <div className='zoom'>Slider</div>
        </div >
    )
}

export default Slider