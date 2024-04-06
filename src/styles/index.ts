export const COLORS = {
    whiteShade1: "rgba(255, 255, 255, 0.1)",
    whiteShade2: "rgba(255, 255, 255, 0.2)",
    whiteShade3: "rgba(255, 255, 255, 0.9)",
    grayShade1: "rgba(128, 128, 128, 0.3)",
    grayShade2: "rgba(128, 128, 128, 0.4)",
    grayShade3: "rgba(128, 128, 128, 0.5)",
    blackShade1: "rgba(0, 0, 0, 0.6)",
    blackShade2: "rgba(0, 0, 0, 0.7)",
    navyShade1: "rgba(0, 0, 128, 0.8)",
    navyShade2: "rgba(0, 0, 128, 0.9)",
    navyShade3: "rgba(0, 0, 128, 1)",
};

export const cardStyle = {
    backgroundColor: "#333",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px 5px rgba(0,0,0,0.2)",
    color: "#fff",
    padding: "20px",
    margin: "10px",
    lineHeight: "1.5",
};

export const imgLinkStyle = { width: "30%", height: "40%", boxShadow: "0px 0px 10px 5px rgba(0,0,0,0.2)" };

export const imgMdStyle = { width: "50%", boxShadow: "0px 0px 10px 5px rgba(0,0,0,0.2)" };

export const btnStyle = {
    height: 60,
    display: "flex",
    justifyContent: "center",
    color: COLORS.blackShade2,
    backgroundColor: COLORS.whiteShade2,
    "&:hover": {
        backgroundColor: COLORS.grayShade1,
    },
};

export const textSx = {
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: COLORS.whiteShade2,
        },
        "&:hover fieldset": {
            borderColor: COLORS.whiteShade2,
        },
        "&.Mui-focused fieldset": {
            borderColor: COLORS.whiteShade2,
        },
    },
    marginRight: 10,
    marginTop: 5,
    boxShadow: "0px 0px 10px 5px rgba(0,0,0,0.2)",
};

export const inputStyle = {
    color: COLORS.whiteShade3,
    borderColor: COLORS.whiteShade1,
    width: 230,
    height: 120,
};
