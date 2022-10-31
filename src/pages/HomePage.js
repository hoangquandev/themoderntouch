import React from 'react'
import Service from '../components/HomePage/Service/Service'
import Slider from '../components/HomePage/Slider'

const HomePage = () => {
    return (
        <div style={{ padding: '3rem 5rem' }}>
            <Slider />
            <Service />
        </div>
    )
}

export default HomePage