
import React from "react";


import image1 from '../Pages/woodimages/cabinetry1.jpg';
import image10 from '../Pages/woodimages/cabinetry2.jpg';
import image11 from '../Pages/woodimages/cabinetry3.webp';
import image12 from '../Pages/woodimages/cabinetry4.jpg';
import image13 from '../Pages/woodimages/cabinetry5.webp';
import image14 from '../Pages/woodimages/cabinetry6.jpg';
import image17 from '../Pages/woodimages/cabinetry7.webp';
import image18 from '../Pages/woodimages/cabinetry9.avif';
import image19 from '../Pages/woodimages/cabinetry10.jpg';
import image20 from '../Pages/woodimages/cabinetry11.jpg';
import image21 from '../Pages/woodimages/cabinetry12.webp';
import NavbarSection from "../NavbarSection";
import FooterSection from "../FooterSection";



const Cabinetry = () =>{



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

export default Cabinetry;