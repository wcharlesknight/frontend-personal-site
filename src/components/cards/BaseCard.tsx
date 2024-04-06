import { useCallback, useState } from "react";
import TextField from "@mui/material/TextField";
import { COLORS, btnStyle, inputStyle, textSx } from "../../styles";
import Button from "@mui/material/Button";

const BaseCard = () => {
    const [textValue, setTextValue] = useState();

    const textOnChange = useCallback((e: any) => {
        setTextValue(e.target.value);
    }, []);

    return (
        <>
            <TextField
                value={textValue}
                onChange={textOnChange}
                sx={textSx}
                inputProps={{ style: inputStyle }}
                InputLabelProps={{ style: { color: COLORS.blackShade2 } }}
                id="outlined-multiline-flexible"
                label="Comment"
                multiline
                maxRows={4}
            />
            <Button variant="contained" color="primary" sx={btnStyle}>
                Submit Comment
            </Button>
        </>
    );
};

export default BaseCard;
