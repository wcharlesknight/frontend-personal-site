import { useCallback, useState } from "react";
import BaseCard from "./BaseCard";
import LinkedInImage from "../../assets/LinkedIn.png";
import { Document, Page, pdfjs } from "react-pdf";
import Resume from "../../assets/CK2024ResumePDF.pdf";
import { COLORS, cardStyle, imgLinkStyle } from "../../styles";
import Tooltip from "@mui/material/Tooltip";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const NORMAL = 400;
const ZOOMED = 700;

const LinkedInResume = () => {
    const [size, setSize] = useState(NORMAL);

    const onClick = useCallback(() => {
        window.open("https://www.linkedin.com/in/charlie-knight-60a0a4a3/");
    }, []);

    const onHoverChangeSize = useCallback(() => {
        setSize(ZOOMED);
    }, [size]);

    const onHoverLeaveChangeSize = useCallback(() => {
        setSize(NORMAL);
    }, [size]);

    return (
        <>
            <div className="flex flex-col justify-between h-full" style={cardStyle}>
                <div className="flex flex-row items-center justify-center  w-full h-full border border-white mb-1">
                    <Tooltip
                        placement="top"
                        sx={{
                            bgColor: COLORS.blackShade2,
                            color: COLORS.grayShade1,
                            fontSize: "0.8rem",
                            p: "20px",
                        }}
                        title="Link to my LinkedIn">
                        <img onClick={onClick} className="p-2 cursor-pointer mr-4" style={imgLinkStyle} src={LinkedInImage} />
                    </Tooltip>
                    <div
                        onMouseEnter={onHoverChangeSize}
                        onMouseLeave={onHoverLeaveChangeSize}
                        style={{ height: size === ZOOMED ? `500px` : "", overflow: "auto" }}
                        className={`cursor-default ${size === ZOOMED ? "fixed" : ""}`}>
                        <Document file={Resume}>
                            {size === ZOOMED ? (
                                Array.from(new Array(3), (_l, index) => <Page scale={1.4} key={`page_${index + 1}`} pageNumber={index + 1} />)
                            ) : (
                                <Page pageNumber={1} height={NORMAL} />
                            )}
                        </Document>
                    </div>
                </div>
                <div className="flex flex-row w-full justify-center items-center mt-1">
                    <BaseCard />
                </div>
            </div>
        </>
    );
};

export default LinkedInResume;
