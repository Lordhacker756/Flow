import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';
import { height } from '../../../constants/dimesions';

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: 20,
        paddingBottom: height * 0.1,
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