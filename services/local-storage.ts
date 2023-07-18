import AsyncStorage from "@react-native-async-storage/async-storage";

export async function setLocal<T>(key: string, data: T) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function getLocal<T>(key: string): Promise<T | null> {
  try {
    const itemString = await AsyncStorage.getItem(key);
    if (!itemString) throw Error("Could not retrieve data");
    return JSON.parse(itemString);
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function deleteLocal(key: string) {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (e) {
    console.log(e);
    return null;
  }
}
