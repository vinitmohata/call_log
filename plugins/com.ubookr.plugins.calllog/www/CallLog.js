function CallLog() {
}

CallLog.prototype.list = function (period, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "CallLog", "list", [period]);
};

CallLog.prototype.contact = function (phoneNumber, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "CallLog", "contact", [phoneNumber]);
};

CallLog.prototype.show = function (phoneNumber, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "CallLog", "show", [phoneNumber]);
};

CallLog.prototype.delete = function (id, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "CallLog", "delete", [id]);
};

CallLog.prototype.insert = function (args, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "CallLog", "insert", args);
};

CallLog.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.calllog = new CallLog();
  return window.plugins.calllog;
};

cordova.addConstructor(CallLog.install);
