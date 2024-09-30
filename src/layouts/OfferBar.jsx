import { React, useState, useEffect } from 'react'

const OfferBar = () => {

    const textItems = [
        "New Styles On Sale: Up To 40% Off",
        "Limited time offer",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState('slide-left');

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideDirection('slide-left');
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % textItems.length);
                setSlideDirection('slide-right');
            }, 500); // Delay the change for half a second to allow the exit animation
        }, 3000);

        return () => clearInterval(interval);
    }, [textItems.length]);



    return (
        <div className="navbar-carousel">
            <div className={`carousel-text ${slideDirection}`}>
                <p>{textItems[currentIndex]}</p>
            </div>
        </div>
    )
}

export default OfferBar
