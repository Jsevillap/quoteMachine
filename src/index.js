import React from 'react'
import ReactDOM from 'react-dom'
import QuoteCard from './components/QuoteCard'

const App = () => {
    return (
        <QuoteCard />
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));