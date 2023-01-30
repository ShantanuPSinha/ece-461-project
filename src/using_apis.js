"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.myFunc = void 0;
var octokit_1 = require("octokit");
var readline = require("readline");
// Set up authentication token
// To do this, I copied and pasted my github token into an environment variable
// in vs code and referenced it in this line
var octokit = new octokit_1.Octokit({
    auth: process.env.GITHUB_TOKEN,
    userAgent: "using apis",
    timeZone: "Eastern",
    baseUrl: 'https://api.github.com'
});
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Is this example useful? [y/n] ', function (answer) {
    switch (answer.toLowerCase()) {
        case 'y':
            console.log('Super!');
            break;
        case 'n':
            console.log('Sorry! :(');
            break;
        default:
            console.log('Invalid answer!');
    }
    rl.close();
});
// Async functions must return a Promise type
// <<<<<<< HEAD
//  export async function myFunc(repos:string = "", owners:string = ""): Promise<number> {
//     // This call will pull 4 issues from the repo ece-461-project using the personal access
//     // token above and store the result/data in the variable result
//     // let result = await octokit.request("GET /repos/GraysonNocera/ece-461-project/issues", {
//     //     owner: owner,
//     //     repo: repos,
//     //     per_page: 4
//     // });
// //paginate allows us to see active issues
//     let issues = await octokit.paginate("GET /repos/{owner}/{repo}/issues", {
//         owner: owners,
//         repo: repos
//     });
//   //  console.log(test.length);
//   //can return a number this way but has to return to async or else it won't work properly 
//     return issues.length; 
//     //console.log(result.headers)
//     // console.log(result.headers)
//     // console.log(result.status)
//     // console.log(result.url)
//   //  console.log("\n\n\n\n\n\n" + result.data["title"])
//     //Iterate through the issues and print their title
//     // for (let i = 0; i < test.length; i++) {
//     //     console.log(test[i])
//     // }
// }
// //myFunc()
function myFunc(repo, owner) {
    return __awaiter(this, void 0, void 0, function () {
        var issuecount, another_result, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    issuecount = 0;
                    return [4 /*yield*/, octokit.request('GET /repos/{owner}/{repo}/issues{?state,head,base,sort,direction,per_page,page}', {
                            owner: owner,
                            repo: repo,
                            state: "closed",
                            since: "2023-01-23"
                        })
                        // Iterate through the issues and print their title
                    ];
                case 1:
                    another_result = _a.sent();
                    // Iterate through the issues and print their title
                    for (i = 0; i < another_result.data.length; i++) {
                        issuecount++; // console.log(result.data[i]["title"])
                    }
                    return [2 /*return*/, issuecount];
            }
        });
    });
}
exports.myFunc = myFunc;
