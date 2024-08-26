"use server";
import {
  getFirestore,
  collection,
  DocumentData,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore/lite";
import firebase from "@/firebase";

const db = getFirestore(firebase);

export async function updateDocument(collectionName: string, data: any) {
  try {
    const docRef = doc(collection(db, collectionName), "uniqueDoc");
    await setDoc(docRef, data, { merge: true });
    return { success: true, message: "Document updated successfully" };
  } catch (error) {
    console.error("Error updating document: ", error);
    return { success: false, message: "Error updating document" };
  }
}

export async function getDocument(collectionName: string) {
  const doc: DocumentData[] = [];
  const querySnapshot = await getDocs(collection(db, collectionName));
  return querySnapshot.docs.map((doc) => doc.data());
}
