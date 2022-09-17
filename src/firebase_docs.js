import { doc, setDoc, onSnapshot } from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database";

import { db } from "./firebase";

export async function writeUserData(name, id, document) {
  const db = getDatabase();
  // console.log("writing-->", name, id, document);
  return set(ref(db, `${name}/${id}`), document);
}
export const setDocuments = async (name, id, documents) => {
  // Add a new document in collection "cities"
  await setDoc(doc(db, name, id), documents);
};

export function makeid(length) {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export const fetchUser = async (endpoint) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(`https://jsonplaceholder.typicode.com/${endpoint}`, requestOptions).then((response) => response.json());
};
