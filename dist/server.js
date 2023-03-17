"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/server.ts
var server_exports = {};
__export(server_exports, {
  auth: () => auth
});
module.exports = __toCommonJS(server_exports);
var import_cors = __toESM(require("cors"));
var import_express2 = __toESM(require("express"));
var import_auth3 = require("firebase/auth");

// src/routes/AuthRouter.routes.ts
var import_express = __toESM(require("express"));

// src/controllers/AuthController.ts
var import_auth2 = require("firebase/auth");

// src/repository/AuthRepository.ts
var import_auth = require("firebase/auth");
var import_firestore2 = require("firebase/firestore");

// src/database/firestoredb.ts
var import_app = require("firebase/app");
var import_firestore = require("firebase/firestore");
var dotenv = __toESM(require("dotenv"));
dotenv.config();
var firebaseConfig = {
  apiKey: `${process.env.FIREBASE_API_KEY}`,
  authDomain: `${process.env.FIREBASE_AUTH_DOMAIN}`,
  projectId: `${process.env.PROJECT_ID}`,
  storageBucket: `${process.env.STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.MESSAGING_SENDER_ID}`,
  appId: `${process.env.APP_ID}`,
  measurementId: `${process.env.MEASUREMENT_ID}`
};
var appFirebase = (0, import_app.initializeApp)(firebaseConfig);
var firestoreDB = (0, import_firestore.getFirestore)(appFirebase);

// src/repository/AuthRepository.ts
var AuthRepository = class {
  async createFirebaseUser({ auth: auth2, email, password }) {
    (0, import_auth.createUserWithEmailAndPassword)(auth2, email, password).then((userCredential) => {
      const user = userCredential.user.refreshToken;
      return user;
    }).then(async () => {
      await (0, import_firestore2.addDoc)((0, import_firestore2.collection)(firestoreDB, "users"), {
        email,
        password
      });
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      return error;
    });
  }
};

// src/models/AuthModel.ts
var AuthModel = class {
  constructor() {
    this.repository = new AuthRepository();
  }
  async createFirebaseUser(auth2, email, password) {
    const newUser = {
      auth: auth2,
      email,
      password
    };
    return this.repository.createFirebaseUser(newUser);
  }
};

// src/controllers/AuthController.ts
var AuthController = class {
  constructor() {
    this.auth = (0, import_auth2.getAuth)();
    this.authModel = new AuthModel();
  }
  async createFirebaseUser(req, res) {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(500).send({ message: "E-mail or Password not found " });
    await this.authModel.createFirebaseUser(this.auth, email, password).then((teste) => {
      return res.status(201).send(teste);
    }).catch((error) => {
      return res.status(500).send(error);
    });
  }
};

// src/routes/AuthRouter.routes.ts
var app = (0, import_express.default)();
var authController = new AuthController();
app.post("/register", (req, res) => authController.createFirebaseUser(req, res));
var AuthRouter = app;

// src/server.ts
var app2 = (0, import_express2.default)();
app2.use(import_express2.default.json());
app2.use((0, import_cors.default)());
app2.listen("3030", () => {
  console.log("conectado");
});
app2.use("/auth", AuthRouter);
var auth = (0, import_auth3.getAuth)();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  auth
});
