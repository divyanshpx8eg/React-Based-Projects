

function NavBar(){
    return (
        <>
            <div  className=" flex h-[10vh] w-full justify-around items-center ">
                <img src="http://localhost:5173/images/NikeLogo.png" alt="Nike_Logo" className=" h-[5vh]" />
                <div className="options flex h-[5vh] w-[30vw] justify-evenly"> 
                    <button>Home</button>
                    <button>Location</button>
                    <button>About</button>
                    <button>Contact</button>
                </div>
                <button className="bg-red-500 px-4 py-1">Login</button>
            </div>
        </>
    )
}

export default NavBar;