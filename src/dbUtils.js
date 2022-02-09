// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, setDoc, query, where } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDv453HhGq8X4WOA4mIkaXQM0f7wKW79tA",
    authDomain: "trendsdome-e42b9.firebaseapp.com",
    projectId: "trendsdome-e42b9",
    storageBucket: "trendsdome-e42b9.appspot.com",
    messagingSenderId: "333214513428",
    appId: "1:333214513428:web:54f574081710539be4aa01",
    measurementId: "G-VKZF7MQNMQ"
};

let app = null;
let db = null;
app = initializeApp(firebaseConfig);
db = getFirestore(app);
// Initialize Firebase
export const initDB = () => {

}

export const getTrendByName = async (trendName, country) => {
    const citiesCol = collection(db, 'trends');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    console.log(cityList)
    return cityList;
}

export const saveTrendByName = async (trendName, country, trendData) => {
    if (!trendName || !country) {
        console.log('no valid params for saveTrendByName')
        return;
    }
    let result = 'success';

    try {
        const base64TrendName = Buffer.from(`${country.toLowerCase()},${trendName.toLowerCase()}`).toString('base64')
        const trendsCol = collection(db, 'trends');
        const trendRef = doc(trendsCol, base64TrendName);
        await setDoc(trendRef, trendData, { merge: true });
    } catch (er) {
        result = 'fail';
        throw new Error('saving to db failed')
    }
    

    return result;
}

export const getGrowingTrends = async (country, period) => {
    const trendsCol = collection(db, 'trends');
    const q = query(trendsCol, where("values.month.growthPercent", ">", 100));
    const querySnapshot = await getDocs(q);
    const mainTrends = [];
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        mainTrends.push(doc.data())
      });
    return mainTrends;
}
