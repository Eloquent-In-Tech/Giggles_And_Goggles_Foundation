import { FoundationCardData } from "../../data/SupportCardData"
import React, { useState, useEffect } from "react";

// function NumberCounter({ initialNumber }) {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const increment = () => {
//       if (count < initialNumber) {
//         setCount((prevCount) => prevCount + 1);
//       }
//     };

//     const interval = setInterval(increment, 100); // Increase every 100ms, you can adjust the interval

//     return () => clearInterval(interval);
//   }, [initialNumber, count]);

//   return <h1>{count}</h1>;
// }



// function FoundationCard() {
//   return (
//     <div className="bg-blue-500 h-[300px] mt-[50px] text-black">
//         <div className='flex space-x-[80px] pt-[20px] ml-[200px] mb-[100px] '>
//             {FoundationCardData.map((data, index)=>{
//                 return(
//                     <div key={index}>
//                         <img src={data.image} alt="image" className='hover:cursor-pointer h-[60px] ml-[80px]'/>
//                         <h1 className=' text-5xl pt-[10px]' style={{ pointerEvents: 'none' }}>
//                         <NumberCounter initialNumber={data.title} /></h1>
//                         <p className='mt-[40px] hover:cursor-pointer'>{data.view}</p>
//                     </div>
//                 )
//             })}
            
//         </div>
        
      
//     </div>
//   )
// }

// export default FoundationCard


// function NumberCounter({ initialNumber }) {
//   const [count, setCount] = useState(initialNumber);

//   useEffect(() => {
//     const increment = () => {
//       if (count < initialNumber) {
//         setCount((prevCount) => prevCount + 1);
//       }
//     };

//     const interval = setInterval(increment, 100000); // Increase every 100ms, you can adjust the interval

//     return () => clearInterval(interval);
//   }, [initialNumber, count]);

//   return <h1>{count}</h1>;
// }

// function App() {
//   // Your FoundationCardData array and other code here

//   return (
//     <div className="bg-blue-500 h-[300px] mt-[50px] text-black">
//       <div className="flex space-x-[80px] pt-[20px] ml-[200px] mb-[100px]">
//         {FoundationCardData.map((data, index) => (
//           <div key={index}>
//             <img src={data.image} alt="image" className="hover:cursor-pointer h-[60px] ml-[80px]" />
//             <h1 className="text-5xl pt-[10px]" style={{ pointerEvents: "none" }}>
//               <NumberCounter initialNumber={data.title} />
//             </h1>
//             <p className="mt-[40px] hover:cursor-pointer">{data.view}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

function NumberCounter({ initialNumber }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < initialNumber) {
      const timer = setTimeout(() => {
        setCount(count + 1);
      }, 10); 
      return () => clearTimeout(timer);
    }
  }, [initialNumber, count]);

  useEffect(() => {
    setCount(0);
  }, [initialNumber]);

  return <h1>{count}%</h1>;
}

function SupportCard() {
  return (
    <div className="bg-blue-500 h-[400px] mt-[50px] text-black">
        <h1 className="text-2xl pt-[20px]">Our Research Reveals that...</h1>
      <div className="flex space-x-[80px] pt-[20px] ml-[200px] mb-[100px]">
        {FoundationCardData.map((data, index) => (
          <div key={index}>
            <img src={data.image} alt="image" className="hover:cursor-pointer h-[60px] ml-[80px]" />
            <h1 className="text-5xl pt-[10px]" style={{ pointerEvents: "none" }}>
              <NumberCounter initialNumber={data.title}/>
            </h1>
            <p className="mt-[40px] hover:cursor-pointer">{data.view}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SupportCard;
