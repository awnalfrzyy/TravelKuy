import { FlatList, View, StyleSheet, Text, Dimensions, Image } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

const products = [
    { id: "1", title: "Bali", image: require("../../assets/bali.jpg") },
    { id: "2", title: "Lombok", image: require("../../assets/bali.jpg") },
    { id: "3", title: "Lombok", image: require("../../assets/bali.jpg") },
    { id: "4", title: "Lombok", image: require("../../assets/bali.jpg") },
];

export default function CardLocation() {
    return (
        <View>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={CARD_WIDTH + SPACING}
                decelerationRate="fast"
                contentContainerStyle={styles.listContent}
                renderItem={({ item, index }) => (
                    <View
                        style={[
                            styles.cardWrapper,
                            index === products.length - 1 && styles.lastCard,
                        ]}
                    >
                        <View style={styles.card}>
                            {/* Background image full */}
                            <Image source={item.image} style={styles.image} resizeMode="cover" />

                            {/* Text di tengah */}
                            <View style={styles.overlay}>
                                <Text style={styles.text}>{item.title}</Text>
                            </View>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}

// Constants
const CARD_WIDTH = screenWidth * 0.87; // 75% of screen width
const CARD_HEIGHT = 260;
const SPACING = 16;

const styles = StyleSheet.create({
    listContent: {

        paddingVertical: 10,
    },
    cardWrapper: {
        width: CARD_WIDTH,
        marginRight: SPACING,
    },
    lastCard: {
        marginRight: 0,
    },
    card: {
        width: "100%",
        height: CARD_HEIGHT,
        borderRadius: 20,
        overflow: "hidden", // biar radius motong image
        elevation: 5,
        backgroundColor: "#eee",
    },
    image: {
        width: "100%",
        height: "100%",
        position: "absolute", // jadi background
    },
    overlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        textShadowColor: "rgba(0,0,0,0.7)", // biar lebih kebaca
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
    },
});
