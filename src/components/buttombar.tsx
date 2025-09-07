import Button from "./ui/button";
import { View, Text, StyleSheet } from "react-native";

type Props = {
    title: string;
    paragraph: string;
    buttonLabel: string;
    onPress: () => void;
};

export default function ButtonBar({ title, paragraph, buttonLabel, onPress }: Props) {
    return (
        <View style={styles.container}>
            {/* Cover buat element draggable bar */}
            <View style={styles.cover}>
                <View style={styles.element}></View>
            </View>

            {/* Konten teks */}
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.paragraph}>{paragraph}</Text>
            </View>

            {/* Button di bawah */}

            <Button
                style={{ borderRadius: 36 }}
                variant="primary"
                title={buttonLabel}
                onPress={onPress}

            />


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "50%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 24,
        paddingBottom: 70, // <- ini bikin button naik otomatis
        backgroundColor: "#fff",
        justifyContent: "space-between",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },

    cover: {
        justifyContent: "center",
        alignItems: "center",
    },
    element: {
        width: 60,
        height: 6,
        backgroundColor: "#D9D9D9",
        borderRadius: 30,
    },
    content: {
        marginBottom: 100,
        alignItems: "center", // center teks horizontal
    },
    title: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        color: "#007AFF",
        marginBottom: 16,
    },
    paragraph: {
        textAlign: "center",
        fontSize: 18,
        color: "#333",
        lineHeight: 26,
    },
});
