import { FlatList, View, StyleSheet, Text, Dimensions } from "react-native";
import { Card, CardHeader, CardFooter, CardRating } from "./ui/card";

const { width: screenWidth } = Dimensions.get('window');

const products = [
    {
        id: "1",
        title: "Bali",
        desc: "Beach & Culture",
        rating: 4,
        image: require("../../assets/bali.jpg"),
        price: "$299"
    },
    {
        id: "2",
        title: "Lombok",
        desc: "Island Adventure",
        rating: 5,
        image: require("../../assets/bali.jpg"),
        price: "$249"
    },
    {
        id: "3",
        title: "Lombok",
        desc: "Island Adventure",
        rating: 5,
        image: require("../../assets/bali.jpg"),
        price: "$249"
    },
    {
        id: "4",
        title: "Lombok",
        desc: "Island Adventure",
        rating: 5,
        image: require("../../assets/bali.jpg"),
        price: "$249"
    },

];

export default function CardList() {
    return (
        <View>
            <FlatList
                data={products}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={CARD_WIDTH + SPACING}
                decelerationRate="fast"
                contentContainerStyle={styles.listContent}
                renderItem={({ item, index }) => (
                    <View style={[
                        styles.cardWrapper,
                        index === products.length - 1 && styles.lastCard
                    ]}>
                        <Card image={item.image} style={styles.card}>
                            {/* Header Section */}
                            <View style={styles.cardContent}>
                                <View style={styles.headerSection}>
                                    <View style={styles.titleContainer}>
                                        <Text style={styles.title}>{item.title}</Text>
                                        <Text style={styles.description}>{item.desc}</Text>
                                    </View>
                                    <View style={styles.priceContainer}>
                                        <Text style={styles.priceLabel}>from</Text>
                                        <Text style={styles.price}>{item.price}</Text>
                                    </View>
                                </View>

                                {/* Rating Section */}
                                <View style={styles.ratingSection}>
                                    <CardRating rating={item.rating} />
                                    <Text style={styles.ratingText}>
                                        {item.rating}.0 ({Math.floor(Math.random() * 500) + 100} reviews)
                                    </Text>
                                </View>

                                {/* Footer Section */}
                                <CardFooter
                                    buttonLabel="Book Now"
                                    onPress={() => alert("Booked")}
                                    style={styles.footer}
                                />
                            </View>
                        </Card>
                    </View>
                )}
            />
        </View>
    );
}

// Constants
const CARD_WIDTH = screenWidth * 0.75; // 75% of screen width
const SPACING = 16;

const styles = StyleSheet.create({

    listContent: {
        paddingHorizontal: 20,
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
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.08,
        shadowRadius: 12,
        elevation: 5,
    },
    cardContent: {
        padding: 20,
    },
    headerSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 16,
    },
    titleContainer: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#1A1A1A',
        letterSpacing: -0.5,
        marginBottom: 4,
    },
    description: {
        fontSize: 14,
        color: '#6B7280',
        fontWeight: '400',
    },
    priceContainer: {
        alignItems: 'flex-end',
    },
    priceLabel: {
        fontSize: 11,
        color: '#9CA3AF',
        fontWeight: '500',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    price: {
        fontSize: 22,
        fontWeight: '700',
        color: '#059669',
        marginTop: 2,
    },
    ratingSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 20,
        paddingTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#F3F4F6',
    },
    ratingText: {
        fontSize: 13,
        color: '#6B7280',
        fontWeight: '400',
    },
    footer: {
        marginTop: 4,
    },
    bookButton: {
        width: '100%',
        paddingVertical: 14,
        borderRadius: 12,
        backgroundColor: '#059669',
        shadowColor: '#059669',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
    },
});