import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  RefreshControl,
  ActivityIndicator,
} from "react-native";

import { useEffect, useState } from "react";
import { styles } from "./styles";

const posts = Array.from({ length: 30 }, (_, index) => ({
  id: Math.random(),
  title: `Post #${index + 1}`,
}));

const ListItem = ({ title }) => {
  useEffect(() => {
    console.log(`Mounted o ${title}`);

    return () => {
      console.log(`Unmounted o ${title}`);
    };
  }, []);

  return (
    <View style={styles.postContainer}>
      <Text style={styles.postTitle}>{title}</Text>
    </View>
  );
};

const Header = ({ title }) => (
  <View style={{ backgroundColor: "#ccc", padding: 16, borderRadius: 8 }}>
    <Text>{title}</Text>
  </View>
);

const Footer = () => (
  <View style={{ backgroundColor: "#111", padding: 24, borderRadius: 8 }}>
    <Text style={{ color: "#f2f2f2" }}>Footer</Text>
  </View>
);

const EmptyState = () => (
  <View style={{ backgroundColor: "#555", padding: 24, borderRadius: 8 }}>
    <Text style={{ color: "#f2f2f2" }}>Nenhum post no momento!</Text>
  </View>
);

export const App = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("handleRefresh");

    setIsRefreshing(false);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <ActivityIndicator animating color={"purple"} size={"small"} />

      <FlatList
        refreshControl={
          <RefreshControl // pode ser usada na scroll view
            onRefresh={handleRefresh}
            refreshing={isRefreshing}
            // iOS only
            tintColor="purple"
            title="Carregando posts..."
            titleColor="purple"
            // Android only
            colors={["purple"]}
            progressBackgroundColor={""}
            size={"default"} // or large
          />
        }
        ListHeaderComponent={<Header title="Posts" />}
        ListFooterComponent={<Footer />}
        ListEmptyComponent={<EmptyState />}
        stickyHeaderIndices={[0, 4]}
        contentContainerStyle={{ gap: 16 }}
        style={styles.container}
        data={posts}
        keyExtractor={(post) => post.id}
        renderItem={({ item: post }) => <ListItem title={post.title} />}
        getItemLayout={(data, index) => ({
          index,
          length: 64 + 16,
          offset: (64 + 16) * index,
        })}
      />
    </SafeAreaView>
  );
};
