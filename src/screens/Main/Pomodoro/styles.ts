import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';

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
        marginVertical: 30,
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
        fontSize: 20,
        fontWeight: 'bold'
    },
    taskTime: {
        color: colors.theme_gray,
        fontSize: 14,
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
        fontSize: 20,
        fontWeight: 'bold'
    },
    sessionTime: {
        color: colors.theme_gray,
        fontSize: 14,
        marginVertical: 5,
        fontWeight: 'bold'
    },
    counterContainer: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
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
        fontSize: 40,
        fontWeight: 'bold'
    },
    pomodoroLeft: {
        color: colors.theme_gray,
        fontSize: 14,
        marginVertical: 5,
        fontWeight: 'bold'
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        rowGap: 10,
    },
    currentTask: {
        color: 'white',
        fontSize: 14,
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
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pauseBtn: {
        backgroundColor: colors.theme_dark,
        borderRadius: 50,
        padding: 10,
        width: 90,
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancel: {
        backgroundColor: colors.theme_dark,
        borderRadius: 50,
        padding: 10,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default styles;