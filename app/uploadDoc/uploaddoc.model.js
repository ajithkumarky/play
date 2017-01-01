"use strict";
var UploadDoc = (function () {
    function UploadDoc(id, documentName, clientName, status, uploadValue) {
        this.id = id;
        this.documentName = documentName;
        this.clientName = clientName;
        this.status = status;
        this.uploadValue = uploadValue;
    }
    return UploadDoc;
}());
exports.UploadDoc = UploadDoc;
//# sourceMappingURL=uploaddoc.model.js.map