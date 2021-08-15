import React, { useState, useEffect } from 'react'
import axios from 'axios';


const QuoteCard = () => {

    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    useEffect(() => {
        getQuote()
    }, [])

    const randomColor = () => {

        //keep the colors dark to maintain good contrast between the text on the buttons and the background
        const color = {
            hue: Math.floor((Math.random() * 360) + 1),
            saturation: 100,
            lightness: 40
        };
        return color

    }

    const getQuote = async () => {
        const quoteData = await axios.get("https://api.quotable.io/random");
        const { hue, saturation, lightness } = randomColor();
        const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        const hoverColor = `hsl(${hue}, ${saturation}%, ${lightness - 5}%)`;
        const root = document.querySelector(":root");
        root.style.setProperty("--main-color", color);
        root.style.setProperty("--main-hover-color", hoverColor)

        setQuote(quoteData.data.content);
        setAuthor(quoteData.data.author);
    }


    return (
        <div className="quoteBox">
            <div className="quote">{quote}</div>
            <div className="author">{author}</div>
            <div className="newQuote" onClick={getQuote}>New Quote</div>

        </div>
    )
}

export default QuoteCard