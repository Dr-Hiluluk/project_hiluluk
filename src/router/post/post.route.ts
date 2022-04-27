import express, { Router } from "express";
import { AuthController } from "../auth/auth.ctrl";
import { PostController } from "./post.ctrl";

const postRouter: Router = express.Router();

postRouter.post("/", AuthController.authCheck, PostController.createPost);
postRouter.delete("/", AuthController.authCheck, PostController.deletePost);
postRouter.get("/:postId", PostController.readPost);
postRouter.patch(
  "/:postId",
  AuthController.authCheck,
  PostController.updatePost
);
postRouter.get("/", PostController.readPostList);

export default postRouter;
