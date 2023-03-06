import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';
import { height } from '../../../constants/dimesions';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: 20,
    },
    taskList: {
        width: '100%',
        flexDirection: "column",
        paddingBottom: responsiveHeight(10),
    },
    taskItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: responsiveHeight(2),
        padding: responsiveHeight(2.5),
        backgroundColor: colors.theme_dark,
        borderRadius: 10,
    },
    taskItemTitle: {
        color: "white",
        fontSize: responsiveFontSize(2.8),
        fontWeight: "bold",
    },
    taskDuration: {
        color: colors.theme_gray,
        fontSize: responsiveFontSize(2),
        marginTop: 5,
    },
    startPomodoro: {
        backgroundColor: colors.theme_red,
        fontSize: 12,
        width: responsiveHeight(7),
        height: responsiveHeight(7),
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
    },

});

export default styles;