### Emulate

- "emulate" means to imitate or replicate the behavior, characteristics, or functionality of something, often with the goal of reproducing its features or effects.
- Emulating Firebase services or emulators in the context of Firebase development, it means creating local, simulated versions of Firebase services that imitate the behavior of their cloud counterparts.
- These emulated services run on your development machine and provide a way to test your application without interacting with the actual cloud services.
- For example, when you use a Firebase Realtime Database emulator, you are setting up a local database that behaves like the Firebase Realtime Database in the cloud. Your application can interact with this emulated database during development, allowing you to test database operations without making changes to the real cloud database.

### Initiate the firebase.

```tsx
PS F:\firebase-example\backend> firebase init ######## #### ########  ######## ########     ###     ######  ########
 ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
 ######    ##  ########  ######   ########  #########  ######  ######
 ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
 ##       #### ##     ## ######## ########  ##     ##  ######  ########

```

```tsx
You're about to initialize a Firebase project in this directory:
F:\firebase-example\backend>
? Are you ready to proceed? Yes
? Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices. Firestore: Configure security rules and

indexes files for Firestore, Functions: Configure a Cloud Functions directory and its files, Storage: Configure a security rules file for Cloud Storage, Emulators: Set up local
emulators for Firebase products

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add,
but for now we'll just set up a default project.

? Please select an option: Use an existing project
? Select a default Firebase project for this directory: fir-example-dfa02 (firebase-example)
i  Using project fir-example-dfa02 (firebase-example)

=== Firestore Setup

Firestore Security Rules allow you to define how and when to allow
requests. You can keep these rules in your project directory
and publish them with firebase deploy.

? What file should be used for Firestore Rules? firestore.rules

Firestore indexes allow you to perform complex queries while
maintaining performance that scales with the size of the result
set. You can keep index definitions in your project directory
and publish them with firebase deploy.

? What file should be used for Firestore indexes? firestore.indexes.json

=== Functions Setup
Let's create a new codebase for your functions.
A directory corresponding to the codebase will be created in your project
with sample code pre-configured.

See https://firebase.google.com/docs/functions/organize-functions for
more information on organizing your functions using codebases.

Functions can be deployed with firebase deploy.

? What language would you like to use to write Cloud Functions? TypeScript
? Do you want to use ESLint to catch probable bugs and enforce style? Yes

- Wrote functions/package.json
- Wrote functions/.eslintrc.js
- Wrote functions/tsconfig.json
- Wrote functions/tsconfig.dev.json
- Wrote functions/src/index.ts
- Wrote functions/.gitignore
? Do you want to install dependencies with npm now? No

=== Storage Setup

Firebase Storage Security Rules allow you to define how and when to allow
uploads and downloads. You can keep these rules in your project directory
and publish them with firebase deploy.

? What file should be used for Storage Rules? storage.rules

- Wrote storage.rules

=== Emulators Setup
? Which Firebase emulators do you want to set up? Press Space to select emulators, then Enter to confirm your choices. Authentication Emulator, Functions Emulator, Firestore
Emulator, Storage Emulator

? Which port do you want to use for the auth emulator? 9099

? Which port do you want to use for the functions emulator? 5001

? Which port do you want to use for the firestore emulator? 8080
? Which port do you want to use for the storage emulator? 9199
? Would you like to enable the Emulator UI? Yes

? Which port do you want to use for the Emulator UI (leave empty to use any available port)?
? Would you like to download the emulators now? Yes
i  firestore: downloading cloud-firestore-emulator-v1.18.2.jar...
Progress: =========================================================================================================================================================> (100% of 64MB)
Progress: =========================================================================================================================================================> (100% of 53MB)
i  ui: downloading ui-v1.11.7.zip...

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...
i  Writing gitignore file to .gitignore...

- Firebase initialization complete!
```

index. ts

```tsx
import {*https* as httpV2} from "firebase-functions/v2";
export const helloFireWorld = httpV2.onRequest((request, response)=>{
    response.json({data:'Hello Fire World'
}
)})
```

change package.json 

```tsx
"serve": "npm run build && firebase emulators:start --only functions" ;
```

to

```tsx
"serve": "npm run build && firebase emulators:start --only functions,firestore,auth,storage",
```

