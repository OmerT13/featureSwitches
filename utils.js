  function populateFeatures() {
    const feature1 = {
        featureName: "viewHomes",
        canAccess: ['john@email.com','jack@email.com'],
        canUpdate: ['jack@email.com']
    };
    const feature2 = {
        featureName: "viewCars",
        canAccess: ['john@email.com','jane@email.com'],
        canUpdate: ['jane@email.com']
    };
    const feature3 = {
        featureName: "viewToys",
        canAccess: ['john@email.com','jane@email.com','jack@email.com'],
        canUpdate: ['john@email.com','jack@email.com']
    };
    ret = [feature1,feature2,feature3];
    return ret;
  }



function canAccess(email, feature) {
    var featuresArr = populateFeatures();
    ret = false;
    featuresArr.forEach(key => {
        if (key.featureName==feature && key.canAccess.includes(email)) {
            ret = true;
        } else if(!ret) {
            ret = false;
        }
    });
    return ret;
}

function canUpdate(email, feature, enable) {
    var featuresArr = populateFeatures();
    ret = false;
    featuresArr.forEach(key => {
        if (key.featureName==feature && key.canUpdate.includes(email)) {
            // Insert method/function to update the DB here according to the `enable` parameter
            // If update is successful, return true. otherwise, return false
            ret = true;
        } else if(!ret) {
            ret = false;
        }
    });
    return ret;
}

module.exports = { canAccess, canUpdate }