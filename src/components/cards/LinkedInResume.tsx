import { useCallback, useState } from "react";
import BaseCard from "./BaseCard";
import LinkedInImage from "../../assets/LinkedIn.png";
import { Document, Page, pdfjs } from "react-pdf";
import Resume from "../../assets/CK2024ResumePDF.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const NORMAL = 400;
const ZOOMED = 600;

const LinkedInResume = () => {
    const [size, setSize] = useState(NORMAL);
    const onClick = useCallback(() => {
        window.open("https://www.linkedin.com/in/charlie-knight-60a0a4a3/");
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
                    <img
                        onClick={onClick}
                        className="p-2 cursor-pointer mr-4"
                        style={{ width: "30%", height: "40%", boxShadow: "0px 0px 10px 5px rgba(0,0,0,0.2)" }}
                        src={LinkedInImage}
                    />
                    <div
                        onMouseEnter={onHoverChangeSize}
                        onMouseLeave={onHoverLeaveChangeSize}
                        style={{ height: size === ZOOMED ? "500px" : "", overflow: "auto" }}
                        className={`cursor-default   ${size === ZOOMED ? "fixed" : ""}`}>
                        <Document file={Resume}>
                            {size === ZOOMED ? (
                                Array.from(new Array(3), (_l, index) => <Page key={`page_${index + 1}`} pageNumber={index + 1} />)
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
