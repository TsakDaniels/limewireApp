const auth = firebase.auth();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById("whenSignedOut");

const signInBtn = document.getElementById("signInBtn");
const signOutBtn = document.getElementById("signOutBtn");

const userDetails = document.getElementById("userDetails");

const provider = new firebase.auth.GoogleAuthProvider();

signInBtn.onclick = () => auth.signInWithPopup(provider);
signOutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged(user => {
    if (user) {
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
        userDetails.innerHTML = `<h3> Hello ${user.displayName}!</h3> <p>User email: ${user.email}</p> <p>User id: ${user.uid}</p>`;
    } else {
        whenSignedIn.hidden = true;
        whenSignedOut.hidden = false;
        userDetails.innerHTML = '';
    }
});


//database

const db = firebase.firestore();

const createBook = document.getElementById("createBook");
const bookList = document.getElementById("bookList");

let booksRef;
let unsubscribe;


auth.onAuthStateChanged(user => {

    if (user) {
        booksRef = db.collection("books")
        createBook.onclick = () => {
            booksRef.add({
                name : "The Lord of Flies",
                uid: user.uid,
                createdAt: Date.now()
            })
        }


        unsubscribe = booksRef
        .where("uid","==", user.uid)
        .onSnapshot(querySnapshot => {
            const items = querySnapshot.docs.map(doc => {
                return `<li>${ doc.data().name }</li>`
            });
            bookList.innerHTML = items.join(" ")
        });
    }

});


