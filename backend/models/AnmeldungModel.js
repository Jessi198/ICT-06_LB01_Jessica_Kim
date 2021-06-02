// import connection
import db from "../config/database.js";
 
// Get All Anmeldung
export const getAnmeldung = (result) => {
    db.query("SELECT * FROM anmeldung", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Get Single Anmeldung
export const getAnmeldungById = (id, result) => {
    db.query("SELECT * FROM anmeldung WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Anmeldung to Database
export const insertAnmeldung = (data, result) => {
    db.query("INSERT INTO anmeldung SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Anmeldung to Database
export const updateAnmeldungById = (data, id, result) => {
    db.query("UPDATE anmeldung SET name = ?, lastname = ?, birthday = ?, email = ?, newsletter = ?, date  = ? WHERE id = ?", [data.name, data.lastname,data.birthday, data.email,data.newsletter, data.date, data.id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Anmeldung to Database
export const deleteAnmeldungById = (id, result) => {
    db.query("DELETE FROM anmeldung WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
