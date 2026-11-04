import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { styles } from "./styles";
import { FilterStatus } from "../../types/FilterStatus";
import { StatusIcon } from "../StatusIcon";

type Props = TouchableOpacityProps & {
    status:  FilterStatus,
    isActive: boolean,
}

export function Filter({ status, isActive, ...rest }: Props) {
    return(
        <TouchableOpacity 
            style={[styles.container, {opacity: isActive ? 1 : 0.5 }]}            
            { ...rest } 
        >
            {/* O StatusIcon tem de ficar aqui dentro, como "filho" do TouchableOpacity */}
            <StatusIcon status={status}/>

            <Text style={styles.title}>
                { status === FilterStatus.DONE ? "Comprados" : "Pendentes" }
            </Text>
        </TouchableOpacity>
    );
}