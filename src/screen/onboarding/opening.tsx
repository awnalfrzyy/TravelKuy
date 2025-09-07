import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../components/ui/button';
import { NativeStackScreenProps } from "@react-navigation/native-stack";


type RootStackParamList = {
    Opening: undefined;
    Tentangkami: undefined;
    Stepone: undefined;
    Stepthree: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Opening">;

export default function Opening({ navigation }: Props) {
    return (
        <View style={styles.container}>
            {/* Konten Tengah */}
            <View style={styles.content}>
                <Text style={styles.text}>Jelajah dunia, mulai dari genggamanmu.
                    Booking tiket, hotel, dan pengalaman seru jadi gampang banget</Text>
            </View>

            {/* Footer Button */}
            <View style={styles.footer}>
                <Button style={{ borderRadius: 36 }} title="Mulai disini" onPress={() => navigation.navigate("Stepone")} variant='primary' />
                <Button style={{ borderRadius: 36 }} title="Tentang kami" onPress={() => navigation.navigate("Tentangkami")} variant='outline' />

            </View>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1, // isi penuh
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        gap: 6,
        padding: 20,
        marginBottom: 40, // biar gak mepet layar
    },
    text: {
        width: 300,
        fontSize: 36,
        color: '#000'
    }
});
