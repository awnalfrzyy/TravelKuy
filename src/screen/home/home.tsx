import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView,
    Image,
    FlatList,
    ImageBackground
} from "react-native";
import { LucideSearch, Settings, BadgePercent } from "lucide-react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Button from "../../components/ui/button";
import CardList from "../../components/cardGrid";
import CardLocalition from "../../components/cardLocalition";

type RootStackParamList = {
    Home: undefined;
    Discon: undefined;
    Settings: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const SPACING_BASE = 8;
const SPACING_SM = 13;  // 8 × φ
const SPACING_MD = 21;  // 8 × φ²
const SPACING_LG = 34;  // 8 × φ³
const SPACING_XL = 55;  // 8 × φ⁴

export default function Home({ navigation }: Props) {
    const [query, setQuery] = useState("");

    const data = [
        { id: "1", title: "Search your destination", image: { uri: "https://picsum.photos/600/400?1" } },
        { id: "2", title: "Compare prices & deals", image: { uri: "https://picsum.photos/600/400?2" } },
        { id: "3", title: "Choose your travel date", image: { uri: "https://picsum.photos/600/400?3" } },
        { id: "4", title: "Book flights or hotels", image: { uri: "https://picsum.photos/600/400?4" } },
    ];

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {/* Top Section */}
            <View style={styles.topSection}>
                <View style={styles.titleSection}>
                    <Text style={styles.title}>Welcome Back!</Text>
                    <Text style={styles.paragraf}>Aswin Alfarizi</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        style={styles.iconButton}
                        variant="ghost"
                        icon={<BadgePercent size={24} />}
                        onPress={() => navigation.navigate("Discon")}
                    />
                    <Button
                        style={styles.iconButton}
                        variant="ghost"
                        icon={<Settings size={24} />}
                        onPress={() => navigation.navigate("Settings")}
                    />
                </View>
            </View>

            {/* Search Bar */}
            <View style={styles.searchSection}>
                <LucideSearch size={20} color="#888" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Search..."
                    value={query}
                    onChangeText={setQuery}
                />
            </View>

            {/* Popular Nearby */}
            <View style={{ gap: SPACING_MD }}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Popular Nearby</Text>
                    <Text style={styles.sectionAction} onPress={() => alert("see")}>
                        See all
                    </Text>
                </View>
                <CardList />
            </View>

            {/* Promo Partner */}
            <View style={{ marginTop: SPACING_LG, gap: SPACING_MD }}>
                <Text style={styles.sectionTitle}>Promo partner</Text>
                <View style={styles.bannerContainer}>
                    <Image
                        source={require("../../../assets/bannerPromo.png")}
                        style={styles.bannerImage}
                    />
                </View>
            </View>

            {/* Choose Location */}
            <View style={{ marginTop: SPACING_LG, gap: SPACING_MD }}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Choose location</Text>
                    <Text style={styles.sectionAction} onPress={() => alert("see")}>
                        See all
                    </Text>
                </View>
                <CardLocalition />
            </View>

            {/* Tutorials */}
            <View style={{ marginTop: SPACING_XL, marginBottom: SPACING_XL }}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <ImageBackground
                            source={item.image}
                            style={styles.tutorialCard}
                            imageStyle={{ borderRadius: 16 }}
                            blurRadius={3}
                        >
                            <View style={styles.tutorialOverlay}>
                                <Text style={styles.tutorialText}>{item.title}</Text>
                            </View>
                        </ImageBackground>
                    )}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: SPACING_MD,
        paddingHorizontal: SPACING_MD,
        backgroundColor: "#fff",
    },
    topSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: SPACING_SM,
        marginTop: SPACING_MD,
    },
    titleSection: {
        flexDirection: "column",
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
    },
    paragraf: {
        fontSize: 18,
        fontWeight: "bold",
    },
    buttonContainer: {
        flexDirection: "row",
        gap: SPACING_BASE,
    },
    iconButton: {
        borderRadius: 36,
        paddingVertical: SPACING_BASE,
        paddingHorizontal: SPACING_BASE,
    },
    searchSection: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f1f1f1",
        borderRadius: 36,
        paddingHorizontal: SPACING_SM,
        paddingVertical: SPACING_BASE,
        marginBottom: SPACING_LG,
    },
    icon: {
        marginRight: SPACING_SM,
    },
    input: {
        flex: 1,
        fontSize: 16,
    },
    sectionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "bold",
    },
    sectionAction: {
        fontSize: 14,
        fontWeight: "bold",
        marginTop: SPACING_SM,
    },
    bannerContainer: {
        width: "100%",
        height: 120,
        borderRadius: 16,
        overflow: "hidden",
    },
    bannerImage: {
        width: "100%",
        height: "100%",
    },
    tutorialCard: {
        width: "100%",
        height: 160,
        marginBottom: SPACING_SM,
        borderRadius: 16,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
    },
    tutorialOverlay: {
        flex: 1,
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.3)",
        justifyContent: "center",
        alignItems: "center",
    },
    tutorialText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },
});
