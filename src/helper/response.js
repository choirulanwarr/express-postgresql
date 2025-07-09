const ResponseAPI = (res, responseMap, ...additionalData) => {
    let data = null;
    let meta = null;

    if (additionalData.length > 0) {
    data = additionalData[0];
    }
    if (additionalData.length > 1) {
    meta = additionalData[1];
    }

    res.status(responseMap.code).json({
        code: responseMap.code,
        status: responseMap.status,
        message: responseMap.message,
        data,
        meta,
    });
}

module.exports = {
    ResponseAPI
};
