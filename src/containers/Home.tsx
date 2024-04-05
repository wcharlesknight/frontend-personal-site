import LinkedInResume from "../components/cards/LinkedInResume";
import MediumBlog from "../components/cards/MediumBlog";

function Home() {
    return (
        <div className="flex flex-row w-full h-full min-h-screen bg-gray-900">
            <div className="flex flex-col w-full p-10">
                <MediumBlog />
            </div>
            <div className="flex flex-col w-full p-10">
                <LinkedInResume />
            </div>
        </div>
    );
}

export default Home;
