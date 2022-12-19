import mongoose from "mongoose";
const { Schema, model } = mongoose;
const Store_settingsSchema = new Schema(
  {
    Store_name: {
      type: String,
      unique:true,
      required: true,
      trim: true,
    },
    TypesOfMeter: {
      type: String,
      required: true,
    },
    Selector: {
      type: String,
      required: true,
    },
    threshold_limit: {
      type: String,
      required: true,
    },

    offer: {
      type: String,
      required: true,
    },
    customers: {
      type: Array,
    },
  },
  { timestamps: true }
);
export const Store_settings = model("Store_settings", Store_settingsSchema);
