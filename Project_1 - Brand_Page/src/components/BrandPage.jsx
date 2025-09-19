import ContentComponent from "./ContentComponent";
import NavBar from "./NavBar";

function BrandPage(){
    return (
    <div className="flex flex-col justify-between items-center min-h-screen">
        
        <NavBar></NavBar>
        <ContentComponent></ContentComponent>
    </div>)
}

export default BrandPage;