```tsx
PS F:\firebase-example\backend\functions> npm run serve

> serve
npm run build && firebase emulators:start --only functions,firestore,auth,storage
> 

> build
tsc
> 

i  emulators: Starting emulators: auth, functions, firestore, storage
!  functions: The following emulators are not running, calls to these services from the Functions emulator will affect production: database, hosting, pubsub
i  firestore: Firestore Emulator logging to firestore-debug.log

- firestore: Firestore Emulator UI websocket is running on 9150.
i ui: Emulator UI logging to ui-debug.log
i functions: Watching "F:\firebase-example\backend\functions" for Cloud Functions...
- functions: Using node@18 from host.
Serving at port 8849
- functions: Loaded functions definitions from source: helloFireWorld.
- functions[us-central1-helloFireWorld]: http function initialized (http://127.0.0.1:5001/fir-example-dfa02/us-central1/helloFireWorld).

┌─────────────────────────────────────────────────────────────┐
│ ✔  All emulators ready! It is now safe to connect your app. │
│ i  View Emulator UI at http://127.0.0.1:4000/               │
└─────────────────────────────────────────────────────────────┘

┌────────────────┬────────────────┬─────────────────────────────────┐
│ Emulator       │ Host:Port      │ View in Emulator UI             │
├────────────────┼────────────────┼─────────────────────────────────┤
│ Authentication │ 127.0.0.1:9099 │ http://127.0.0.1:4000/auth      │
├────────────────┼────────────────┼─────────────────────────────────┤
│ Functions      │ 127.0.0.1:5001 │ http://127.0.0.1:4000/functions │
├────────────────┼────────────────┼─────────────────────────────────┤
│ Firestore      │ 127.0.0.1:8080 │ http://127.0.0.1:4000/firestore │
├────────────────┼────────────────┼─────────────────────────────────┤
│ Storage        │ 127.0.0.1:9199 │ http://127.0.0.1:4000/storage   │
└────────────────┴────────────────┴─────────────────────────────────┘
Emulator Hub running at 127.0.0.1:4400
Other reserved ports: 4500, 9150

Issues? Report them at https://github.com/firebase/firebase-tools/issues and attach the *-debug.log files.

i  functions: Beginning execution of "us-central1-helloFireWorld"
i  functions: Finished "us-central1-helloFireWorld" in 4.5404ms
```

try [port](http://127.0.0.1:5001/fir-example-dfa02/us-central1/helloFireWorld) 

```tsx
http function initialized (http://127.0.0.1:5001/fir-example-dfa02/us-central1/helloFireWorld).
```

output: 

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/18a9c05a-9a67-4cff-9c45-870a42b2d88a/fb7811a0-39ce-4f86-9ce0-20775bd2b830/Untitled.png)

### INITATE THE FIREBASE AND WORKING WITH FIREBASE IN FRONTEND FRAMEWORKS

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/18a9c05a-9a67-4cff-9c45-870a42b2d88a/7f547a6a-8fec-42ba-bef0-b92e1da6b1e9/Untitled.png)

## Authentication workings

```tsx
const handleLogin =()=>{   
		createUserWithEmailAndPassword(*auth*,email,password)       
					.then(async (userCredentials)=>{           
							const user = userCredentials.user 
			          *console*.log(user)       
					})       
					.catch((error)=>{           
							throw new Error(`User sign up failed with error ${error}`)      
 })};
```

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/18a9c05a-9a67-4cff-9c45-870a42b2d88a/01e8875f-7111-41fd-896d-f487ee3a9ae1/Untitled.png)

```
AuthScreen.tsx:14:     
POST <https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB9B1puKwpY2o7AJKXVSKb0a1G2qbwyqsc> 400 (Bad Request)

AuthScreen.tsx:20  Uncaught (in promise) Error: User sign up failed with error FirebaseError: Firebase: Error (**auth/operation-not-allowed**)
```

why?

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/18a9c05a-9a67-4cff-9c45-870a42b2d88a/e76a7f40-7e86-4c4d-936b-18961b9d5612/Untitled.png)

Now it is successful

