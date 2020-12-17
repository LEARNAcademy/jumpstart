# Deployment

Deployment is the process of making your project accessible to others on the Internet. We'll be using GitHub to host your website.

### What is GitHub? 
It’s a web app that most importantly allows users to share code. It uses Git which is a version control tool (something that allows you to track the history of changes made to your code). GitHub Pages is a feature on GitHub that allows you to make your website available to the Internet. Also know that you can only host one website per user account. 

For more information: https://pages.github.com/

## Step 1: GitHub Desktop Setup
[Download GitHub Desktop](https://desktop.github.com/)

This is a tool that will allow you to see changes made to your projects.

[Install GitHub Desktop](https://docs.github.com/en/free-pro-team@latest/desktop/installing-and-configuring-github-desktop/installing-github-desktop)

[Log in using your GitHub account](https://docs.github.com/en/free-pro-team@latest/desktop/installing-and-configuring-github-desktop/authenticating-to-github)

You should see a "Let's Get Started!" heading in GitHub Desktop.

## Step 2: Create a repository. 
A repository is a specific location where you can store your project. Think of it as a folder or directory. In the version control context, this directory and changes to any files in it are being tracked.

![New repository](/images/img00_new_repo.png)

![Create a repository](/images/img01_create_repo.png)

The repository name for a GitHub Page is very specific. When text has a specific style/format that it must follow, it is called “naming convention”. The naming convention for a GitHub Page repository is `{yourUsername}.github.io`. You’ll be able to use this repository name as a url to visit your page once your project is hosted.

Make sure that the Public option is selected. 
Checking Private will not allow others to view your page.

Skip creating the README for now. 
Also skip other options.

Click `“Create repository”`.

## Step 3: Clone your repository.
Be sure to have your GitHub Desktop open.

![Setup in Desktop](/images/img02_setup.png)
Your repository page should now display options for connecting your project to the repository created in GitHub.

Click `"Set up in Desktop"`.

![Clone Repository](/images/img03_clone_repo.png)

This should open up a modal in GitHub Desktop with the repository URL already populated.
A Local Path is likely to already be populated as well. If not, click the `"Choose..."` button to indicate a place to create a new directory.
For simplicity sake, we'll indicate a path to your Desktop.
Add `/{yourUsername}.github.io` at the end of the path.
Doing this will create a directory on your Desktop with the correct name. 

Click `"Clone"`.

Verify the folder with the name `{yourUsername}.github.io` is created on your Desktop.

## Step 3: Committing & Publishing

### Move files in your working directory to the repository.
Have both your working directory open and your `{yourUsername}.github.io` open. The repository you just created should be empty.

Use copy/paste or drag and drop method.
Select all `cmd + a`/ `ctrl + a` files and directories in your project directory. 
Copy `cmd + c`/ `ctrl + c`.
Paste `cmd + v`/ `ctrl + v`.

### Use GitHub Desktop to Commit and Publish

Verify the files are recognized in GitHub Desktop.
![Verify changes in GitHub Desktop](/images/img04_verify_changes.png)
Verify that `Current Repository: {yourUsername}.github.io`.
Verify that `Current Branch: master` (this is like the master copy).
Verify that there are files indicated in the `Changes` tab.

Provide a summary of your changes.
For example, "added files for website".

“Committing" your changes is saving your changes. 

Click `"Commit to master"` button.

“Publishing/Pushing" is uploading your changed files. 

Click `"Publish branch”`. This uploads your changes to GitHub.

Verify your History tab to see the last commit is present.
![Verify history in GitHub Desktop](/images/img05_verify_history.png)

Refresh your repo on github.com and you should see the files.

Visit `{yourUsername}.github.io` through your browser to see the hosted page!

## Step 4: Making updates
Make changes to your files.

When you’re ready to commit, go to GitHub Desktop.

**Commit** changes to master.

**Publish** branch to GitHub.

Refresh `{yourUsername}.github.io` to see changes reflected.

