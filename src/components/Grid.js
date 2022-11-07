import '../App.css';

import { useRef, useState } from 'react';

function Grid() {

    const [gridLength, setGridLength] = useState(30);

    const [newColor, setNewColor] = useState("black");

    const [rainbowColors, setRainbowColors] = useState(false);

    const newLength = useRef(gridLength);
    const gridContainer = useRef(<div></div>)

    function makeGrid() {
        let grid = [];
        for (let i = 0; i < (gridLength * gridLength); i++) {
            const square = <div className='square' key={i} onMouseOver={changeColor} style={{ backgroundColor: "white" }}></div>
            grid.push(square);
        }
        return grid;
    }

    const gridStyle = {
        gridTemplateColumns: `repeat(${gridLength}, 2fr)`,
        gridTemplateRows: `repeat(${gridLength}, 2fr)`
    }


    function handleChangeLength() {
        setGridLength(newLength.current.value);
    }

    function changeColor(evt) {
        if (rainbowColors) {
            let RGBColor1 = Math.floor(Math.random() * 256);
            let RGBColor2 = Math.floor(Math.random() * 256);
            let RGBColor3 = Math.floor(Math.random() * 256);
            evt.target.style.backgroundColor = `rgba(${RGBColor1},${RGBColor2},${RGBColor3})`;
        }

        else { evt.target.style.backgroundColor = newColor; }

    }

    function randomizeColor() {
        setRainbowColors(false);
        let RGBColor1 = Math.floor(Math.random() * 256);
        let RGBColor2 = Math.floor(Math.random() * 256);
        let RGBColor3 = Math.floor(Math.random() * 256);
        setNewColor(`rgba(${RGBColor1},${RGBColor2},${RGBColor3})`)
        // evt.target.style.backgroundColor = newColor;
    }

    function handleRainbowColors() {
        setRainbowColors(true);
    }

    function clearGrid() {
        setGridLength(gridLength);
        setRainbowColors(false);
        setNewColor("black");
        gridContainer.current.chil = makeGrid();
        for (let i = 0; gridContainer.current.children.length; i++) {
            gridContainer.current.children[i].style.backgroundColor = "white"
        }
    }
    return (
        <div className='main-view'>
            <div className='left-items'>
                <div>
                    <button onClick={handleChangeLength} className="btn">Change Grid Length</button>
                    <input ref={newLength} type="number" className='input' ></input>
                </div>
                <button onClick={randomizeColor} className="btn">Randomize Color!</button>
                <button onClick={handleRainbowColors} className="btn">Rainbow Road</button>
                <button onClick={clearGrid} className="btn">CLEAR</button>
            </div>
            <div>
                <div id="grid" style={gridStyle} ref={gridContainer}>
                    {makeGrid()}
                </div>
            </div>
        </div>
    )
}

export default Grid;