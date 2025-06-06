require("dotenv").config();
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "https://b10-assignment-11-753d2.web.app",
    "https://b10-assignment-11-753d2.firebaseapp.com",
  ],
  credentials: true,
  optionalSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// Verify Token
const verifyToken = (req, res, next) => {
  const token = req?.cookies?.token;

  if (!token) {
    return res.status(401).send({ message: "Unauthorized Access" });
  }

  // Verify The Token
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized Access" });
    }

    req.user = decoded;
    next();
  });
};

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.baizo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    // Database Collections on MongoDB
    const itemCollection = client.db("lostFinderDB").collection("items");
    const recoveryCollection = client
      .db("lostFinderDB")
      .collection("recoveries");

    // Auth Related API (Generate JWT & Create Token)
    app.post("/jwt", (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "30d",
      });

      res
        .cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        })
        .send({ success: true });
    });

    // Logout || Clear Cookie from Browser
    app.post("/logout", (req, res) => {
      res
        .clearCookie("token", {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        })
        .send({ success: true });
    });

    // Save an Added Item to Database (POST Operation)
    app.post("/addItems", async (req, res) => {
      const itemData = req.body;
      const addedItem = await itemCollection.insertOne(itemData);
      res.send(addedItem);
    });

    // Get ALL Items Data from Database (GET Operation)
    app.get("/allItems", async (req, res) => {
      const cursor = itemCollection.find();
      const allItems = await cursor.toArray();
      res.send(allItems);
    });

    // Get the latest 6 items sorted by most recent date
    app.get("/latestItems", async (req, res) => {
      const cursor = itemCollection.find().sort({ postedAt: -1 }).limit(6);
      const latestItems = await cursor.toArray();
      res.send(latestItems);
    });

    // Get All Items Posted by a Specific User
    app.get("/allItems/:email", verifyToken, async (req, res) => {
      const email = req.params.email;
      const decodedEmail = req.user?.email;

      if (decodedEmail !== email) {
        return res.status(403).send({ message: "Forbidden Access" });
      }

      const query = { "contactInfo.email": email };
      const postedItems = await itemCollection.find(query).toArray();
      res.send(postedItems);
    });

    // Get a Single Item Data by Id from DB
    app.get("/item/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const singleItem = await itemCollection.findOne(query);
      res.send(singleItem);
    });

    // Update a Job Data in DB (PUT Operation)
    app.put("/updateItem/:id", async (req, res) => {
      const itemData = req.body;
      const id = req.params.id;

      const updatedDoc = {
        $set: itemData,
      };

      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      
      const updatedItem = await itemCollection.updateOne(
        query,
        updatedDoc,
        options
      );
      res.send(updatedItem);
    });

    // Delete a Item from DB (DELETE Operation)
    app.delete("/item/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const deletedItem = await itemCollection.deleteOne(query);
      res.send(deletedItem);
    });

    // Add or Insert Data of Recovered Items to Database
    app.post("/recoverItem", async (req, res) => {
      const recoveryData = req.body;

      const result = await recoveryCollection.insertOne(recoveryData);
      res.send(result);
    });

    // Get ALL Items Data from Database (GET Operation)
    app.get("/recoveries", async (req, res) => {
      const cursor = recoveryCollection.find();
      const allRecoveredItems = await cursor.toArray();
      res.send(allRecoveredItems);
    });

    // Get All Items Posted by a Specific User
    app.get("/recoveries/:email", verifyToken, async (req, res) => {
      const email = req.params.email;
      const decodedEmail = req.user?.email;

      if (decodedEmail !== email) {
        return res.status(403).send({ message: "Forbidden Access" });
      }
      const query = { "recoveredBy.email": email };
      const recoveredItems = await recoveryCollection.find(query).toArray();
      res.send(recoveredItems);
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello from LostFinder Server...");
});

app.listen(port, () => {
  console.log(`LostFinder Server is Running on Port: ${port}`);
});