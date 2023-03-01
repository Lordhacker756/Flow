import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        padding: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 20,
        position: "absolute",
        top: 0,
        width: '100%',
        height: 50,
    },
    headerTitle: {
        color: 'white',
        fontSize: 30,
    }
});

export default styles