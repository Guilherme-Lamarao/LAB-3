import { FlatList, Image, Text, TouchableOpacity, View, Alert} from "react-native";
import { Button } from "../components/Button";
import { Filter } from "../components/Filter";
import { Input } from "../components/Input";
import { Item } from "../components/Item";
import { FilterStatus } from "../types/FilterStatus";
import { styles } from "./styles";
import { useState } from "react";


const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE,];

/*const ITEMS = [
  {
    id: "1",
    status: FilterStatus.DONE,
    description: "1 pacote de café",
  },
  {
    id: "2",
    status: FilterStatus.PENDING,
    description: "1 kg de carne",
  },
  {
    id: "3",
    status: FilterStatus.PENDING,
    description: "5 caixas de leite",
  },
];*/

export function Home() {
  const [filter, setFilter] = useState(FilterStatus.DONE);
  const [description, setDescription] = useState("");
  const [items, setItems] = useState<any>([]);

 function handleAdd() {
    if(!description.trim()){
      return Alert.alert("Adicionar", "Informe a descrição para adicionar.")
    }

    const newItem = {
      id: Math.random().toString(36).substring(2),
      description,
      status: FilterStatus.PENDING,
    }

    setItems([...items, newItem])
    setDescription("")
  }
  
  return (
    <View style={styles.container}>
      <Image 
      source={require("../assets/logo.png")} 
      style={styles.logo} />

      <View style={styles.form}>
        <Input placeholder='O que você precisa?' 
        value={description}
        onChangeText={(value) => setDescription(value)}/>

        <Button title="Adicionar"
          activeOpacity={0.2}
          onPress={handleAdd} 
          />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) => (
            <Filter key={status} 
            status={status} 
            isActive={status === filter}
            onPress={() => setFilter(status)}
          />
          ))}

          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <FlatList //lembrabr de tirar essa chave
          data={items}//.filter((item) => item.status === filter)}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item
              data={item}
              onStatus={() => console.log("Mudar o status")}
              onRemove={() => console.log("Remover item")}
            />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => (
            <Text style={styles.empty}>Nenhum item registrado.</Text>
          )}
        />
      </View>
    </View>
  );
}
