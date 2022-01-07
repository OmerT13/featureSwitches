function canAccess(email, feature) {
    return `Yes, ${email} can access ${feature}`;
}

function canUpdate(feature, email, enable) {
    return true;
}

module.exports = { canAccess, canUpdate }