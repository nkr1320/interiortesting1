

import React from "react";


import image1 from '../Pages/woodimages/woodfloor1.jpg';
import image10 from '../Pages/woodimages/woodfloor4.jpeg';
import image11 from '../Pages/woodimages/woodfloor5.jpg';
import image12 from '../Pages/woodimages/woodfloor6.jpg';
import image13 from '../Pages/woodimages/woodfloor7.jpg';
import image14 from '../Pages/woodimages/woodfloor8.jpg';
import image17 from '../Pages/woodimages/woodfloor9.jpg';
import image18 from '../Pages/woodimages/woodfloor10.jpg';
import image19 from '../Pages/woodimages/woodfloor11.jpg';
import image20 from '../Pages/woodimages/woodfloor16.jpg';
import image21 from '../Pages/woodimages/woodfloor.jpg';
import NavbarSection from "../NavbarSection";
import FooterSection from "../FooterSection";



const WoodFlooring = () =>{



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

export default WoodFlooring;