import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#d0d2d8',
  alignItems: 'center',
  paddingTop: 62,
  padding: 24
},

header: {
    width: "100%",
    flexDirection: "row",
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E4E6EC",
    paddingBottom: 12
  },

  text: {
    fontSize: 32,
    fontWeight: '700',
    color:"red",
  },

  form: {
    width: "100%",
    paddingHorizontal: 16,
    gap: 10,
    marginTop: 42, 
  },
  
  logo: {
    height: 34,
    width: 134,
    marginBottom: 50,
  },

  content: {
    flex: 1,
    width: "100%",
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    marginTop: 24,
    
  },

  clearButton: {
    marginLeft: "auto",
  },
  clearText: {
    fontSize: 12,
    color: "#828282",
    fontWeight: 600,
  },

   separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#EEF0F5",
    marginVertical: 16,
  },

  listContent: {
    paddingTop: 24,
    paddingBottom: 62,
  },

  empty: {
    fontSize: 14,
    color: "#808080",
    textAlign: "center",
  },
 
});