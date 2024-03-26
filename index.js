console.log("before");
//Callback
// getUser(1,(user)=>{
//     console.log("user", user);
//     getRepos(user.githubname,(repos)=>{
//         console.log("repos",repos);
//         getCommit(repos,()=>{

//         })
//     })
// })

//Promise way
// const p = getUser(1);
// //the user in then is to ref getUser
// p.then(user=> getRepos(user.githubname))
// .then(repo=> getCommit(repo[1]))
// .then(commit=> console.log('commits', commit))
// .catch(err=> console.log('err', err.message))


//Async and await way
async function displayCommits(){
    try {
        const user = await getUser(1);
        const repo = await getRepos(user.githubname);
        const commit = await getCommit(repo[0]);
        console.log(commit);
        
    } catch (error) {
        console.log('error', error.message);
        
    }
}
displayCommits();
const p = Promise.resolve({id:1});
p.then(result => console.log(result)).catch(error => console.log(error));
console.log("after");

//callback 
//promises
//async await






function getUser(id){
    return new Promise((resolve,reject)=>{
        //kick off async work
        setTimeout(() => {
        console.log("reading user");
        resolve({id: id, githubname:"kel"})
    }, 2000);
    });
}

function getRepos(username){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        console.log("Getting user's repositories");
     //   resolve(['repo1','repo2']);
     reject(new Error("we getting better"));
    },2000)
    })
    
}

function getCommit(repo){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        console.log("calling github api");
        resolve(['commit', 'kkk']);
    },2000)
    })
    
}

