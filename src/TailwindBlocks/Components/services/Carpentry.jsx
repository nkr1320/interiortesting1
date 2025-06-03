

import React from "react";


import image1 from '../Pages/woodimages/carpentry.jpg';
import image10 from '../Pages/woodimages/carpentry16.jpg';
import image11 from '../Pages/woodimages/carpentry7.avif';
import image12 from '../Pages/woodimages/carpentry8.webp';
import image13 from '../Pages/woodimages/carpentry9.avif';
import image14 from '../Pages/woodimages/carpentry10.png';
import image17 from '../Pages/woodimages/carpentry14.webp';
import image18 from '../Pages/woodimages/carpentry15.avif';
import image19 from '../Pages/woodimages/carpentry18.jpeg';
import image20 from '../Pages/woodimages/carpentry20.jpg';
import image21 from '../Pages/woodimages/carpentry21.avif';
import NavbarSection from "../NavbarSection";
import FooterSection from "../FooterSection";



const Carpentry = () =>{



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

export default Carpentry;