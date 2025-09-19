
function ContentComponent(){
    return(
        <>
            <div className=" flex h-[90vh] w-full justify-around items-center ">
                <div className="flex w-[80vw] h-[70vh]">
                    <div className="flex flex-col w-[40vw] justify-between">  
                       <p className="text-[4vw]">YOUR FEET DESERVE THE BEST</p>
                       
                       <p className="text-[1vw] w-[30vw]">YOUR FEET DESERVE THE BEST AND WE&apos;RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE&apos;RE HERE TO HELP YOU WITH OUR SHOES.</p>
                       <div className="flex justify-between w-[20vw]"> 
                            <button className="bg-red-500 px-4 py-1">Shop Now</button>
                            <button className="border border-black px-4 py-1">Category</button>
                       </div>
                       <div className="text-[1vw] w-[10vw]">
                            <p className="pb-1">Also Available On</p>
                            <div className="flex justify-between w-[6vw]">
                                <img src="http://localhost:5173/images/flipkartLogo.png" alt="Flipkart" className=" h-[5vh] " />
                                <img src="http://localhost:5173/images/AmazonLogo.png" alt="Nike_Logo" className=" h-[5vh] " />
                            </div>
                       </div>
                    </div>


                    <img src="http://localhost:5173/images/shoePhoto.png" alt="Shoe_Photo" className=" w-[40vw] drop-shadow-[32px_32px_24px_rgba(0,0,0,0.3)]" />
                    
                </div>

            </div>
        </>
    )
}

export default ContentComponent;