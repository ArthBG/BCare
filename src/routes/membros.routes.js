import { Router } from "express";

import {
  getMembers,
  getMember,
  createMember,
  updateMember,
  deleteMember,
} from "../controllers/members.controller.js";

const membersRouter = Router();

membersRouter.get("/", getMembers);
membersRouter.get("/:id", getMember);
membersRouter.post("/", createMember);
membersRouter.put("/:id", updateMember);
membersRouter.delete("/:id", deleteMember);

export default membersRouter;