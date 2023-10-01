
const DB = require('../db/db');
async function getShows(theatreId, currentDate){
    
    let sqlQuery=
        `SELECT 
            showName AS Show_Name, 
            timestamp AS Show_Timing, 
            showLanguage, showDimension, 
            showCertificate 
        FROM 
            theatres_shows 
        WHERE 
            timestamp = '${currentDate}' AND theatreId = '${theatreId}';`;
              
    DB.query(sqlQuery, (err, results) => {
        if (err) {
        console.error('Error executing the query:', err);
        callback(err, null);
        return;
        }
        console.log(results);
    });
}

module.exports = getShows;