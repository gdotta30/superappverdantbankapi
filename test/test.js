const { SuperAppVerdantBankApi } = require('../src/index');

global.window = {
    GxSuperAppApi : function (p) {
        if (p[0] == 2023){
            return Promise.resolve([true,"123456789"]);
        } else {
            return Promise.reject("Rejected error.");
        }
    }
};

(async function() {
    
    var externalReference = "2023"
    var amount = 1050

    console.log("Successful payment example.");

    var result = await SuperAppVerdantBankApi.NewPayment(externalReference,amount);
    console.log("result",result);
    console.log("Error Code",SuperAppVerdantBankApi.ErrorCode());
    console.log("Error Desc",SuperAppVerdantBankApi.ErrorDesc());

    console.log("===========================");
    console.log("Rejected payment example.");

    externalReference = "9999"
    var result = await SuperAppVerdantBankApi.NewPayment(externalReference,amount);
    console.log("result",result);
    console.log("Error Code",SuperAppVerdantBankApi.ErrorCode());
    console.log("Error Desc",SuperAppVerdantBankApi.ErrorDesc());

})();
