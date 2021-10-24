import { FONTS } from '../../theme/fonts';

import{StyleSheet} from 'react-native';
import { COLORS } from '../../theme';

export const styles = StyleSheet.create({
    container:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20

    },
    logoutText:{
        fontSize:15,
        fontFamily:FONTS.REGULAR,
        color:COLORS.WHITE,
        marginRight:20,

    },
    logoutbutton:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    }
})