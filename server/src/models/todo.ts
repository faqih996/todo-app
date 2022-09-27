import { model, Schema } from "mongoose";
import Todo from "../types/todo";

const todoSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    STATUS: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
