import { useState } from "react";
import { data } from "./data";

function Slider() {
    const [dress, setDress] = useState(0);
    const { images } = data[dress];
    const nextBtn = () => {
        setDress((images => {
            images ++;
            if(images > data.length - 1){
                images = 0
            }
            return images
        }))
    }
    const prevBtn = () => {
        setDress((images => {
            images --;
            if(images < 0){
                return data.length - 1
            }
            return images;
        }))
    }
    return(
        <div>
            <div className="container">
            <img src={images[0]} width="200px"/>
            </div>
            <div className="container">
            <button onClick={prevBtn}>prev</button>
            <button onClick={nextBtn}>next</button>
            </div>
        </div>

    )
}
export default Slider;