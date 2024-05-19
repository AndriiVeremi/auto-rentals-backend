import { Schema, model } from "mongoose";
import { handleSaveError, setUpdateSettings } from "./hooks.js";
import { emailRegexp } from "../constants/user-constants.js";

const usersSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Password is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      math: emailRegexp,
    },
    subscription: {
      type: String,
      enum: ["admin", "owner", "user"],
      default: "user",
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

usersSchema.post("save", handleSaveError);

usersSchema.pre("findOneAndUpdate", setUpdateSettings);

usersSchema.post("findOneAndUpdate", handleSaveError);

const User = model("user", usersSchema);

export default User;
