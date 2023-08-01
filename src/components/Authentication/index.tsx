import { Grid } from "@mui/material"
import CommonButton from "../CommonButton"

export function Authentication() {
    const buttonStyles = {
        fontSize: 20,
        fontWeight: 700,
        backgroundColor: 'red',
        '&:hover': {
            backgroundColor: 'yellow'
        }
    }

    return (
        <Grid item={true} xs={8} sx={{marginLeft:'1rem'}}>
            <h1>This Authentication Page</h1>
            <p>Just to have page to test navigation</p>
            <CommonButton
                size='large'
                variant='contained'
                sx={buttonStyles}>
                Overriden style
            </CommonButton>
            <CommonButton
                size='large'
                variant='contained'>
                Button with default global style
            </CommonButton>
        </Grid>
    )
}