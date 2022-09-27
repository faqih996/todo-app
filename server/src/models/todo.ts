import { model, Schema } from "mongoose";
import { Todo } from "../types/todo";

// this from import Schema up Above, watch the Spelling
const todoSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// export from import
export default model<Todo>("Todo", todoSchema);
