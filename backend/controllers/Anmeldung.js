// Import function from Anmeldung Model
import { getAnmeldung, getAnmeldungById, insertAnmeldung, updateAnmeldungById, deleteAnmeldungById } from "../models/AnmeldungModel.js";
 
// Get All Anmeldung
export const showAnmeldung = (req, res) => {
    getAnmeldung((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Get Single Anmeldung 
export const showAnmeldungById = (req, res) => {
    getAnmeldungById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Create New Anmeldung
export const createAnmeldung = (req, res) => {
    const data = req.body;
    insertAnmeldung(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Update Anmeldung
export const updateAnmeldung = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateAnmeldungById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Delete Anmeldung
export const deleteAnmeldung = (req, res) => {
    const id = req.params.id;
    deleteAnmeldungById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
