import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        padding: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20
    },
    input: {
        width: 350,
        height: 60,
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 10,
        padding: 20,
        backgroundColor: '#1F222A',
    },
    button: {
        backgroundColor: colors.theme_red,
        width: 350,
        height: 50,
        borderRadius: 50,
        marginVertical: 10,
        flexDirection: 'row',
        columnGap: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },

});

export default styles