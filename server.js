const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

//Define endpoint to fetch posts
app.get("/posts", async (req, res) => {
  try {
    const responce = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=25"
    );
    const data = await responce.json();
    res.json(data);
  } catch (error) {
    console.error("Error Fetching Post", error);
    res.status(500).json({ error: "Error Fetching Posts" });
  }
});

// define end point to fetch post by id as query parameter
app.get("/posts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const responce = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    const data = await responce.json();
    res.json(data);
  } catch (error) {
    console.error("Error Fetching Post By ID : ", error);
    res.status(500).json({ error: "Error Fetching POST by id" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running onnnn ${PORT}`);
});
