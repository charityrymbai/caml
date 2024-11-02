import React from "react";
import "../Components/NightSky.css";

const teamMembers = [
  {
    name: "Jishnu Duhan",

    description: `Cheif Executive Officer, CAML a leading IT firm that specializes in creating innovative digital solutions for better future`,
    education: "Bachelor of Technology (Computer Science) NIT Meghalaya",
    img: "https://res.cloudinary.com/dwfwy8udp/image/upload/v1730438382/Lurn-assets/qot4gukb7vgofdwyrcjo.webp",
  },
  {
    name: "Charity Rymbai",
    description: `Cheif Technology Officer, CAML a leading IT firm that specializes in creating innovative digital solutions for better future`,
    education: "Bachelor of Technology (Mechanical Engineering) NIT Meghalaya",
    img: "https://res.cloudinary.com/dwfwy8udp/image/upload/v1730438382/Lurn-assets/gebacv2tqqqodsijjx8r.webp",
  },
  {
    name: "Shashank Umar Vaishy",

    description: `Lead Developer, CAML a leading IT firm that specializes in creating innovative digital solutions for better future`,
    education: "Bachelor of Technology (Computer Science) NIT, Meghalaya",
    img: "https://res.cloudinary.com/dwfwy8udp/image/upload/v1730438383/Lurn-assets/p8rejfre8vb8vahcifxw.webp",
  },
];

function App() {
  return (
    <div className="wrapper -z-30 min-w-[100vw] w-fit">
      <div className="pt-24">
        <div className="flex flex-wrap justify-center text-5xl text-white font-anton ">
          Our Team
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-24 h-fit py-10 -z-20">
        {teamMembers.map((item, index) => (
          <div
            key={index}
            className="h-[400px] aspect-3/4 group overflow-hidden z-0  relative rounded-[40px] transition-all duration-700 hover:shadow-[0_4px_30px_rgba(255,255,255,1)] hover:-translate-y-3 transform"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-[300px] h-[400px] object-cover transition-all duration-300 ease-in-out rounded-[40px]"
            />
            <div className="absolute bottom-[-100%] left-0 w-full text-center text-white bg-black bg-opacity-60 py-2 transition-all duration-700 ease-in-out group-hover:bottom-0">
              <div className="text-2xl font-bold">{item.name}</div>
              <br />
              <div className="italic p-2">{item.education}</div>
              <br />
              <div className="text-lg p-2">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
