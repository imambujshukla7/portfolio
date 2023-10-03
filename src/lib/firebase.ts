// import { initializeApp } from "firebase/app";
// import { initializeFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDK1Sg5hRhUwFP1F5xtqCzFIInHrLkDX80",
//   authDomain: "hacktiv-blog-3a7e3.firebaseapp.com",
//   projectId: "hacktiv-blog-3a7e3",
//   storageBucket: "hacktiv-blog-3a7e3.appspot.com",
//   messagingSenderId: "322438025756",
//   appId: "1:322438025756:web:9e229f49aa735b56f8c5d9",
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);

// export const firebaseFirestore = initializeFirestore(app, {
//   experimentalForceLongPolling: true,
// });

// import {
//   type DocumentData,
//   type CollectionReference,
//   collection,
// } from "firebase/firestore";

// export interface Blog {
//   title: string;
//   id?: string;
//   slug: string;
//   image: string;
//   content: string;
//   updatedAt: Date;
//   createdAt: Date;
//   //   author: author;
//   published: boolean;
//   author: string;
//   authorName: string;
//   authorEmail: string;
//   authorSlug?: string;
//   authorUid: string;
// }

// const createCollection = <T = DocumentData>(collectionName: string) => {
//   return collection(
//     firebaseFirestore,
//     collectionName
//   ) as CollectionReference<T>;
// };

// export const blogCollection = createCollection<Blog>("Blog");
