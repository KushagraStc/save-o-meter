import { Customers } from "../model/Customer_model.js";

export const getCustomers = async (req, res) => {
  try {
    const data = await Customers.find();
    res.status(200).json(data);
  } catch (e) {
    res.status(400).json(e);
  }
};
export const getCustomersById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).josn({ message: "id is required" });
    }
    const data = await Customers.findById(id);
    res.json({ status: "OK", data });
  } catch (e) {
    res.status(500).json({ message: "Error getting data" });
  }
};

export const CreateCustomers = async (req, res) => {
  try {
    let addObj = {
      ...req.body,
    };
    const data = await Customers.create(addObj);
    res.status(200).json(data);
  } catch (e) {
    res.status(400).json(e);
  }
};
export const UpdateCustomers = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ message: "id is required" });
    }

    let updateObject = {
      ...req.body,
    };
    const data = await Customers.findByIdAndUpdate(id, updateObject, {
      new: true,
    });
    return res.json({ status: "OK", data });
  } catch (e) {
    res.status(400).json(e);
  }
};

export const DeleteCustomers = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ message: "id is required" });
    }
    await Customers.findByIdAndDelete(id);
    res.json({ status: "OK", message: "deleted successfully" });
  } catch (e) {
    res.status(400).json(e);
  }
};
