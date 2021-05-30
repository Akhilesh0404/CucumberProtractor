let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;
var {setDefaultTimeout} = require('cucumber');
const fs = require('fs');
const path = require('path');
setDefaultTimeout(60 * 1200);
let dataInputArray=[];
let dataOutputArray=[];
let inputJson;
let outputJson;

     Given('Json validation and comparision  for {string} and {string}', function (file1, file2) {
               
             inputJson= fs.readFileSync(path.join('e2e\\TestFiles\\' + file1 +'.json'),'utf8');
             outputJson= fs.readFileSync(path.join('e2e\\TestFiles\\' + file2 +'.json'),'utf8');
             let parsedInput=JSON.parse(inputJson);
             let parsedOutput=JSON.parse(outputJson);
               
            if(IsValidJSONString(inputJson)===true && IsValidJSONString(outputJson)===true)
            {
               comareJson(parsedInput,parsedOutput);
            }
            
                                                                                                });

         function IsValidJSONString(str) {
            try {
                JSON.parse(str);
            } catch (e) {
                return false;
            }
            return true;
                                         }


        function comareJson(parsedInput, parsedOutput) {


            dataInputArray[dataInputArray.length]=parsedInput[1]["Code"]["Payload"]["firstname"];
            dataInputArray[dataInputArray.length]=parsedInput[1]["Code"]["Payload"]["surname"];
   
            dataOutputArray[dataOutputArray.length]=parsedOutput["Data"][0]["Payload"]["firstname"];
            dataOutputArray[dataOutputArray.length]=parsedOutput["Data"][0]["Payload"]["surname"];


            for (let i = 0; i < dataInputArray.length; i++) {

                if(dataInputArray[i]===dataOutputArray[i]){
               expect(dataInputArray[i]).to.equal(dataOutputArray[i]);
                console.info("Data are equal");

                                                         }
                else
                console.info("Data are not equal");
                                                             }

        

                                                                }