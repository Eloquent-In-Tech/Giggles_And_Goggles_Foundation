
import { SustainabilityCardData } from "../../data/SustainabilityCardData"

function CardSustainability() {
  return (
    <div className='flex flex-col-4 space-x-[50px] pt-[20px] ml-[420px] mb-[200px]'>
        {SustainabilityCardData.map((data, index)=>{
            return(
                <div key={index} className='h-[300px] w-[250px] mt-[20px]'>
                    <a href={data.link}>
                    <img src={data.image} alt="image" className='hover:cursor-pointer'/>
                    <h1 className=' text-black pt-[10px]' style={{ pointerEvents: 'none' }}>{data.title}</h1>
                    <p className='mt-[60px] bg-[#84754e]  py-3 hover:bg-[#6C6A40] hover:cursor-pointer'>{data.view}</p>
                    </a>
                </div>
            )
        })}
    </div>
  )
}

export default CardSustainability