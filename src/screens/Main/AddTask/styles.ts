import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';
import { width } from '../../../constants/dimesions';

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: 'black'
    },
    inputContainer: {
        marginVertical: 10,
        rowGap: 10
    },
    inputTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: colors.theme_dark,
        color: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10
    },
    select_input: {
        backgroundColor: colors.theme_dark,
        color: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        borderWidth: 0,
    },
    halfParent: {
        flexDirection: 'row',
    },
    halfInputContainer: {
        width: width * 0.45 - 10,
    },
    specialInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.theme_dark,
        color: 'white',
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginVertical: 5,
        borderRadius: 10
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        columnGap: 20
    },
    selectValue: {
        color: colors.theme_gray,
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 10
    },
    button: {
        backgroundColor: colors.theme_red,
        paddingVertical: 15,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
})

export default styles;