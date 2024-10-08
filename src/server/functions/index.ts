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
    await setDoc(docRef, data);
    return { success: true, message: "Document updated successfully" };
  } catch (error) {
    console.error("Error updating document: ", error);
    return { success: false, message: "Error updating document" };
  }
}

export async function getDocument(collectionName: string) {
  const querySnapshot = await getDocs(collection(db, collectionName));

  if (!querySnapshot.empty) {
    const docData = querySnapshot.docs[0].data();
    return docData;
  } else {
    return null;
  }
}
