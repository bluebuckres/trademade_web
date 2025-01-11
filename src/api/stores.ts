import { db } from '../config/firebase';
import { collection, addDoc, updateDoc, doc, serverTimestamp } from 'firebase/firestore';

interface StoreData {
  name: string;
  userId: string; // mobile number
  createdAt?: any;
  updatedAt?: any;
}

export const createStore = async (storeData: Omit<StoreData, 'createdAt' | 'updatedAt'>) => {
  try {
    const data = {
      ...storeData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };

    const storeRef = await addDoc(collection(db, "stores"), data);
    const id = storeRef.id;

    // Update the document with its ID
    await updateDoc(doc(db, "stores", id), {
      id,
      ...data
    });

    return {
      success: true,
      data: { id, ...data }
    };
  } catch (error) {
    console.error('Error creating store:', error);
    return {
      success: false,
      error: 'Failed to create store'
    };
  }
};
