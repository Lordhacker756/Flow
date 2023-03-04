import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';
import { height, width } from '../../../constants/dimesions';

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingBottom: height * 0.1,
    },
    dayNotificationContainer: {
        marginVertical: 10,
    },
    dayNotificationTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    dayNotification: {
        backgroundColor: colors.theme_dark,
        borderRadius: 10,
        padding: 20,
        marginVertical: 5,
        width: width - 40,
    },
    dayNotificationHeading: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    dayNotificationText: {
        color: colors.theme_gray,
        fontSize: 16,
        marginBottom: 5,
    },
})

export default styles;