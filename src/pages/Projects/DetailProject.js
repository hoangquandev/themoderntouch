import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'

import Masonry from '../../components/project/Masonry'
import img1 from '../../assets/images/Diamond-image/72ppi/Artboard 2.png'
import img2 from '../../assets/images/Diamond-image/72ppi/Artboard 3.png'
import img3 from '../../assets/images/Diamond-image/72ppi/Artboard 4.png'
import img4 from '../../assets/images/Diamond-image/72ppi/Artboard 5.png'
import img5 from '../../assets/images/Diamond-image/72ppi/Artboard 6.png'
import img6 from '../../assets/images/Diamond-image/72ppi/Artboard 7.png'
import img7 from '../../assets/images/Diamond-image/72ppi/Artboard 8.png'
import img8 from '../../assets/images/Diamond-image/72ppi/Artboard 9.png'
import img9 from '../../assets/images/Diamond-image/72ppi/Artboard 10.png'
import img10 from '../../assets/images/Diamond-image/72ppi/Artboard 11.png'
import img11 from '../../assets/images/Diamond-image/72ppi/Artboard 12.png'
import img12 from '../../assets/images/Diamond-image/72ppi/Artboard 14.png'
import img13 from '../../assets/images/Diamond-image/72ppi/Artboard 15.png'
import img14 from '../../assets/images/Diamond-image/72ppi/Artboard 16.png'
import img15 from '../../assets/images/Diamond-image/72ppi/Artboard 17.png'
import img16 from '../../assets/images/Diamond-image/72ppi/Artboard 18.png'
import img17 from '../../assets/images/Diamond-image/72ppi/Artboard 19.png'
import img18 from '../../assets/images/Diamond-image/72ppi/Artboard 20.png'
import img19 from '../../assets/images/Diamond-image/72ppi/Artboard 21.png'
import img20 from '../../assets/images/Diamond-image/72ppi/Artboard 22.png'
import Footer from '../../common/Footer'
import Hero from '../../components/project/Hero'
import PopUp from '../../components/project/PopUp'
import HeroDetail from '../../components/project/HeroDetail'

const useStyles = makeStyles((theme) => ({
    container: {

        fontSize: "16px",
        "& th": {
            fontWeight: "normal",
            textAlign: "left"
        }
    },

}))
const DetailProject = ({ id }) => {
    const [openPopUp, closePopUp] = useState(false)
    const [indexImage, setIndexImg] = useState(null)
    const handleClosePopUp = () => {
        closePopUp(false)
    }
    const handleOpenPopUp = () => {
        closePopUp(true)
    }
    const handleSelectImg = (index) => {
        setIndexImg(index)
    }
    const classes = useStyles()
    const imageUrls = [
        img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20
    ]
    return (
        <div className={classes.container}>
            <HeroDetail id={id} />
            <Masonry imageUrls={imageUrls} columnCount="4" gap='5' handleOpenPopUp={handleOpenPopUp} handleSelectImg={handleSelectImg}></Masonry>
            {openPopUp && <PopUp img={imageUrls[indexImage]} handleClosePopUp={handleClosePopUp} />}
            <Footer />
        </div>
    )
}

export default DetailProject