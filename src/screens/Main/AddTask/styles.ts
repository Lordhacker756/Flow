import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';
import { width } from '../../../constants/dimesions';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        paddingHorizontal: responsiveWidth(5),
        backgroundColor: 'black'
    },
    inputContainer: {
        marginVertical: responsiveHeight(1.0),
        rowGap: responsiveHeight(0.8)
    },
    inputTitle: {
        color: 'white',
        fontSize: responsiveFontSize(2.6),
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: colors.theme_dark,
        color: 'white',
        paddingHorizontal: responsiveWidth(4),
        paddingVertical: responsiveHeight(1),
        borderRadius: 10
    },
    select_input: {
        backgroundColor: colors.theme_dark,
        color: 'white',
        paddingHorizontal: responsiveWidth(4),
        paddingVertical: responsiveHeight(1.5),
        borderRadius: 10,
        borderWidth: 0,
    },
    halfParent: {
        flexDirection: 'row',
    },
    halfInputContainer: {
        width: responsiveWidth(50) - 20,
    },
    specialInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.theme_dark,
        color: 'white',
        paddingHorizontal: responsiveWidth(4),
        paddingVertical: responsiveHeight(1.5),
        marginVertical: 5,
        borderRadius: 10
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        columnGap: responsiveWidth(2.5)
    },
    selectValue: {
        color: colors.theme_gray,
        fontSize: responsiveFontSize(2.2),
        fontWeight: 'bold',
        paddingHorizontal: 10
    },
    button: {
        backgroundColor: colors.theme_red,
        paddingHorizontal: responsiveWidth(4),
        paddingVertical: responsiveHeight(1.5),
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
        textAlign: 'center'
    },
})

export default styles;