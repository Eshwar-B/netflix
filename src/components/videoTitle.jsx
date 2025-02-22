const VideoTitle = ({title, overview}) => {
    
    return (
        <div className="pt-[15%] px-20 absolute text-white bg-gradient-to-r w-screen aspect-video from-black">
            <h1 className="text-6xl font-bold ">{title}</h1>
            <p className="py-6 text-lg w-1/2 ">{overview}</p>

            <div className="my-4 absolute">
                <button className="m-2 bg-gray-100  text-black p-4 px-12 text-xl bg-opacity-50 rounded-2xl cursor-pointer  hover:bg-gray-300"> ➤ Play</button>
                <button className="m-2 bg-gray-800  text-white p-4 px-12 text-xl bg-opacity-50 rounded-2xl cursor-pointer hover:bg-gray-900"> ⓘ More Info</button>
            </div>
        </div>
    );
};

export default VideoTitle;