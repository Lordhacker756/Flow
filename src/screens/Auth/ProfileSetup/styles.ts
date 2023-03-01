import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 20,
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white",
        marginBottom: 15,
        marginTop: 50,
    },
    subtitle: {
        fontSize: 15,
        textAlign: "center",
        color: colors.theme_gray,
        marginBottom: 55,
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
    buttons: {
        position: "absolute",
        bottom: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        columnGap: 10,
    },
    skipBtn: {
        backgroundColor: '#35383F',
        flex: 1,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItmes: 'center'
    },
    startBtn: {
        backgroundColor: colors.theme_red,
        flex: 1,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItmes: 'center'
    },
    btnText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default styles;