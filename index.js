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

    // Database Collections on MongoDB
    const itemCollection = client.db("lostFinderDB").collection("items");
    const recoveryCollection = client
      .db("lostFinderDB")
      .collection("recoveries");

    // const userCollection = client.db("campaignDB").collection("users");
    // const donationCollection = client.db("campaignDB").collection("donations");

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
      const cursor = itemCollection
        .find()
        .sort({ postedAt: -1 }) // Sort by createdAt in descending order
        .limit(6); // Limit to 6 items
      const latestItems = await cursor.toArray();
      res.send(latestItems);
    });

    // Get All Items Posted by a Specific User
    app.get("/allItems/:email", async (req, res) => {
      const email = req.params.email;
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

    // Recover an Item and Update Status
    // app.post("/recoverItem", async (req, res) => {
    //   const { itemId, recoveredLocation, recoveredDate, recoveredBy } =
    //     req.body;
    //   const query = { _id: new ObjectId(itemId), status: { $ne: "recovered" } };
    //   const update = {
    //     $set: {
    //       status: "recovered",
    //       recoveredLocation,
    //       recoveredDate,
    //       recoveredBy,
    //     },
    //   };

    //   const result = await itemCollection.updateOne(query, update);
    //   if (result.matchedCount === 0) {
    //     return res
    //       .status(400)
    //       .send({
    //         success: false,
    //         message: "Item is already recovered or not found.",
    //       });
    //   }
    //   res.send({ success: true, message: "Item recovered successfully." });
    // });

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

    // app.patch("/updateMissingTimestamps", async (req, res) => {
    //   try {
    //     const result = await itemCollection.updateMany(
    //       { createdAt: { $exists: false } }, // Find documents without a createdAt field
    //       { $set: { createdAt: new Date() } } // Set the createdAt field to the current date
    //     );
    //     res.send({
    //       message: `${result.modifiedCount} documents were updated.`,
    //       success: true,
    //     });
    //   } catch (error) {
    //     console.error("Error updating timestamps:", error);
    //     res.status(500).send({ error: "Failed to update timestamps" });
    //   }
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
