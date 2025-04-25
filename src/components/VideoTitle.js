

const VideoTitle = ({title , overview})=>{
    return(
        <div className=" w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
           <h1 className="text-6xl font-bold">{title}</h1>
           <h1 className="py-6 text-lg w-2/4">{overview}</h1>
           <div className="">
             <button className="bg-gray-700 text-white p-4 px-12 bg-opacity-50 rounded-lg text-xl">
                Play</button>
             <button className="bg-gray-700 mx-2 text-white p-4 px-12 bg-opacity-50 rounded-lg text-xl">
                More info</button>
           </div>

        </div>
    )
}


export default VideoTitle;