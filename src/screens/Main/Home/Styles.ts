import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'black'
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: 'white'
    },
    progressDiv: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 20,
        width: '100%',
        backgroundColor: colors.theme_dark,
        borderRadius: 10,
        padding: 10,
    },

    progressContainer: {
        width: '60%',
        flexDirection: "column",
        alignItems: "flex-start",
        marginVertical: 20,
        rowGap: 10,

    },
    progressText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    taskText: {
        color: colors.theme_gray,
        fontSize: 12,
        fontWeight: "bold",
    },
    taskHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        marginVertical: 20,
    },
    taskHeaderText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    taskHeaderButton: {
        color: colors.theme_red,
        fontSize: 16,
        fontWeight: "bold",
    },
    graphContainer: {
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    },
    progressCount: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
        position: "absolute",
        top: 60,
        left: 55,
        transform: [{ translateX: -20 }, { translateY: -20 }],
        textAlign: "center",
    },
    taskList: {
        width: '100%',
        flexDirection: "column",
        height: 380,
        paddingBottom: 20,
    },
    taskItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 10,
        padding: 20,
        backgroundColor: colors.theme_dark,
        borderRadius: 10,
    },
    taskItemTitle: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    taskDuration: {
        color: colors.theme_gray,
        fontSize: 14,
        marginTop: 5,
        fontWeight: "bold",
    },
    startPomodoro: {
        backgroundColor: colors.theme_red,
        fontSize: 12,
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
    },

});

export default styles;