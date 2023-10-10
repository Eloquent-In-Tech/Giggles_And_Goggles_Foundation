import { footerData } from "../../data/FooterData"
function Footer() {
    return (
        <div>
            <div className=' h-[600px] w-full bg-slate-300'>
                {footerData.map((data, index)=>{
              return(
                    // <div key={index} className="flex flex-row">
                        
                    //         <h1>{data.title}</h1>
                    // </div>
                    <div key={index} className="flex flex-row">
                    {data.title.split(', ').map((item, itemIndex) => (
                        <h1 key={itemIndex} className={itemIndex !== 0 ? 'ml-2' : ''}>
                        {item}
                        </h1>
  ))}
</div>
                )})}
            </div>
      </div>

    )
  }
  
  export default Footer
  