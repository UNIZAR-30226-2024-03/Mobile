import { Button } from "react-native"
import { AppColorPalette } from "../../constants/types"

/**
 * Button displaying PLAY and performs track playing logic when pressed
 * @returns 
 */
export const PlayButton = () => {
    return (
        <Button title="PLAY" color={AppColorPalette.mainBlue} ></Button>
    )
}