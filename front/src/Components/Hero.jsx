import React, { useState } from 'react';

const Hero = () => {

    const [count, setCount] = useState(0)
    const [autoplay, setAutoPlay] = useState(false)
    const content = [
        {
            title: 'Consultant en affaires',
            url: process.env.PUBLIC_URL + "/img/slider/slider_00.jpg",
            promotion: 'Lorem consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        },
        {
            title: 'Boostez vos ventes',
            url: process.env.PUBLIC_URL + "/img/slider/slider_01.jpg",
            promotion: 'Lorem consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            title: 'Leadership efficace',
            url: process.env.PUBLIC_URL + "/img/slider/slider_02.jpg",
            promotion: 'Lorem consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            title: 'Programme exclusive',
            url: process.env.PUBLIC_URL + "/img/slider/slider_03.jpg",
            promotion: 'Lorem consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        },
    ]
    let timer;
    const previous = () => {

        if (count === 0) {
            // Go to the last picture
            return setCount(content.length - 1)
        }
        setCount(count - 1)
    }

    const next = () => {
        // Advances one frame and returns to the first frame at the last frame.
        if (count >= content.length - 1) {
            return setCount(0)
        }
        setCount(count + 1)
    }

    const playPause = () => {
        // If my mouse hovers over the image, my slider plays.
        if (autoplay) {
            clearTimeout(timer)
        }
        // invert play value  
        setAutoPlay(!autoplay)
    }
    // If my slideshow is playing
    if (autoplay) {
        timer = setTimeout(() => {
            if (count >= content.length - 1) {
                return setCount(0)
            }

            setCount(count + 1)
        }, 3000);
    }


    return (
        <section className=' slider_hero'>
            <div className='container row'>
            <article>
                <h1 onMouseOver={playPause} onMouseOut={playPause}>{content[count].title}</h1>
                <p onMouseOver={playPause} onMouseOut={playPause}>{content[count].promotion}</p>
            </article>
            <article>
                <img onMouseOver={playPause} onMouseOut={playPause} src={content[count].url} alt="publicité" />
            </article>
            </div>
            
            <div className='btn_hero'>
                <button onClick={previous}>{"<"}</button>
                <button onClick={next}>{">"}</button>
            </div>
        </section>
    );
};

export default Hero;