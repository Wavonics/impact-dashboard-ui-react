import { getFirestore, doc, getDoc } from 'firebase/firestore';

const db = getFirestore();

export async function getUserRole(uid) {
  const userDoc = await getDoc(doc(db, 'users', uid));
  if (userDoc.exists()) {
    return userDoc.data().role;
  } else {
    return null;
  }
}
