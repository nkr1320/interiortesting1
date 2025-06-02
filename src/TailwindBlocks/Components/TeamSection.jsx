import React from "react";

const TeamSection = () =>{



    return (<>
    <section id="TeamSection" className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-2">
      <h1 className="sm:text-3xl text-4xl font-medium title-font mb-4 text-gray-900 lg:text-4xl">Our Team</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">At the heart of our designs is a passionate team of architects, interior stylists, and project managers dedicated to turning your vision into reality. With a perfect blend of creativity, technical expertise, and attention to detail, we craft spaces that are both beautiful and functional. Our collaborative approach ensures every project reflects your personality, lifestyle, and needs — delivered with professionalism and care.</p>
    </div>
    <div className="flex flex-wrap -m-2">
      {/* <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Holden Caulfield</h2>
            <p className="text-gray-500">UI Designer</p>
          </div>
        </div>
      </div> */}
     
{/* 
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/104x94" />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Alper Kamu</h2>
            <p className="text-gray-500">System</p>
          </div>
        </div>
      </div> */}

      
      {/* <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/108x98" />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Rodrigo Monchi</h2>
            <p className="text-gray-500">Product Manager</p>
          </div>
        </div>
      </div> */}
    </div>
  </div>
</section>
    
    </>)
}

export default TeamSection;