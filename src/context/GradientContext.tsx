import React, { createContext, useState } from "react";


interface ImageColors {
    primary: string;
    secondary: string;
}

interface ContextProps {
    colors: ImageColors;
    prevColors: ImageColors;
    assignColors: (colors: ImageColors) => void; 
    assignPrevColors: (colors: ImageColors) => void;
}

export const GradientContext = createContext({} as ContextProps );


export const GradientProvider = ({ children }: { children: JSX.Element }) => {

    const [ colors, setColors ] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent'

    })

    const [ prevColors, setPrevColors ] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent'

    })

    const assignColors = ( colors: ImageColors ) => {
        setColors( colors );
    }

    const assignPrevColors = ( colors: ImageColors ) => {
        setPrevColors( colors );
    }

    return (
        <GradientContext.Provider value={{
            colors,
            prevColors,
            assignColors,
            assignPrevColors
        }}>
            {children}
        </GradientContext.Provider>
    )
}