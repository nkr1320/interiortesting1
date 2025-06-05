import React from "react";


import image1 from '../Pages/woodimages/doorswindows.jpg';
import image10 from '../Pages/woodimages/doorswindows2.jpg'
import image11 from '../Pages/woodimages/doorswindows4.jpg'
import image12 from '../Pages/woodimages/doorswindows5.jpg'
import image13 from '../Pages/woodimages/doorswindows6.jpg'
import image14 from '../Pages/woodimages/doorswindows7.webp'

import image17 from '../Pages/woodimages/furniture.jpg';
import image18 from '../Pages/woodimages/furniture2.jpg';
import image19 from '../Pages/woodimages/furniture4.jpeg';
import image20 from '../Pages/woodimages/furniture12.jpg';
import image21 from '../Pages/woodimages/furniture13.jpg';
import NavbarSection from "../NavbarSection";
import FooterSection from "../FooterSection";



const DoorsWindows = () =>{



    return(<>
    
    <NavbarSection />

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 mt-20">
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg"  src={image1} alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg"  src={image17} alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg"  src={image18} alt="" />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg"  src={image19} alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg"  src={image20} alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg"  src={image21} alt="" />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg"  src={image10} alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg"  src={image11} alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg"  src={image12} alt="" />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg"  src={image13} alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg"  src={image14} alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg"  src={image10} alt="" />
        </div>
    </div>
</div>

<FooterSection />    
    
    </>)
}

export default DoorsWindows;