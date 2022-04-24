//NPM Package
import { collection, doc } from "firebase/firestore";
import { getDocs, getDoc, setDoc, deleteDoc } from "firebase/firestore";


// Project files
import { fireStore } from "./firebase"

// Methods
//--- Create
export async function createDocument(path, data, id){
    const documentPath = doc(fireStore, path, id);
    await setDoc(documentPath, data);
}

//------Read
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

//--- Update
export async function updateDocument(path, data) {
    const id= data.id;
    const documentPath= doc(fireStore, path, id);
    await setDoc(documentPath, data)
}

//--- Delete
export async function deleteDocument(path, id) {
    const documentPath= doc(fireStore, path, id);
    await deleteDoc(documentPath);
    }



