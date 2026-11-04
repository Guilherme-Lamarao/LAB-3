
//import { View, Image, TouchableOpacity, Text, ScrollView } from "react-native";
import { View, Image, TouchableOpacity, Text, FlatList } from "react-native";

import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Filter } from '../components/Filter';
import { Item } from '../components/Item';




import { styles } from './styles';
import { FilterStatus } from '../types/FilterStatus';

const FILTER_STATUS: FilterStatus[] = [
	FilterStatus.PENDING, FilterStatus.DONE
];

const ITEMS = [
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
  }
]

//const ITEMS = Array.from({ length: 100 }).map((value, index) => index.toString())

export function Home() {
  let filter = FilterStatus.DONE;
  /*return (
    <View style={styles.container}>
      <Image 
        source={require("../assets/logo.png")} 
        style={styles.logo} 
      />   

      <Input placeholder='O que você precisa' />

      

      <Button title="Adicionar" 
	      activeOpacity={0.2} 
	      onPress={() => console.log("Adicionar")} 
	    />



      <View style={styles.content}>
	{/*<ScrollView>   
	{Array.from({ length: 100 }).map((value, index) => {
          
          return (
            <Item
              key={index}
              data={{ status: FilterStatus.DONE, description: "Café" }}
              onStatus={() => console.log("Mudar o status")}
              onRemove={() => console.log("Remover item")}
            />)
        })}
  </ScrollView> }

  <FlatList 
    data={ITEMS}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <Item
        data={ item }
        onStatus={() => console.log("Mudar o status")}
        onRemove={() => console.log("Remover item")}
      />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={() => <Text style={styles.empty}>Nenhum item registrado.</Text>}
    />
    
	    
	  </View>  
      
    
      
    </View>

    

    
  );*/

  return (
    <View style={styles.container}>
      <Image 
        source={require("../assets/logo.png")} 
        style={styles.logo} 
      /> 
      <View style={styles.form}>
        <Input placeholder='O que você precisa?' />

        <Button title="Adicionar" 
          activeOpacity={0.2} 
          onPress={() => console.log("Adicionar")} 
        />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) => (
            <Filter key={status} status={status} isActive={status === filter} />
          ))}

          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>
        
        <FlatList 
          data={ITEMS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item
              data={ item }
              onStatus={() => console.log("Mudar o status")}
              onRemove={() => console.log("Remover item")}
            />
              )}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              contentContainerStyle={styles.listContent}
              ListEmptyComponent={() => <Text style={styles.empty}>Nenhum item registrado.</Text>}
        />
      </View>

    </View>

  );
}