import { StyleSheet } from 'react-native';
import colors from '../../../../constants/colors';
import { height, width } from '../../../../constants/dimesions';

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
        paddingHorizontal: 16,
    },
    month: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.theme_red,
    },
    year: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.theme_red,
    },
    day: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 12,
        width: 50,
        height: 80,
        borderRadius: 50,
        marginHorizontal: 4,
        backgroundColor: colors.theme_dark
    },
    date: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    dayName: {
        fontSize: 14,
        color: 'white',
    },
    dates: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        columnGap: 10,
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
        marginTop: 20,
        height: height * 0.6,
    },
    dayTaskContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.9,
        marginTop: 20,
    },
    taskRight: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '80%',
        paddingHorizontal: 20,
        height: 80,
        borderRadius: 10,
        backgroundColor: colors.theme_dark,
    },
    taskTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    taskStatus: {
        fontSize: 14,
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