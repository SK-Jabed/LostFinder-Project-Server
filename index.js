const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

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

    // const campaignCollection = client.db("campaignDB").collection("campaigns");
    // const userCollection = client.db("campaignDB").collection("users");
    // const donationCollection = client.db("campaignDB").collection("donations");

    // app.get("/campaigns", async (req, res) => {
    //   const cursor = campaignCollection.find();
    //   const result = await cursor.toArray();
    //   res.send(result);
    // });

    // app.get("/runningCampaigns", async (req, res) => {
    //   const currentDate = new Date();
    //   const cursor = campaignCollection
    //     .find({ deadline: { $gte: currentDate.toISOString() } })
    //     .limit(6);
    //   const result = await cursor.toArray();
    //   res.send(result);
    // });

    // app.get("/campaign/:id", async (req, res) => {
    //   const id = req.params.id;
    //   const query = { _id: new ObjectId(id) };
    //   const result = await campaignCollection.findOne(query);
    //   res.send(result);
    // });

    // app.post("/campaigns", async (req, res) => {
    //   const newCampaign = req.body;
    //   const result = await campaignCollection.insertOne(newCampaign);
    //   res.send(result);
    // });

    // // User Related API
    // app.get("/users", async (req, res) => {
    //   const cursor = userCollection.find();
    //   const result = await cursor.toArray();
    //   res.send(result);
    // });

    // app.get("/users/:id", async (req, res) => {
    //   const id = req.params.id;
    //   const query = { _id: new ObjectId(id) };
    //   const result = await campaignCollection.findOne(query);
    //   res.send(result);
    // });

    // app.get("/myCampaigns", async (req, res) => {
    //   const userEmail = req.query.email;
    //   const campaigns = await campaignCollection.find({ userEmail }).toArray();
    //   res.send(campaigns);
    // });

    // app.get("/campaigns/:id", async (req, res) => {
    //   const id = req.params.id;
    //   const query = { _id: new ObjectId(id) };
    //   const result = await campaignCollection.findOne(query);
    //   res.send(result);
    // });

    // app.get("/myDonations", async (req, res) => {
    //   const email = req.query.email;
    //   const donations = await donationCollection
    //     .find({ userEmail: email })
    //     .toArray();
    //   res.send(donations);
    // });

    // app.post("/users", async (req, res) => {
    //   const newUser = req.body;
    //   const result = await userCollection.insertOne(newUser);
    //   res.send(result);
    // });

    // app.post("/donations", async (req, res) => {
    //   const donationData = req.body;
    //   const result = await donationCollection.insertOne(donationData);
    //   res.send(result);
    // });

    // app.delete("/campaigns/:id", async (req, res) => {
    //   const id = req.params.id;
    //   const result = await campaignCollection.deleteOne({
    //     _id: new ObjectId(id),
    //   });
    //   res.send(result);
    // });

    // app.patch("/campaigns/:id", async (req, res) => {
    //   const id = req.params.id;
    //   const updatedCampaign = req.body;
    //   const filter = { _id: new ObjectId(id) };
    //   const updateDoc = { $set: updatedCampaign };

    //   const result = await campaignCollection.updateOne(filter, updateDoc);
    //   res.send(result);
    // });

    // app.patch("/users", async (req, res) => {
    //   const email = req.body.email;
    //   const filter = { email };
    //   const updatedDoc = {
    //     $set: {
    //       lastSignInTime: req.body?.lastSignInTime,
    //     },
    //   };

    //   const result = await userCollection.updateOne(filter, updatedDoc);
    //   res.send(result);
    // });

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