import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';
import { height, width } from '../../../constants/dimesions';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingBottom: responsiveHeight(2),
    },
    notificationsContainer: {
        paddingBottom: responsiveHeight(10),
    },
    dayNotificationContainer: {
        marginVertical: responsiveHeight(1),
    },
    dayNotificationTitle: {
        color: 'white',
        fontSize: responsiveFontSize(2.8),
        fontWeight: 'bold',
        marginBottom: responsiveHeight(1),
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
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
        marginBottom: 5,
    },
    dayNotificationText: {
        color: colors.theme_gray,
        fontSize: responsiveFontSize(2.0),
        marginBottom: 5,
    },
})

export default styles;