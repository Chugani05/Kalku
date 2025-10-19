import React, { useContext } from "react";
import { Styles } from "@/src/styles/GlobalStyles";
import { colorsPallette } from "@/src/styles/Colors";
import { ThemeContext } from "@/src/context/themeContext";
import { TouchableOpacity, Text } from "react-native";

interface ButtonProps {
    label: string;
    type: string;
    onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, type, onPress }) => {
    const theme = useContext(ThemeContext);

    const getBackgroundColor = (type: string | undefined) => {
      switch (type) {
        case "num":
            return theme === "light" ? colorsPallette.numLight : colorsPallette.numDark;
        case "op":
            return theme === "light" ? colorsPallette.opLight : colorsPallette.opDark;
        case "equal":
            return theme === "light" ? colorsPallette.equalLight : colorsPallette.equalDark;
        case "clear":
            return theme === "light" ? colorsPallette.clearLight : colorsPallette.clearDark;
        default:
            return theme === "light" ? colorsPallette.bgLight : colorsPallette.bgDark;
      }
};

    const textColor = theme === "light" ? colorsPallette.textLight : colorsPallette.textDark;

    return (
        <TouchableOpacity style={[Styles.btn, { backgroundColor: getBackgroundColor(type) }]} onPress={onPress}>
            <Text style={type === "num" ? Styles.label: [Styles.label, { color: textColor }]}>{label}</Text>
        </TouchableOpacity>
    );
};

export default Button;
