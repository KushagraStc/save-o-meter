import mongoose from "mongoose";
const { Schema, model, SchemaType } = mongoose;
const CustomerSchema = new Schema(
  {
    // Store: {
    //   type: SchemaType.ObjectId,
    //   trim:true
    // },
    Name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    level:{
      type:String,
      required:true
    },
    points:{
      type:String,
      required:true
    },

  },
  { timestamps: true }
);
export const Customers = model("Customers", CustomerSchema);
