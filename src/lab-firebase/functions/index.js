const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { Firestore } = require("firebase-admin/firestore");

admin.initializeApp();
const db = admin.firestore();

exports.githubWebhook = functions.https.onRequest(async (req, res) => {
    const event = req.headers["x-github-event"];
    const data = req.body;

    if (req.method !== "POST") {
        res.status(405).send("Method Not Allowed");
        return;
    }
    if (!data.repository || !data.repository.full_name) {
        console.error("Missing repository info!");
        res.status(400).send("Bad Request");
        return;
    }

    if (event === "push") {
        console.log("Received event:", event);
        console.log(data);

        if (!Array.isArray(data.commits)) {
            console.error("Commits data is missing or not an array");
            res.status(400).send("Bad Request: Commits data is missing or not an array");
            return;
        }

        try {
            await db.collection("pushEvents").add({
                repository: data.repository.name,
                pusher: data.pusher.name,
                timestamp: Firestore.FieldValue.serverTimestamp(),
                // timestamp: data.commits.timestamp,
                // admin.firestore.FieldValue.serverTimestamp(),
                commits: data.commits.map(commit => ({
                    id: commit.id,
                    message: commit.message,
                    url: commit.url
                }))
            });
            console.log("Push event saved to Firestore");
        }
        catch (err) {
            console.error("Error saving to Firestore: ", err);
            res.status(500).send(`Error saving to Firestore: ${err.message}`);
            return;
        }
    }

    res.status(200).send("Webhook received successfully!");
});
