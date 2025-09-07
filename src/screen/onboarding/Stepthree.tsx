import { View, Text, Image, StyleSheet } from "react-native";
import ButtonBar from "../../components/buttombar";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
    Steptwo: undefined;
    Stepthree: undefined;
    Main: undefined;

};

type Props = NativeStackScreenProps<RootStackParamList, "Stepthree">;

export default function Steptwo({ navigation }: Props) {
    return (
        <View style={styles.container}>
            {/* Logo / konten di atas */}
            <View style={styles.topContent}>
                <Image source={require("../../../assets/Hiking.png")} style={styles.image} />
            </View>

            {/* ButtonBar nempel di bawah */}
            <ButtonBar
                title="Explore Local Attractions"
                paragraph="Explore hidden local spots and enjoy authentic moments in every trip."
                buttonLabel="Next"
                onPress={() => navigation.replace("Main")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // penting biar ButtonBar bisa absolute di bawah
        backgroundColor: "#0088FF",
    },
    topContent: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 100,
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: "contain",
        marginBottom: 220,
    },
    heading: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#007AFF",
        textAlign: "center",
    },
});
