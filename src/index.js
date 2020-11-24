import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component 
{
    randomColor(event) 
    {
        var color = '#';
        var code = '0123456789ABCDEF';
        var box = event.target;
        for (var x = 0; x < 6; x++)
        {
            color = color + (code[Math.floor(Math.random() * 16)]);
        }
        box.style.backgroundColor = color;
    }
    render() 
    {
        return <div className="square" onMouseOver={this.randomColor}></div>;
    }
}

function Main() {
    const squares = []
    for (let x=0; x<25; x++) 
    {
        squares.push(<Square/>)
    }
    return <div id="main">{squares}</div>;
}

ReactDOM.render(
    <Main></Main>,
    document.getElementById('root')
);