import React from 'react'
import ClientPartner from '../components/HomePage/ClientPartner/ClientPartner'
import Quotes from '../components/HomePage/Quote/Quotes'
import SelectedProject from '../components/HomePage/SelectedProjects/SelectedProject'
import Service from '../components/HomePage/Service/Service'
import Slider from '../components/HomePage/Slider'

const HomePage = () => {
    return (
        <div style={{ margin: '0 4rem 2rem 4rem' }}>
            <Slider />
            <Service />
            <SelectedProject />
            <Quotes />
            <ClientPartner />
        </div>
    )
}

export default HomePage