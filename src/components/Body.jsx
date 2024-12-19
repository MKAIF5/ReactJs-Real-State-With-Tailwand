import Navbar from "../components/Navbar";

const Body = () => {
    return (

        <>
            <div className="min-h-screen mb-4 bg-cover bg-center flex
            items-center w-full overflow-hidden"
                style={{ backgroundImage: "url('/header_img.png')" }} id="Body">
                <Navbar />
                <div>
                    <h2>Explore Homes</h2>
                </div>
            </div>
        </>
    )
}

export default Body
