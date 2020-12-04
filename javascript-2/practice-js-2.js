/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
const gitDefinition = "Git is a version control system that allows you to create repositories in which you can track current/previous files and changes made to throughout the life of the project"
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
gitHubDefinition = "GitHub is a user interface website that utilized a GUI to view and interact with repo's created and maintained with Git"
//////////////////PROBLEMS 3 - 9////////////////////
/*
    For the next several problems you will be creating objects containing information about different git
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property
    will be a string with a description of what that git command does.  The 'code' property should be a
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties
    following the guidelines above to describe the init command.
*/

//CODE HERE
const init = {
    description: 'Creates and initialized new repository',
    code: 'git init'
}
//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties
    following the guidelines above to describe the clone command.
*/

//CODE HERE
const clone = {
    description: 'Creates an exact copy of an existing Git repository',
    code: 'git clone /path-to-Git-repo-to-be-copied'
}
//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties
    following the guidelines above to describe the status command.
*/

//CODE HERE
const status = {
    description: 'Displays a summary of current working Git repo and what changes, if any, have been made to the branch.',
    code: 'git status'
}
//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties
    following the guidelines above to describe the add command.
*/

//CODE HERE
const add = {
    description: 'Takes files that have been edited within working git repo and will "Stage" them to be commited and pushed to repo',
    code: 'git add nameOfFile.js'
}
//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
const commit = {
    description: 'Takes "Staged" items and creates a unique revision/id attached to the current content/changes to files in the repo',
    code: 'git commit -m "Comment of what changes were made in this commit/revision'
}
//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'addRemote' with 'description' and 'code' properties
    following the guidelines above to describe the command to add a remote location to your git repository.
*/

//CODE HERE
const addRemote = {
    description: 'Creates a connection to a specific Git repository that will allow you to push revisions to',
    code: 'git remote add origin'
}
//////////////////PROBLEM 9////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties
    following the guidelines above to describe the push command.
*/

//CODE HERE
const push = {
    description: 'The final step that takes commited revisions and updates the Git repo with those changes',
    code: 'git push'
}