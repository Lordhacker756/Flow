import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: 'black'
    },
    taskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: responsiveHeight(2),
        backgroundColor: colors.theme_dark,
        borderRadius: 10,
        padding: 10
    },
    taskLeft: {
        columnGap: 10,
        padding: 10,
    },
    taskTitle: {
        color: 'white',
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold'
    },
    taskTime: {
        color: colors.theme_gray,
        fontSize: responsiveFontSize(2),
        marginVertical: 5,
        fontWeight: 'bold'
    },
    taskRight: {
        padding: 20,
        columnGap: 10,
        alignItems: 'flex-end',
    },
    sessionStatus: {
        color: 'white',
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold'
    },
    sessionTime: {
        color: colors.theme_gray,
        fontSize: responsiveFontSize(2),
        marginVertical: 5,
        fontWeight: 'bold'
    },
    counterContainer: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: responsiveHeight(1.8),
    },
    pomodoroDetails: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pomodoroTimeLeft: {
        color: 'white',
        fontSize: responsiveFontSize(6),
        fontWeight: 'bold'
    },
    pomodoroLeft: {
        color: colors.theme_gray,
        fontSize: responsiveFontSize(2),
        marginVertical: responsiveHeight(1),
        fontWeight: 'bold'
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: responsiveHeight(1.8),
        rowGap: 10,
    },
    currentTask: {
        color: 'white',
        fontSize: responsiveFontSize(2),
        marginVertical: 5,
        fontWeight: 'bold'
    },
    controlButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        padding: 10,
    },
    resetBtn: {
        backgroundColor: colors.theme_dark,
        borderRadius: 50,
        padding: 10,
        width: responsiveHeight(7),
        height: responsiveHeight(7),
        alignItems: 'center',
        justifyContent: 'center',
    },
    pauseBtn: {
        backgroundColor: colors.theme_dark,
        borderRadius: 50,
        padding: 10,
        width: responsiveHeight(11.5),
        height: responsiveHeight(11.5),
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancel: {
        backgroundColor: colors.theme_dark,
        borderRadius: 50,
        padding: 10,
        width: responsiveHeight(7),
        height: responsiveHeight(7),
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default styles;