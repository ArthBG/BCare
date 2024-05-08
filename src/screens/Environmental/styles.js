import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#EAEAEA",
    paddingHorizontal: 20, // Adiciona padding horizontal para espaçamento nos lados
    paddingTop: 20, // Adiciona padding no topo
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
    marginBottom: 20, // Espaçamento inferior após o título
  },
  section: {
    marginBottom: 20, // Espaçamento inferior entre seções
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3, // Adiciona sombra (Android)
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    color: "#333",
  },
  footer: {
    marginTop: 20,
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#666",
  },
});

export default styles;
