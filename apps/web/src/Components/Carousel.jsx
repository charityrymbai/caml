import React from "react";
import "./Carousel.css";

const Carousel = ({setOption}) => {
    return (
        <div className="z-0 relative">
            <input type="radio" name="slider" id="item-1" alt="flashcard"
                onChange={(e)=>setOption(e.target.alt)} defaultChecked />
            <input type="radio" name="slider" id="item-2" alt="quiz"
                onChange={(e)=>setOption(e.target.alt)} 
            />
            <input type="radio" name="slider" id="item-3" alt="compare"
                onChange={(e)=>setOption(e.target.alt)} 
            />
            <div className="cards">
                <label className="carouselCard" htmlFor="item-1" id="tile-1">
                    <div className="font-anton flex justify-center items-center text-5xl img_card bg-black text-white">Flash Cards</div>
                </label>
                <label className="carouselCard" htmlFor="item-2" id="tile-2">
                    <div className="font-anton flex justify-center items-center text-5xl img_card bg-black text-white">Quiz</div>
                </label>
                <label className="carouselCard" htmlFor="item-3" id="tile-3">
                    <div className="font-anton flex justify-center items-center text-5xl img_card bg-black text-white">Compare</div>
                </label>
            </div>
        </div>
    );
};

export default Carousel;