```tsx
*_UserImpl {providerId: 'firebase', proactiveRefresh: ProactiveRefresh, reloadUserInfo: {…}, reloadListener: null, uid: 'ZjHCG78f0sbTe2dQsIkzjfXUFmR2', …}
1. **accessToken**: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjViNjAyZTBjYTFmNDdhOGViZmQxMTYwNGQ5Y2JmMDZmNGQ0NWY4MmIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZmlyLWV4YW1wbGUtZGZhMDIiLCJhdWQiOiJmaXItZXhhbXBsZS1kZmEwMiIsImF1dGhfdGltZSI6MTcwNTkzNzc2MiwidXNlcl9pZCI6IlpqSENHNzhmMHNiVGUyZFFzSWt6amZYVUZtUjIiLCJzdWIiOiJaakhDRzc4ZjBzYlRlMmRRc0lrempmWFVGbVIyIiwiaWF0IjoxNzA1OTM3NzYyLCJleHAiOjE3MDU5NDEzNjIsImVtYWlsIjoic2gxQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJzaDFAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.Jsu0kFm7snC7bO_TQJkcL0bvDg65QrViMKuIfw7Yi8xfYg9aU5LPP5MdG5ty0wWngzb1iqfhZmQ85yF9zk6FttVpREzeukhhr13HxIp9kUQrBteAMgB-TwdHMqgozF0JyD9Dgg7HNojtF-PBjF4P6o5yerrdqzIP544aIdWYA_qQSdkCik0jE8BNEL4zH_gnVJMc52NC0mM2LxxzHwaaG2-5K-wzwV4EvvzQmbP9tpqblqllgTYdFzF6mYV8WOJPrtdyaJxQpRsWJg1gYWu1Uk-BGjMaALQwOQ0WK3xyeGgS50iXRCkM4OcroCTXCEDnXkNrHM39CjQxj7CyGKEO-Q"
2. **auth**: AuthImpl {app: FirebaseAppImpl, heartbeatServiceProvider: Provider, appCheckServiceProvider: Provider, config: {…}, currentUser: _UserImpl, …}
3. **displayName**: null
4. **email**: "sh1@gmail.com"
5. **emailVerified**: false
6. **isAnonymous**: false
7. **metadata**: UserMetadata {createdAt: '1705937762450', lastLoginAt: '1705937762450', lastSignInTime: 'Mon, 22 Jan 2024 15:36:02 GMT', creationTime: 'Mon, 22 Jan 2024 15:36:02 GMT'}
8. **phoneNumber**: null
9. **photoURL**: null
10. **proactiveRefresh**: ProactiveRefresh {user: _UserImpl, isRunning: false, timerId: null, errorBackoff: 30000}
11. **providerData**: [{…}]
12. **providerId**: "firebase"
13. **reloadListener**: null
14. **reloadUserInfo**: {localId: 'ZjHCG78f0sbTe2dQsIkzjfXUFmR2', email: 'sh1@gmail.com', passwordHash: 'UkVEQUNURUQ=', emailVerified: false, passwordUpdatedAt: 1705937762450, …}
15. **stsTokenManager**: _StsTokenManager {refreshToken: 'AMf-vBy9KSf-1mMRyBW3P5gUawoOND4pr1uLqa5bAZ5f91V-Jl…zCbfl_9vf0U09jSKAncp2DHUewYgFcrHKHosU-UtPtNgKqZQg', accessToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjViNjAyZTBjYTFmNDdhOG…3xyeGgS50iXRCkM4OcroCTXCEDnXkNrHM39CjQxj7CyGKEO-Q', expirationTime: 1705941361619}
16. **tenantId**: null
17. **uid**: "ZjHCG78f0sbTe2dQsIkzjfXUFmR2"
18. refreshToken: (...)
19. [[Prototype]]: Object*
```

## Firestore workings

```tsx
const handleSubmit = async ()=>{    
		try{        
				await setDoc(doc(*db*,"cities","LA"),{           
						 name:"Los Angeles",            
						 state:"CA",            
						 country:"USA" })    
		}catch(error){        
						throw new Error(`Error adding document ${error}`)    
}};
```

Error ! why?

```tsx
FirestoreWriteScreen.tsx:15  Uncaught (in promise) 
Error: Error adding document FirebaseError: [code=permission-denied]: Missing or insufficient permissions.
at handleSubmit (FirestoreWriteScreen.tsx:15:19)
```

