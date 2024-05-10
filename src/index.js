class SuperAppVerdantBankApi {

    static internal_errorCode = 0;

    static ErrorCode = function() { 
        return SuperAppVerdantBankApi.internal_errorCode;
    };
    
    static internal_errorDesc = "";

    static ErrorDesc = function() { 
        return SuperAppVerdantBankApi.internal_errorDesc;
    };
    
    static async NewPayment(externalReference, amount, success, paymentId) {
        var parmsArray = [];
        parmsArray.push(externalReference);
        parmsArray.push(amount);
        let result = "";
        try {
            result = window.GxSuperAppApi.call("NewPayment",parmsArray).then(
                function (value) {
                    return value;
                },
                function (error) {
                    SuperAppVerdantBankApi.internal_errorCode = 1;
                    SuperAppVerdantBankApi.internal_errorDesc = error;
                    return "";
                }
            );
        } catch (error) {
            SuperAppVerdantBankApi.internal_errorCode = 999;
            SuperAppVerdantBankApi.internal_errorDesc = error.message;
        }
        return result;
    };

    static exit() {
        window.MiniAppAPI.Exit();
    };

    static toStringValue(value) {
		if (typeof value == "object") {
			return JSON.stringify(value);
		} else {
			return ''+value; 
		}
	};
}

module.exports = {
    SuperAppVerdantBankApi,
};