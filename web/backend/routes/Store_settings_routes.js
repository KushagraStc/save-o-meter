import { Router } from "express";
import {
    CreateStore_settings,
  DeleteStore_settings,
  getStore_settings,
  getStore_settingsById,
  UpdateStore_settings,
} from "../controller/Store_setting_controller.js";

const router = Router();

router.get('/',getStore_settings);
router.post('/add',CreateStore_settings)
// router.route("/").get(auth,getStore_settings).post(CreateStore_settings);
router
  .route("/:id")
  .get(getStore_settingsById)
  .patch(UpdateStore_settings)
  .delete(DeleteStore_settings);

export default router;
