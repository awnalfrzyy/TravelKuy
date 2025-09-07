import { Pressable, Text, View, StyleSheet, GestureResponderEvent } from "react-native";
import React from "react";

type ButtonProps = {
    title?: string;
    icon?: React.ReactNode;
    onPress: (event: GestureResponderEvent) => void;
    variant?: "primary" | "secondary" | "outline" | "ghost";
    style?: object;
};

export default function Button({ title, icon, onPress, variant = "primary", style }: ButtonProps) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.button,
                variant === "primary" && styles.primary,
                variant === "secondary" && styles.secondary,
                variant === "outline" && styles.outline,
                variant === "ghost" && styles.ghost,
                pressed && { backgroundColor: "#82u1873" }, // efek background saat ditekan
                style, // ini untuk style tambahan dari luar
            ]}
        >
            <View style={styles.content}>
                {icon && <View style={{ marginRight: title ? 8 : 0 }}>{icon}</View>}
                {title && <Text style={[styles.text, variant === "secondary" && { color: "#000" }, variant === "outline" && { color: "#007AFF" }]}>{title}</Text>}
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
    },
    primary: { backgroundColor: "#007AFF" },
    secondary: { backgroundColor: "#E5E5EA" },
    outline: { borderWidth: 2, borderColor: "#007AFF", backgroundColor: "transparent" },
    ghost: { backgroundColor: "transparent" },
    text: { color: "#fff", fontWeight: "bold" },
});
