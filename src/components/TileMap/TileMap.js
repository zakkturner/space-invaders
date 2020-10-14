import React from 'react'
import './TileMap'

export default function TileMap(){
    let mapArray = [
        [1,0,0,0,0,1],
        [1,0,0,0,0,1],
        [1,0,0,0,0,1],
        [1,0,0,0,0,1],
        [1,0,0,0,0,1]
    ]
    
    function drawMap({
        for(let i= 0; i < mapArray.length; i++){
            for(var j=0; mapArray[j].length; j++){
                if(mapArray[i] || mapArray[j] == 1){
                    return "<div> </div>"
                }
            }
        }
    })

    return <div className="container"></div>
}