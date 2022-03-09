import {StyleSheet} from "react-native";

const colors = {
    primaryColor: '#69C1F8',
    secondaryColor: '#F8CE31',
    // accent: '#5B7186',
    accent: 'white',
}

export const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },

    secondaryContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },

    titleStyle: {
        textAlign: 'center',
        fontSize: 70,
        color: colors.accent,
    },

    subTitleStyle: {
        textAlign: 'center',
        fontSize: 20,
        color: colors.accent,
    },

    ctaStyle: {
        textAlign: 'center',
        fontSize: 15,
        color: colors.accent,
    }
});