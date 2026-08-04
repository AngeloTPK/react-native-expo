import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View, Text, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <ScrollView style={styles.scrollView}>

        <View style={styles.header}>

          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          <Text style={styles.logoText}>Logo</Text>

        </View>

        <View style={styles.box2}>

          <View style={styles.card}>
            <Image
              style={styles.tinyLogoCard}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardData1}> Angelo</Text>
              <Text style={styles.cardData2}> Angelogm2005@gmail.com</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Image
              style={styles.tinyLogoCard}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardData1}> Angelo</Text>
              <Text style={styles.cardData2}> Angelogm2005@gmail.com</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Image
              style={styles.tinyLogoCard}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardData1}> Angelo</Text>
              <Text style={styles.cardData2}> Angelogm2005@gmail.com</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Image
              style={styles.tinyLogoCard}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardData1}> Angelo</Text>
              <Text style={styles.cardData2}> Angelogm2005@gmail.com</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Image
              style={styles.tinyLogoCard}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardData1}> Angelo</Text>
              <Text style={styles.cardData2}> Angelogm2005@gmail.com</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Image
              style={styles.tinyLogoCard}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardData1}> Angelo</Text>
              <Text style={styles.cardData2}> Angelogm2005@gmail.com</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Image
              style={styles.tinyLogoCard}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardData1}> Angelo</Text>
              <Text style={styles.cardData2}> Angelogm2005@gmail.com</Text>
            </View>
          </View>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#6967672d',
  },
  scrollView: {
    height: "1000px",
    backgroundColor: '#030303a1',
  },
  header: {
    flex: 1,
    backgroundColor: '#030303a1',
    flexDirection: 'row',
    alignItems: "center",
  },
  tinyLogo: {
    width: 50,
    height: 50,
    margin: "20px"
  },
  tinyLogoCard: {
    width: 50,
    height: 50,
    borderRadius: "50px"
  },
  logoText: {
    paddingVertical: "30px",
    color: "#fafafa",
    fontSize: 20,
    fontWeight: 'bold',
  },
  box2: {
    flex: 9,
    backgroundColor: '#131010bd',
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginHorizontal: "auto",
    padding: 10,
    margin: "15px",
    border: "solid 1px",
    width: "300px",
    borderRadius: "15px",
    backgroundColor: "white"
  },
  cardContent: {
    flex: 1,
    flexDirection: "column",
    width: "200px"
  },
  cardData1: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: "10px",
    marginBottom: "0px",
    height: "25px"
  },
  cardData2: {
    margin: "10px",
    marginTop: "0px",
    height: "25px",
    color: "grey"
  }
});
