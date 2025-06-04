import { db } from "./firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export const submitFormData = async (
  collectionName: string,
  data: Record<string, any>
) => {
  try {
    await addDoc(collection(db, collectionName), {
      ...data,
      createdAt: Timestamp.now(),
    });
    return { success: true };
  } catch (error) {
    console.error("Error saving contact message:", error);
    return { success: false, error };
  }
};
