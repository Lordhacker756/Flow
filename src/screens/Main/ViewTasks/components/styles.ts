import { StyleSheet } from 'react-native';
import colors from '../../../../constants/colors';
import { height, width } from '../../../../constants/dimesions';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
    container: {
        marginTop: responsiveHeight(2),
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: responsiveHeight(2),
        paddingHorizontal: responsiveHeight(2),
    },
    daysList: {
        flexDirection: 'row',
        width: responsiveWidth(100),
        gap: responsiveWidth(1.5),
        justifyContent: 'space-evenly',
    },
    month: {
        fontSize: responsiveFontSize(2.6),
        fontWeight: 'bold',
        color: colors.theme_red,
    },
    year: {
        fontSize: responsiveFontSize(2.6),
        fontWeight: 'bold',
        color: colors.theme_red,
    },
    day: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: responsiveWidth(1.5),
        width: responsiveWidth(12.5),
        height: responsiveHeight(10),
        borderRadius: 50,
        backgroundColor: colors.theme_dark
    },
    date: {
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
        color: 'white',
    },
    dayName: {
        fontSize: responsiveFontSize(1.5),
        color: 'white',
    },
    dates: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: responsiveWidth(2),
        justifyContent: 'space-between',
        alignItems: 'center',
        columnGap: responsiveWidth(1.8),
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    taskContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: responsiveHeight(2),
        height: responsiveHeight(70),
    },
    tasksList: {
        width: '100%',
        paddingBottom: responsiveHeight(8),
    },
    dayTaskContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        width: responsiveWidth(90),
        marginHorizontal: responsiveWidth(5),
        marginTop: responsiveHeight(2.5),
    },
    taskRight: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '80%',
        paddingHorizontal: 20,
        height: responsiveHeight(11),
        borderRadius: 10,
        backgroundColor: colors.theme_dark,
    },
    taskTitle: {
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
        color: 'white',
    },
    taskStatus: {
        fontSize: responsiveFontSize(2),
        color: colors.theme_red,
    },
    noTaskContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 15,
        width: '100%',
        height: height * 0.6,
    },
    noTaskTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.theme_red,
    },
    noTaskMessage: {
        fontSize: 18,
        color: 'white',
    },
});

export default styles;