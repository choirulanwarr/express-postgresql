const ResponseMap = (code, status, message) => {
    return { code, status, message };
}

// CODE
const HTTP_STATUS_OK = 200;
const HTTP_STATUS_CREATE = 201;
const HTTP_STATUS_BAD_REQUEST = 400;
const HTTP_STATUS_SOMETHING_WRONG = 422;

// STATUS
const RES_SUCCESS = "SUCCESS";
const RES_FAILED = "FAILED";

// RESPONSE
// 200
const RES_200_GET       = ResponseMap(HTTP_STATUS_OK, RES_SUCCESS, "Success get data");
const RES_201_SAVE      = ResponseMap(HTTP_STATUS_CREATE, RES_SUCCESS, "Success save data");
const RES_200_UPDATE    = ResponseMap(HTTP_STATUS_OK, RES_SUCCESS, "Success updated data");
const RES_200_DELETED   = ResponseMap(HTTP_STATUS_OK, RES_SUCCESS, "Success deleted data");

// 400
const RES_400_INVALID_PAYLOAD = ResponseMap(HTTP_STATUS_BAD_REQUEST, RES_FAILED, "Invalid payload");
const RES_422_SOMETHING_WRONG = ResponseMap(HTTP_STATUS_SOMETHING_WRONG, RES_FAILED, "Something Wrong");


module.exports = {
    RES_200_GET,
    RES_201_SAVE,
    RES_200_UPDATE,
    RES_200_DELETED,
    RES_400_INVALID_PAYLOAD,
    RES_422_SOMETHING_WRONG
};