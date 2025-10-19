import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
    theme: String;
    onToggle: () => void;
}

export default function ThemeToggle({ theme, onToggle }: Props) {
    const isLight = theme === "light";
    return (
        <TouchableOpacity onPress={onToggle}>
        <Ionicons
            name={isLight ? "sunny" : "moon"}
            size={30}
            color={isLight ? "orange" : "white"}
        />
        </TouchableOpacity>
    );
}