Because there is an issue in rule set. As we wrote the rules to be false 

```tsx
rules_version = '2';
service cloud.firestore {
	match /databases/{database}/documents {
		match /{document=**} {
			allow read, write: if false;
		}
	}
}
```

So, convert it to true.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/18a9c05a-9a67-4cff-9c45-870a42b2d88a/7bcc897e-c03d-4df7-9d44-16ad981dfa5c/Untitled.png)

## File upload.

### use of storage

The **`Blob`** object represents a blob, which is a file-like object of immutable, raw data; they can be read as text or binary data, or converted into a `[ReadableStream](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream)` so its methods can be used for processing the data.

```tsx
const handleUpload = () =>{    
	try{       
		if(image){           
			const storage = getStorage();
			// Create a reference to the 'images' folder in storage           
			const storageRef = ref(storage, 'images'); 
			// Upload the image to the storage reference          
			uploadBytes(storageRef, image).then((snapshot) => {               
				*console*.log('Uploaded a blob or file!',snapshot.ref);           
			});       
		}     
	}catch(error:any){        
		throw new Error(`Upload a bolb file ${error}`)    
	}   
}
```

- **`getStorage()`** function, which presumably returns a storage instance. The result is stored in the **`storage`** constant.
- **`uploadBytes(storageRef, image).then((snapshot) => { ... });`**: This line uploads the **`image`** to the **`storageRef`** reference. The **`uploadBytes`** function is asynchronous and returns a **`Promise`**. When the upload is complete, the code inside the **`.then`** block is executed. It logs a message to the console, indicating that a blob or file has been uploaded.

output: =

```tsx
ImageUploadScreen.tsx:13
    POST <https://firebasestorage.googleapis.com/v0/b/fir-example-dfa02.appspot.com/o?name=images%2FFirebase.jpg> 403 **(Forbidden)**
```

```
Uncaught (in promise) FirebaseError: Firebase Storage: User does not have permission to access 'images/Firebase.jpg'. (storage/unauthorized)
```

resolved by 

```tsx
rules_version = '2';
// Craft rules based on data in your Firestore database
// allow write: if firestore.get(
//    /databases/(default)/documents/users/$(request.auth.uid)).data.isAdmin;
service firebase.storage {
	match /b/{bucket}/o {
		match /{allPaths=**} {
			allow read, write: if true;
		}
	}
}
```

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/18a9c05a-9a67-4cff-9c45-870a42b2d88a/96b9c576-ffe0-41fb-b6ec-d394fd9389fd/Untitled.png)

```tsx
Uploaded a blob or file!
*_Reference {_service: FirebaseStorageImpl, _location: _Location}*
**_location**: _Location
1. **bucket**: "fir-example-dfa02.appspot.com"
2. **path_**: "images/Screenshot 2024-01-08 211138.png"
3. isRoot: (...)
4. path: (...)
5. [[Prototype]]: Object
    1. **bucketOnlyServerUrl**: *ƒ bucketOnlyServerUrl()*
        1. **length**: 0
        2. **name**: "bucketOnlyServerUrl"
        3. arguments: (...)
        4. caller: (...)
        5. [[FunctionLocation]]: location.ts:51
        6. [[Prototype]]: *ƒ ()*
        7. [[Scopes]]: Scopes[3]
    2. **constructor**: *class _Location*
    3. **fullServerUrl**: *ƒ fullServerUrl()*
    4. **isRoot**: (...)
    5. **path**: (...)
    6. get isRoot: *ƒ isRoot()*
    7. get path: *ƒ path()*
    8. [[Prototype]]: Object
6. **_service**: FirebaseStorageImpl
    1. **app**: FirebaseAppImpl {_isDeleted: false, _options: {…}, _config: {…}, _name: '[DEFAULT]', _automaticDataCollectionEnabled: false, …}
    2. **_appCheckProvider**: Provider {name: 'app-check-internal', container: ComponentContainer, component: null, instances: Map(0), instancesDeferred: Map(0), …}
    3. **_appId**: null
    4. **_authProvider**: Provider {name: 'auth-internal', container: ComponentContainer, component: Component, instances: Map(1), instancesDeferred: Map(0), …}
    5. **_bucket**: _Location {bucket: 'fir-example-dfa02.appspot.com', path_: ''}
    6. **_deleted**: false
    7. **_firebaseVersion**: "10.7.2"
    8. **_host**: "firebasestorage.googleapis.com"
    9. **_maxOperationRetryTime**: 120000
    10. **_maxUploadRetryTime**: 600000
    11. **_protocol**: "https"
    12. **_requests**: Set(0) {size: 0}
    13. **_url**: undefined
    14. host: (...)
    15. maxOperationRetryTime: (...)
    16. maxUploadRetryTime: (...)
    17. [[Prototype]]: Object
7. bucket: (...)
8. fullPath: (...)
9. name: (...)
10. parent: (...)
11. root: (...)
12. storage: (...)
13. [[Prototype]]: Object
```

