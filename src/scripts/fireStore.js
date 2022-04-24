//NPM Package
import { collection, getDocs, doc, getDoc, query, where, setDoc } from "firebase/firestore";

// Project files
import { fireStore } from "./firebase"

// Methods
export async function readDocument(path, id) {
    const documentPath = doc(fireStore, path, id);
    const document = await getDoc(documentPath);
    return document.data();
  }

export async function readCollection(path) {
    const collectionPath = collection(fireStore, path);
    const snapshot = await getDocs(collectionPath);
    const documents = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data()};
    });
    return documents;
}

// export async function getIdByName(path, value) {

//     const collectionPath = collection(fireStore, path);
//     const queryResult = query(collectionPath, where("name", "==", value));
//     const querySnapshot = await getDocs(queryResult);
//     querySnapshot.forEach((doc) => {
//     //   console.log(doc.id, " => ", doc.data());
//     return doc.id;
//     });
// }

//--- Create
export async function createDocument(path, data, id){
    const documentPath = doc(fireStore, path, id);
    await setDoc(documentPath, data);
}

