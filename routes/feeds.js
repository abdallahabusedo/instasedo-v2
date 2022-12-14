const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("./../middleware/requireLogin");
const Post = mongoose.model("Post");
const multer = require("multer");

router.get("/allposts", (req, res) => {
  Post.find()
    .populate("PostedBy", "_id name")
    .then((posts) => {
      res.json({ posts });
      console.log(posts);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/createpost", requireLogin, (req, res) => {
  console.log("Post req", req.body);
  const { title, body, pic } = req.body;
  if (!title || !body) {
    return res.status(400).json({ error: "Please add all fields" });
  }
  req.user.password = undefined;
  const post = new Post({
    title,
    body,
    pic,
    PostedBy: req.user,
  });
  post
    .save()
    .then((result) => {
      res.json({ post: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/myposts", requireLogin, (req, res) => {
  Post.find({ PostedBy: req.user._id })
    .populate("PostedBy", "_id name")
    .then((myPosts) => {
      res.json({ myPosts });
    })
    .catch((err) => {
      console.log(err);
    });
});
// TODO add accepts some file line png jpg
const multrtStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, file.fieldname + Date.now() + "." + ext);
  },
});

const upload = multer({
  storage: multrtStorage,
});

router.post(
  "/uploadImage",
  requireLogin,
  upload.single("image"),
  (req, res) => {
    // TODO check if the upload is already uploaded or give null image
    res.send(req.file.path);
  }
);

module.exports = router;
