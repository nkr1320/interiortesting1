import React from "react";
import { Link } from "react-router-dom";
import image2 from '../Pages/images/image2.jpg'
import image3 from '../Pages/images/image3.jpg'
import image4 from '../Pages/images/image4.jpg'
import image5 from '../Pages/images/image5.jpg'
import image6 from '../Pages/images/image6.jpg'
import image7 from '../Pages/images/image7.jpg'
import image8 from '../Pages/images/image8.jpg'
import image9 from '../Pages/images/image9.jpg'
import NavbarSection from "../NavbarSection";



const GallerySection = () => {



  return (<>
<NavbarSection />
    <section id="GallerySection" className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:flex-grow  lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-center mb-16 md:mb-0 items-center text-center">

          <h1 className="title-font sm:text-6xl text-4xl md:mb-15 lg:mb-20 font-medium text-gray-900">Interior Projects
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link to="/WoodCarvingDecorativeWork" className="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block rounded-2xl" src={image2} />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Wood Carving & Decorative Work</h2>
              {/* <p className="mt-1">$16.00</p> */}
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
             <Link to="/DoorsWindows" className="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block rounded-2xl" src={image3} />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Doors & Windows
</h2>
              {/* <p className="mt-1">$21.15</p> */}
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link to="/FurnitureMaking" className="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block rounded-2xl" src={image4} />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Furniture Making
</h2>
              {/* <p className="mt-1">$12.00</p> */}
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link to="/PanellingCladding" className="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block rounded-2xl" src={image5} />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Paneling & Cladding</h2>
              {/* <p className="mt-1">$18.40</p> */}
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link to="/StructuralWoodwork" className="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block rounded-2xl" src={image6} />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Structural Woodwork</h2>
              {/* <p className="mt-1">$16.00</p> */}
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link to="/ShootingStars" className="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block rounded-2xl" src={image7} />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
              {/* <p className="mt-1">$21.15</p> */}
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link to="/WoodenCeilingDesign" className="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block rounded-2xl" src={image8} />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Wooden Ceiling Design</h2>
              {/* <p className="mt-1">$12.00</p> */}
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link to="/WoodFlooring" className="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block rounded-2xl" src={image9} />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Wood Flooring</h2>
              {/* <p className="mt-1">$18.40</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  </>)
}
export default GallerySection;