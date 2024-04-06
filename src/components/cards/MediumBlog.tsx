import { useCallback } from "react";
import BaseCard from "./BaseCard";
import MediumImage from "../../assets/Medium.png";
import { cardStyle, imgMdStyle } from "../../styles";

const MediumBlog = () => {
    const onClick = useCallback(() => {
        window.open("https://medium.com/me/stories/public");
    }, []);

    return (
        <>
            <div className="flex flex-col justify-between h-full" style={cardStyle}>
                <div className="flex flex-row items-center justify-center  w-full h-full border border-white mb-1">
                    <img onClick={onClick} className="p-2 cursor-pointer " style={imgMdStyle} src={MediumImage} />
                </div>
                <div className="flex flex-row w-full justify-center items-center mt-1">
                    <BaseCard />
                </div>
            </div>
        </>
    );
};

export default MediumBlog;
