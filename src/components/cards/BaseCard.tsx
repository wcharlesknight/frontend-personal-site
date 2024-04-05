import { useCallback, useState } from "react";
import TextField from "@mui/material/TextField";
import { COLORS } from "../../styles";
import Button from "@mui/material/Button";

const BaseCard = () => {
    const [textValue, setTextValue] = useState();

    const textSx = {
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

    const textOnChange = useCallback((e: any) => {
        setTextValue(e.target.value);
    }, []);

    return (
        <>
            <TextField
                value={textValue}
                onChange={textOnChange}
                sx={textSx}
                inputProps={{
                    style: {
                        color: COLORS.whiteShade3,
                        borderColor: COLORS.whiteShade1,
                        width: 230,
                        height: 120,
                    },
                }}
                InputLabelProps={{ style: { color: COLORS.blackShade2 } }}
                id="outlined-multiline-flexible"
                label="Comment"
                multiline
                maxRows={4}
            />
            <Button
                variant="contained"
                color="primary"
                sx={{
                    height: 60,
                    display: "flex",
                    justifyContent: "center",
                    color: COLORS.blackShade2,
                    backgroundColor: COLORS.whiteShade2,
                    "&:hover": {
                        backgroundColor: COLORS.grayShade1,
                    },
                }}>
                Submit Comment
            </Button>
        </>
    );
};

export default BaseCard;
