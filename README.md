# BookMyShow
All the details are inside PDF file. 

##  Schema 
![bookMyShow schema diagram](https://github.com/stormspirit03/Airtribe-submissions/assets/53505985/d8934736-5e53-4e03-b8a6-6f1d24ab19c2)
## Tables
1. users
2. cities
3. shows
4. theatres
5. theatres_shows
   
## Considerations
1. Flexibility and scalability are given priority over some redundant columns; hence, the use of foreign key constraints is avoided. Still, foreign key references are used to maintain data integrity.

2. The 'Theatre-wise shows and timings on a given date' query has been given higher priority, as this will be the most used operation. Therefore, the database schema is designed around this. For this purpose, there is a 'theatres_shows_timings' table specifically designed to serve this query, and it is consistent with the 'theatres' and 'shows' tables using references.

3. Because of the separate table, there is redundant data, but it avoids joins for the most used queries, reducing read time and making the queries less complex and more straightforward.

4. Indexing is performed on 'theatreId' and 'showId' columns of the 'theatres_shows' table separately to support faster queries.
