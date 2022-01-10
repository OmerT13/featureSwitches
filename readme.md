# About

This is a simple API that informs the consumer whether they are able to update and/or access a certain feature

# Pre Requisites

* [node.js](https://nodejs.org/en/download/)

# Setting things up

After you download this package, use a terminal to navigate to it and then start it up:

```bash
cd <path to the package>/featureSwitches
$env:DEBUG='featureSwitches:*'; npm start
```

# Testing the API

This API has been tested using PostMan collection that can also be found in the same package: `featureSwitches/featureSwitches.postman_collection.json`

To use it, you will need to download and install [postman](https://www.postman.com/downloads/), then import it by uploading the collection:

`File > Import > Upload Files`

There are two requests, one to tell whether the requested user can access the requested feature, and the other mentions if he is allowed to update it.

Since this API does not include a database, it is assumed that the user with the correct update permission will always be able to successfully enable/disable features