### User credentials when login

```tsx
createUserWithEmailAndPassword(*auth*,email,password)    
	.then(async (userCredentials)=>{        
		const user =  userCredentials.user;        
		*console*.log(user);        
		await setDoc(doc(collection(*db*, "users"), userCredentials.user.uid), {            
			firstname: 'Amandi',            
			lastname: 'Nimasha'        
		});        
		setIsAuthenticated(true)    
		})    
		.catch((error)=>{        
			throw new Error(`User sign up failed with error ${error}`)    
		});
```

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/18a9c05a-9a67-4cff-9c45-870a42b2d88a/ed7882f3-2f8c-4d39-bd8d-0dcadf49251d/Untitled.png)

For sensitive data we use ondocumnettrig**g**ers 

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/18a9c05a-9a67-4cff-9c45-870a42b2d88a/78445f60-9ab6-427d-be44-b7dcfab143f2/Untitled.png)

### Using Zustand

```tsx
export interface TestStoreState {    
		helloFireWorld: (payload: void) => Promise<string>;
}
```

`payload ` is a term used to describe the data or information that is carried by a function or message. It represents the input or content that is being transported, processed, or operated upon.

The use of **`void`** as the type indicates that the method doesn't expect any meaningful data to be passed as an argument. In this specific case, the **`payload`** parameter is essentially a placeholder and doesn't carry any actual data.

TestStore.ts ⇒

```tsx
import {create} from "zustand";
import {httpsCallableFromURL} from 'firebase/functions'
import {FirebaseConfig, functions} from "../config/firebase-config";
export interface TestStoreState {
    helloFireWorld: (payload: void) => Promise<string>;
}

export const useTestStore =  create<TestStoreState>(()=>({
    helloFireWorld:async ():Promise<string> =>{
        try{
            const callable = httpsCallableFromURL<void,string>(
                functions,
                FirebaseConfig.getAllLocalFunctions.helloFireWorld
            )
            const response = await callable();
            console.log('🥶🥶🥶',response);
            return response.data;
        }catch(error){
            throw new Error(`hello fire world failed with error ${error} `)
        }
    }

}))
```

**`httpsCallableFromURL`** to create an HTTP Callable function for the Firebase function named "helloFireWorld."

HomeScreen.tsx ⇒

```tsx
import './Homescreen.css'
import {useNavigate} from "react-router-dom";
import {useTestStore} from "../stores/TestStore";

const HomeScreen =()=>{
    const navigate = useNavigate()
    const testStore = useTestStore()

    async function triggerCloudFunction() {
        try{
            const response = await testStore.helloFireWorld();
            console.log(response)
        }catch(error){
            throw new Error(`Trigger cloud function failed with error ${error} `)
        }

    }
    return (

        <div className="home-container">
            <button className="login-button" onClick={()=> navigate('/AuthScreen')}>AuthScreen</button>
            <button className="login-button" onClick={()=> navigate('/FireStoreWriteScreen')}>FireStoreWriteScreen</button>
            <button className="login-button" onClick={()=> navigate('/ImageUploadScreen')}>ImageUploadScreen</button>
            <button className="login-button" onClick={triggerCloudFunction}>{"Trigger Cloud Functions"}</button>
        </div>
    )

}
export default HomeScreen;
```
output ⇒
```
🥶🥶🥶 {data: 'Hello Fire World'}data: "Hello Fire World"[[Prototype]]: Object
```

