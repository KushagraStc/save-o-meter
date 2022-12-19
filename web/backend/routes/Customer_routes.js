import { Router } from "express";
import {
    CreateCustomers,
  DeleteCustomers,
  getCustomers,
  getCustomersById,
  UpdateCustomers,
} from "../controller/Customer_controller.js";

const router = Router();

router.get('/',getCustomers);
router.post('/add',CreateCustomers)
// router.route("/").get(auth,getCustomers).post(CreateCustomers);
router
  .route("/:id")
  .get(getCustomersById)
  .patch(UpdateCustomers)
  .delete(DeleteCustomers);

export default router;
