import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
    pageContainer: {
        backgroundColor: 'black',
        paddingTop: responsiveHeight(3),
        paddingBottom: responsiveHeight(10),
    },
    graphContainer: {
        height: responsiveHeight(40),
        width: '100%',
    },
    graphHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: responsiveHeight(2),
        paddingHorizontal: responsiveWidth(6),
    },
    graphHeaderText: {
        color: 'white',
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
    },

    selectList: {
        borderWidth: 1,
        borderColor: colors.theme_red,
        borderRadius: 50,
        height: responsiveHeight(5),
        paddingVertical: responsiveHeight(0.5),
        alignItems: 'center',
        columnGap: responsiveWidth(2),
        position: 'relative',
    },
    selectListText: {
        color: colors.theme_red,
        fontSize: responsiveFontSize(1.8),
        fontWeight: 'bold',
    },
    selectListDropdown: {
        borderWidth: 1,
        borderColor: colors.theme_red,
    },
    selectListDropdownItem: {
        backgroundColor: 'black',
        paddingVertical: responsiveHeight(1),
        paddingHorizontal: responsiveWidth(2),
    },
    selectListDropdownText: {
        color: colors.theme_red,
        fontSize: responsiveFontSize(1.8),
        textAlign: 'center',
    },
    floatingControl: {
        position: 'absolute',
        top: 10,
        right: 0,
        zIndex: 10000,
    },
    allTaskContainer: {
        paddingHorizontal: responsiveWidth(6),
        marginTop: responsiveHeight(2),
    },
    allTaskHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: responsiveHeight(2),
    },
    allTaskHeaderText: {
        color: 'white',
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
    },
    allTaskHeaderButton: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: responsiveWidth(1),
    },
    allTaskHeaderButtonText: {
        color: colors.theme_red,
        fontSize: responsiveFontSize(1.8),
        fontWeight: 'bold',
    },
    taskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: responsiveHeight(2),
        backgroundColor: colors.theme_dark,
        borderRadius: 10,
        paddingVertical: responsiveHeight(1),
        paddingHorizontal: responsiveWidth(4),
        height: responsiveHeight(12),
    },
    taskLeft: {
        rowGap: responsiveHeight(0.6),
    },
    taskTitle: {
        color: 'white',
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
    },
    taskTime: {
        color: 'white',
        fontSize: responsiveFontSize(2.2),
    },
    taskCategory: {
        color: colors.theme_red,
        fontSize: responsiveFontSize(2.1),
        fontWeight: 'bold',
    },

})

export default styles;