import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Button from '../../components/ui/button';


type RootStackParamList = {
    Opening: undefined;
    Tentangkami: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Tentangkami">;

export default function Tentangkami({ navigation }: Props) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Logo */}
            <Image source={require("../../../assets/logo.png")} style={styles.image} />

            {/* Content */}
            <View style={styles.textcontainer}>
                <Text style={styles.title}>Tentang Kami</Text>
                <Text style={styles.paragraf}>
                    Selamat datang di <Text style={styles.highlight}>TravelGo</Text>!
                    Kami hadir untuk memudahkan perjalananmu, mulai dari mencari destinasi,
                    pesan tiket, hingga rekomendasi pengalaman lokal terbaik.
                </Text>

                <Text style={styles.title}>Misi Kami</Text>
                <Text style={styles.paragraf}>
                    Memberikan pengalaman perjalanan yang menyenangkan, cepat, dan aman.
                    Kami percaya bahwa setiap perjalanan adalah cerita baru yang harus
                    diingat sepanjang hidup.
                </Text>

                <Text style={styles.title}>Kenapa Pilih Kami?</Text>
                <Text style={styles.paragraf}>
                    - Mudah digunakan dengan tampilan sederhana. {"\n"}
                    - Harga transparan tanpa biaya tersembunyi. {"\n"}
                    - Dukungan 24/7 untuk kebutuhan perjalananmu.
                </Text>
            </View>

            {/* Button */}
            <Button
                variant="primary"
                title="Back Home"
                onPress={() => navigation.navigate("Opening")}
            />
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        padding: 20,
        alignItems: 'center',
    },
    image: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    textcontainer: {
        marginBottom: 30,
        width: '100%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#007AFF',
    },
    paragraf: {
        fontSize: 16,
        lineHeight: 24,
        color: '#333',
        marginBottom: 20,
        textAlign: 'justify',
    },
    highlight: {
        fontWeight: 'bold',
        color: '#FF7A00',
    },
});
