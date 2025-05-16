import React, { useEffect, useState } from 'react'
import { getData } from '../api'
import './PictureCard.css'

function PictureCard() {
    const [dailyPicture, setDailyPicure] = useState('');

    useEffect(() => {
        const loadPicture = async () => {
            try {
                const picture = await getData();
                setDailyPicure(picture);
            } catch (err) {
                console.log(err.message);
            }
        }
        //call the function 
        loadPicture();
    }, [])

    return (
        <div className='home'>
            <div className="outerDiv">
                <div className='picture-card'>
                    <img src={dailyPicture.url} alt="" />
                </div>
            </div>  

            <div className="infoDiv">
                <p className='title'>{dailyPicture.title}</p>
                <p className='date'>{dailyPicture.date}</p>
                <p className='explanation'>{dailyPicture.explanation}</p>
            </div>

        </div>
    )
}

export default PictureCard

// date
// : 
// "2025-05-15"
// explanation
// : 
// "This shadowy landscape of majestic mountains and icy plains stretches toward the horizon on a small, distant world. It was captured from a range of about 18,000 kilometers when New Horizons looked back toward Pluto, 15 minutes after the spacecraft's closest approach on July 14, 2015. The dramatic, low-angle, near-twilight scene follows rugged mountains formally known as Norgay Montes from foreground left, and Hillary Montes along the horizon, giving way to smooth Sputnik Planum at right. Layers of Pluto's tenuous atmosphere are also revealed in the backlit view. With a strangely familiar appearance, the frigid terrain likely includes ices of nitrogen and carbon monoxide with water-ice mountains rising up to 3,500 meters (11,000 feet). That's comparable in height to the majestic mountains of planet Earth. The Plutonian landscape is 380 kilometers (230 miles) across."
// hdurl
// : 
// "https://apod.nasa.gov/apod/image/2505/Pluto-Mountains-Plains9-17-15.jpg"
// media_type
// : 
// "image"
// service_version
// : 
// "v1"
// title
// : 
// "A Plutonian Landscape"
// url
// : 
// "https://apod.nasa.gov/apod/image/2505/Pluto-Mountains-Plains9-17-15_1024.jpg"
// [[Prototype]]
// : 
// Object