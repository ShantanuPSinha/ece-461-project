import { Octokit } from "octokit";
import * as readline from 'readline';

// Set up authentication token
// To do this, I copied and pasted my github token into an environment variable
// in vs code and referenced it in this line
const octokit = new Octokit({ 
  auth: process.env.GITHUB_TOKEN,
  userAgent: "using apis",
  timeZone: "Eastern",
  baseUrl: 'https://api.github.com',
});

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.question('Is this example useful? [y/n] ', (answer) => {
switch(answer.toLowerCase()) {
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
export async function myFunc(owner: string, repo: string): Promise<number> {

    // This call will pull 4 issues from the repo ece-461-project using the personal access
    // token above and store the result/data in the variable result
    let issuecount = 0
    // Get pull request #5 from our repo
    let another_result = await octokit.request('GET /repos/{owner}/{repo}/pulls{?state,head,base,sort,direction,per_page,page}',{
        owner: owner,
        repo: repo,
    })
    
    // Iterate through the issues and print their title
    for (let i = 0; i < another_result.data.length; i++) {
        issuecount++ // console.log(result.data[i]["title"])
    }

    return issuecount
}
