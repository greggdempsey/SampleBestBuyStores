# SampleBestBuyStores

This a Spring Boot-based application to handle CRUD operations on the Best Buy stores
data using the data from a [BestBuy API JSON file hosted on GitHub](https://github.com/BestBuyAPIs/open-data-set/blob/master/stores.json).

The index.html page loads the list of store information from the JSON file into an 
in-memory H2 database and displays the data for a selected store, with buttons to
save a new store into the database, update the selected store, or delete the
selected store.
 