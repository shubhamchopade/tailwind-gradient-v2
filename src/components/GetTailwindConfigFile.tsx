import { useState } from "react"
import namer from 'color-namer';
import styled from "styled-components";

export const GetTailwindConfigFile = () => {
    const [configContent, setConfigContent] = useState("");
    const names = namer(configContent || '000');
    const {ntc, html, pantone, roygbiv, x11} = names;
    let allColors = [...ntc, ...html, ...pantone, ...roygbiv, ...x11]
    let index = 0;

    function getShortString(allColors: any): string{
        while(allColors[index].name.replace(/\s+/g, '').trim().length > 8){
            index++;
        }
       
        console.log(index, allColors[index].name)
        return allColors[index].name
    }



    // console.log(getShortString(allColors))



    const handleTextBox = (e: any) => {
        let txtString = e.target.value
        setConfigContent(txtString)
    }


    return (
        <div className="m-4">
            <input type='color' value={configContent} onChange={handleTextBox} />
            <div className='mt-8'>
                <ColorSquare color={configContent} />
                <p className='text-left'>{getShortString(allColors).replace(/\s+/g, '').trim()}</p>
            </div>

        </div>
    )
}


const ColorSquare = styled.div.attrs(props => ({
    style: {
        background: props.color || '#2a2a2a'
    }
}))`
  transition: background 0.5s ease;
  width: 5rem;
  height: 5rem;
  border-radius: 10%;
  
`