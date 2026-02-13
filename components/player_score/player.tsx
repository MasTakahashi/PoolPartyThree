import React, { useState } from "react";
import { Button, Text, View } from "react-native";

const Player = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text> Player 1</Text>
      <Button title="scorePlus" onPress={() => setCount(count + 1)} />
      <Text>{count}</Text>
      <Button title="scoreMinus" onPress={() => setCount(count - 1)} />
    </View>
  );
};
export default Player;
