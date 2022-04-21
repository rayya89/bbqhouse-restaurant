//NPM Package
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

// Project files
import { fireStore } from "./firebase"

// Methods
export async function getDocument(path, id) {
    const documentPath = doc(fireStore, path, id);
    const document = await getDoc(documentPath);
    return document.data();
  }

export async function getCollection(path) {
    const collectionPath = collection(fireStore, path);
    const snapshot = await getDocs(collectionPath);
    const documents = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data()};
    });
    return documents;
}