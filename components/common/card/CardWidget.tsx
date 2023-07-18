import React, { ReactNode, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Card, IconButton, Text } from "react-native-paper";
import { theme } from "../../../theme/theme";

interface Props {
  title?: string;
  children: ReactNode;
}
export default function CardWidget(props: Props) {
  const [minimized, setMinimized] = useState(false);

  return (
    <Card>
      <View style={styles.titleBar}>
        <Text style={styles.title}>{props.title}</Text>
        <IconButton
          icon={minimized ? "plus" : "minus"}
          size={12}
          iconColor={theme.colors.onPrimary}
          onPress={() => setMinimized(!minimized)}
        />
      </View>
      {!minimized && (
        <Card.Content style={styles.content}>{props.children}</Card.Content>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  titleBar: {
    backgroundColor: theme.colors.primary,
    flexDirection: "row",
    alignItems: "center",
    paddingStart: 16,
    paddingVertical: 0,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  title: {
    color: theme.colors.onPrimary,
    marginEnd: "auto",
  },
  content: {
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
});
