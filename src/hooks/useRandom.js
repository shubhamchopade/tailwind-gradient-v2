import { useEffect, useState } from "react";


function useRandom() {
    const [HSLA, setHSLA] = useState({
        hue: 0,
        saturation: 0,
        lightness: 0,
        alpha: 100,
    });

    useEffect(() => {
        let hue = Math.floor(Math.random() * 360);
        let saturation = Math.floor(Math.random() * 100);
        saturation = saturation < 40 ? saturation + 40 : saturation;
        let lightness = Math.floor(Math.random() * 100);
        lightness = lightness < 40 ? lightness + 30 : lightness;
        let alpha = Math.random();
        alpha = alpha < 0.4 ? alpha + 0.3 : alpha;
        setHSLA({ hue, saturation, lightness, alpha });
    }, []);

    return HSLA
}

export default useRandom