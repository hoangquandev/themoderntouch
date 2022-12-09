import React from 'react'

const Masonry = (props) => {

    return (
        <div style={{ columns: props.columnCount, columnGap: "0", paddingTop: "2rem", paddingBottom: "2rem" }}>
            {props.imageUrls.map((img, index) =>
                <img src={img} alt="" key={index} style={{ display: "block", cursor: "pointer", borderRadius: "10px", width: "100%", padding: props.gap / 2 }} onClick={() => {
                    props.handleOpenPopUp()
                    props.handleSelectImg(index)
                }} />
            )}
        </div>
    )
}

export default Masonry