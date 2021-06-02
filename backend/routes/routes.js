// import express
import express from "express";

// import function from controller
import { showAnmeldung, showAnmeldungById, createAnmeldung, updateAnmeldung, deleteAnmeldung } from "../controllers/Anmeldung.js";

// init express router
const router = express.Router();

// Get All Anmeldung
router.get('/Anmeldung', showAnmeldung);

// Get Single Anmeldung
router.get('/Anmeldung/:id', showAnmeldungById);

// Create New Anmeldung
router.post('/Anmeldung', createAnmeldung);

// Update Anmeldung
router.put('/Anmeldung/:id', updateAnmeldung);

// Delete Anmeldung
router.delete('/Anmeldung/:id', deleteAnmeldung);

// export default router
export default router;