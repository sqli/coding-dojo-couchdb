# coding-dojo-couchdb

## Applications Links
- Demo : [github pages](http://sqli.github.io/coding-dojo-couchdb)
- Database Administration : [Futon](http://coding-dojo-couchdb.iriscouch.com/_utils/)

## Getting started
    git clone https://github.com/sqli/coding-dojo-couchdb.git
    npm install
    bower install
    gulp serve

## Ecosystem
- [AngularJS](https://angularjs.org/)
- [Angular Material](https://material.angularjs.org/)
- [PouchDB](http://pouchdb.com/)
- [CouchDB](http://couchdb.apache.org/)

## TPs
### Objectives
Transform [MessageServiceStub.js](https://github.com/sqli/coding-dojo-couchdb/tree/master/app/src/resource/MessageServiceStub.js)
to [MessageServiceTp.js](https://github.com/sqli/coding-dojo-couchdb/tree/master/app/src/resource/MessageServiceTp.js)
thanks to a JavaScript [CouchDB](http://couchdb.apache.org/) API : [PouchDB](http://pouchdb.com/)

### Step 1 : Import Libraries
- Pouchdb documentation : [setup pouchdb](http://pouchdb.com/guides/setup-pouchdb.html)
- Change the implementation (couchdb -> tp) : [app.js](https://github.com/sqli/coding-dojo-couchdb/tree/master/app/src/app.js)

    'app.resource.message.couchdb' -> 'app.resource.message.tp'

### Step 2 : Database Initialization
- Pouchdb documentation : [create database + auth](http://pouchdb.com/api.html#create_database)
- AngularJS documentation : [deal with promise](https://docs.angularjs.org/api/ng/service/$q)

### Step 3: Database conception
- NOSQL documentation : [Denormalization](https://highlyscalable.wordpress.com/2012/03/01/nosql-data-modeling-techniques/)

### Step 4: Find all messages
- Pouchdb documentation : [batch fetch](http://pouchdb.com/api.html#batch_fetch)

### Step 5: Find all communicators
- CouchDB futon : [map reduce query](http://coding-dojo-couchdb.iriscouch.com/_utils/database.html?message/_temp_view)
- Pouchdb documentation : [query database](http://pouchdb.com/api.html#query_database)

### Step 6: Save message
- Pouchdb documentation : [create document](http://pouchdb.com/api.html#create_document)

### Step 7: Find all by communication
- Pouchdb documentation : [query options](http://pouchdb.com/api.html#query_database)

## Result
[MessageService.js](https://github.com/sqli/coding-dojo-couchdb/tree/master/app/src/resource/MessageService.js)
