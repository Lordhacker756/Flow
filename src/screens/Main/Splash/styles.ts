import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'black'
    },
    title: {
        fontSize: 50,
        fontWeight: "bold",
        color: colors.theme_red
    },
    subtitle: {
        fontSize: 14,
        color: colors.theme_gray

    }
});

export default styles;