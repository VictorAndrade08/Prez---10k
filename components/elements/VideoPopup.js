'use client'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import "../../node_modules/react-modal-video/css/modal-video.css"

export default function VideoPopup({ style }) {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            {!style &&

                <a onClick={() => setOpen(true)} className="btn btn-play popup-youtube text-lg">
                    <div className="video-play-button"><span /></div>
                </a >
            }

            {
                style == 2 &&
                <a className="btn btn-play-2 popup-youtube" onClick={() => setOpen(true)}>
                    <div className="video-play-button-2">
                        <span />
                    </div> How It Work
                </a>
            }

            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="SZEflIVnhH8" onClose={() => setOpen(false)} />
        </>
    )
}