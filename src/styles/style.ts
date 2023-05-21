
import {StyleSheet } from 'react-native';
import {theme} from "../../theme";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.screen.background.dark,
        marginTop: 10,
    },
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});