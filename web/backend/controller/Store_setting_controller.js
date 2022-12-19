import { Store_settings } from "../model/Store_setting_model.js";

export const getStore_settings = async (req, res) => {
  try {
    const data = await Store_settings.find();
    res.status(200).json(data);
  } catch (e) {
    res.status(400).json(e);
  }
};
export const getStore_settingsById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).josn({ message: "id is required" });
    }
    const data = await Store_settings.findById(id);
    res.json({ status: "OK", data });
  } catch (e) {
    res.status(500).json({ message: "Error getting data" });
  }
};

export const CreateStore_settings = async (req, res) => {
  try {
    let addObj = {
      ...req.body,
    };
    const data = await Store_settings.create(addObj);
    res.status(200).json(data);
  } catch (e) {
    res.status(400).json(e);
  }
};
export const UpdateStore_settings = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ message: "id is required" });
    }

    let updateObject = {
      ...req.body,
    };
    const data = await Store_settings.findByIdAndUpdate(id, updateObject, {
      new: true,
    });
    return res.json({ status: "OK", data });
  } catch (e) {
    res.status(400).json(e);
  }
};

export const DeleteStore_settings = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ message: "id is required" });
    }
    await Store_settings.findByIdAndDelete(id);
    res.json({ status: "OK", message: "deleted successfully" });
  } catch (e) {
    res.status(400).json(e);
  }
};
