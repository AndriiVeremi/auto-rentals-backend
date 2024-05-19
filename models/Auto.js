import { Schema, model } from "mongoose";
import { handleSaveError } from "./hooks.js";

const autoSchema = new Schema(
  {
    year: {
      type: Number,
      required: [true, "Set name for contact"],
    },
    make: {
      type: String,
      required: [true, "Set name for contact"],
    },
    model: {
      type: String,
      required: [true, "Set name for contact"],
    },
    type: {
      type: String,
      required: [true, "Set name for contact"],
    },
    img: {
      type: String,
    },
    description: {
      type: String,
    },
    fuelConsumption: {
      type: String,
      required: [true, "Set name for contact"],
    },
    engineSize: {
      type: String,
      required: [true, "Set name for contact"],
    },
    accessories: {
      type: [String],
    },
    functionalities: {
      type: [String],
    },
    rentalPrice: {
      type: String,
      required: [true, "Set name for contact"],
    },
    rentalCompany: {
      type: String,
    },
    address: {
      type: String,
    },
    rentalConditions: {
      type: String,
    },
    mileage: {
      type: Number,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

autoSchema.post("save", handleSaveError);

const Auto = model("auto", autoSchema);

export default Auto