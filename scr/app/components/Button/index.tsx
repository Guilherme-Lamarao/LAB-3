import { TouchableOpacity, Text } from "react-native";

import { styles } from "./styles";

type Props = {
    title: string
    onPress?: () => void
    activeOpacity?: number
}

export function Button({ title }: Props) {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

