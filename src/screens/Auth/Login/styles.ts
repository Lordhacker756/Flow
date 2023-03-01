import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black"
    },
    heading: {
        fontSize: 40,
        color: 'white',
        marginVertical: 40,
        fontWeight: 'bold',
    },
    input: {
        width: 300,
        height: 50,
        marginVertical: 10,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    },
    login: {
        width: 300,
        height: 50,
        flexDirection: 'row',
        columnGap: 10,
        marginVertical: 10,
        backgroundColor: colors.theme_red,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
        columnGap: 10,
        width: 300,
        justifyContent: 'center',
        marginVertical: 10,
        position: 'absolute',
        bottom: 20,
        height: 20,
    },
    signUpText: {
        color: 'white',
        fontSize: 15,
    },
    signUpBtnText: {
        color: colors.theme_red,
        fontSize: 15,
        fontWeight: 'bold',
    },
    splashImage: {
        width: 200,
        height: 200,
    },
});
export default styles;