import { useCallback } from "react";
import BaseCard from "./BaseCard";
import MediumImage from "../../assets/Medium.png";

const MediumBlog = () => {
    const onClick = useCallback(() => {
        window.open("https://medium.com/me/stories/public");
    }, []);

    const cardStyle = {
        backgroundColor: "#333",
        borderRadius: "5px",
        boxShadow: "0px 0px 10px 5px rgba(0,0,0,0.2)",
        color: "#fff",
        padding: "20px",
        margin: "10px",
        lineHeight: "1.5",
    };

    return (
        <>
            <div className="flex flex-col justify-between h-full" style={cardStyle}>
                <div className="flex flex-row items-center justify-center  w-full h-full border border-white mb-1">
                    <img onClick={onClick} className="p-2 cursor-pointer" style={{ width: "50%" }} src={MediumImage} />
                </div>
                <div className="flex flex-row w-full justify-center items-center mt-1">
                    <BaseCard />
                </div>
            </div>
        </>
    );
};

export default MediumBlog;
