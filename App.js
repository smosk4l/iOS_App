import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import Card from "./components/Card";
import { shuffleArray } from "./utils/arrayUtils";

const cards = [
  "🥹",
  "🗣️",
  "🦷",
  "🍑",
  "🌪️",
  "🌎",
  "🐷",
  "🪝",
  "⚛️",
  "🔑",
  "🥕",
  "🥑",
  "👻",
  "🥶",
  "🥵",
];

const App = () => {
  const [board, setBoard] = useState(() => shuffleArray([...cards]));
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [score, setScore] = useState(0);

  const handleTapCard = (index) => {
    if (selectedCards.length >= 2 || selectedCards.includes(index)) return;
    setSelectedCards([...selectedCards, index]);
    setScore(score + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Memory</Text>
      <View style={styles.board}>
        {board.map((card, index) => {
          const isTurnedOver =
            selectedCards.includes(index) || matchedCards.includes(index);
          return (
            <Card
              key={index}
              isTurnedOver={isTurnedOver}
              onPress={() => handleTapCard(index)}
            >
              {card}
            </Card>
          );
        })}
      </View>

      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    color: "#fff",
    fontWeight: 900,
  },
  board: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});

export default App;
