import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor: 'black'
    },
    profilePicContainer: {
        height: responsiveHeight(25),
        width: responsiveWidth(100),
        alignItems: 'center',
        justifyContent: 'center',
    },
    profilePic: {
        height: responsiveHeight(20),
        width: responsiveHeight(20),
        resizeMode: 'contain',
        borderRadius: responsiveWidth(50),
        borderWidth: 2,
        borderColor: colors.theme_red,
        position: 'relative',
    },
    editIcon: {
        height: responsiveHeight(5),
        width: responsiveHeight(5),
        position: 'absolute',
        bottom: responsiveHeight(5),
        right: responsiveWidth(30),
        backgroundColor: colors.theme_dark,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: responsiveWidth(50),
    },
    moreDetails: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: responsiveHeight(0),
        rowGap: responsiveHeight(0.5),
    },
    name: {
        color: 'white',
        fontSize: responsiveFontSize(3),
        fontWeight: 'bold',
    },
    email: {
        color: colors.theme_red,
        fontSize: responsiveFontSize(2),
    },
    options: {
        marginTop: responsiveHeight(5),
        width: responsiveWidth(100),
        paddingHorizontal: responsiveWidth(5),
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: responsiveWidth(5),
        paddingVertical: responsiveHeight(2),
        borderBottomWidth: 1,
        marginBottom: responsiveHeight(1),
        borderBottomColor: colors.theme_dark,
    },
    optionText: {
        color: 'white',
        fontSize: responsiveFontSize(2),
    },
})

export default styles;