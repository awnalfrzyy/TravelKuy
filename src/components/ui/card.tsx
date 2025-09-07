import React, { ReactNode } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { LucideStar, Heart } from "lucide-react-native";
import Button from "./button";

interface CardProps {
    children: ReactNode;
    style?: object;
    image?: any; // source image
}

interface CardSubProps {
    children?: ReactNode;
    style?: object;
    title?: string;
    description?: string;
    rating?: number; // 0-5
    onPress?: () => void;
    buttonLabel?: string;
}

type CardFooterProps = {
    buttonLabel: string;
    onPress: () => void;
    style?: object;
};

export function Card({ children, style, image }: CardProps) {
    return (
        <View style={[styles.card, style]}>
            {image && <Image source={image} style={styles.image} />}
            {children}
        </View>
    );
}

export function CardHeader({ title, description, style }: CardSubProps) {
    return (
        <View style={[styles.header, style]}>
            {title && <Text style={styles.title}>{title}</Text>}
            {description && <Text style={styles.description}>{description}</Text>}
        </View>
    );
}

export function CardContent({ children, style }: CardSubProps) {
    return <View style={[styles.content, style]}>{children}</View>;
}

export function CardRating({ rating = 0, style }: CardSubProps) {
    return (
        <View style={[styles.ratingContainer, style]}>
            {Array.from({ length: 5 }).map((_, i) => (
                <LucideStar
                    key={i}
                    size={16}
                    color={i < rating ? "#FFD700" : "#ccc"}
                    style={{ marginRight: 2 }}
                />
            ))}
        </View>
    );
}

export function CardFooter({ buttonLabel, onPress, style, variant = "primary" }: CardFooterProps & { variant?: "primary" | "outline" | "ghost" }) {
    return (
        <View style={[styles.footer, style]}>
            <Pressable
                style={({ pressed }) => [
                    styles.baseButton,
                    variant === "primary" && styles.primary,
                    variant === "outline" && styles.outline,
                    variant === "ghost" && styles.ghost,
                    pressed && { opacity: 0.8 }
                ]}
                onPress={onPress}
            >
                <Text style={styles.buttonText}>{buttonLabel}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        width: "100%",
        borderRadius: 16,
        overflow: "hidden",
        marginVertical: 8,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
        elevation: 4,
    },
    image: {
        width: "100%",
        height: 160,
        resizeMode: 'cover',
    },
    header: {
        paddingHorizontal: 16,
        paddingTop: 12,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 4,
    },
    description: {
        fontSize: 14,
        color: "#666",
    },
    content: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    ratingContainer: {
        flexDirection: "row",
        paddingHorizontal: 16,
        marginTop: 4,
    },
    footer: {
        paddingHorizontal: 2,
        paddingVertical: 2,
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    button: {
        backgroundColor: "#007AFF",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 12,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",

    },
    baseButton: {
        width: "100%",
        paddingVertical: 10,
        paddingHorizontal: 2,
        borderRadius: 12,
        alignItems: "center",
    },
    primary: {
        backgroundColor: "#007AFF",
    },
    outline: {
        borderWidth: 1,
        borderColor: "#007AFF",
        backgroundColor: "transparent",
    },
    ghost: {
        backgroundColor: "transparent",
    },

});
