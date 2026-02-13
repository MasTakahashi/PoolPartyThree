import { Text, View } from "react-native";
import Player from "../components/player_score/player";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This is where the scorekeeper will go.</Text>
      <Text>| 0 |</Text>
      <Player />
    </View>
  );
}
