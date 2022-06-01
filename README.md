# Code Review

Most developers spend more time reading code than writing it, and thus, it is so important that we write code that other developers can easily understand.

We will learn more on code quality later, but in this workshop we are going to focus on code reviews, a tool that will allow us to:

- Monitor the code and make sure we merge into production (the working application) working code that has no bugs
- Make sure that the code is up to par and styled according to our team's guidelines
- Propose better solutions and upgrades to new code introduced ot the system
- Learn from other developers!

## 🎯 Lesson Objectives

After this workshop, you will be able to:

- Create a new `git branch` to structure code progress correctly
- Create a proper pull-request (PR)
- Review code efficiently

## Managing The Code Base

Before we start reviewing other developers' code, let's see how to properly manage our own code and how to create a pull-request so others can review our code.

To do that, we need to manage our code properly. Until now, you were probably working on the `main` (`master`) branch. But in a real work environment, it is very dangerous to work on the main branch, because merging new code does not go through proper code review.

In order to allow proper code reviewing, we need to branch out of the main codebase. Branching is basically creating a parallel version of the code, on which we can make changes without changing the main version of the code. Once our changes are ready, we can merge them with the codebase:

![branch git](https://www.nobledesktop.com/image/gitresources/git-branches-merge.png)

We usually going to create a new branch that will have the name of the feature we are working on. To do that, write the following command:

```bash
> git checkout -b <name of the branch>

# for example
> git checkout -b feature/new_user_cards
```

Now, working on the code, you are not changing the main codebase directly! which is amazing! cause we can take risks, test and try different things without worrying that will ruin anything in the production application.

We have 3 main categories of code-changes:

- new feature
- bug fixes
- refactoring (improving the code without changing anything on the users' side)

After finishing working on the new feature, we can commit and push it to remote:

```bash
# Stage all files
> git add .
# Check if you added the right files
> git status
# Commit your changes
> git commit -m"feat[user profile]: user can edit email"
# Push the changes to remote
> git push -u origin <name_of_branch>
# after pushing the code for the first time, just:
> git push
```

## Advanced branching

Usually, companies follow some guidelines on how to name branches and commits.

The most common way is to follow these guidelines:
https://www.conventionalcommits.org/en/v1.0.0/

To put short, add to each branch and commit the following structure:

```bash
# For COMMITS
<type>[scope: optional]: <description>

# for examples:
feature[profile page]: users can edit their emails

fix[login process]: removed required fields

refactor[fetch users]: users data is being filtered on backend

```

For branches, we want to keep the names short by useful:

```
feature/user_profile

fix/add_email_editing

refactor/creating_data_processing_class
```

## Creating Pull Requests

Now, that we have our changes ready and tested in another branch, we can prepare it for merging.

1. Push the branch to remote (if you haven't already).
1. Go to Github, to the relevant repository
1. You should see a notification that a new branch was open and that you can create a new pull request
1. Press on "create a new pull request" button

Before creating a pull request make sure that your code as up to par:

- Did you use linters?
- Did you use a formatter?
- Did you checked that all functionality works?
- Did you create tests and made sure to cover as many edge cases?

## Pull Request Must Haves

Every pull-request should have:

- Title: short but with a general info about the changes (`Feature[user profile]: users can edit emails`)
- Description
- Assignee: usually the developer that opened the request
- Reviewers: usually two or more reviewers are assigned to each request
- Labels: often optional but can be a good tool to separate between fixes, documentation, features and so on...

### Description

The is the most important part. What you need to have in the description changes from company to company but usually consist of the following:

1. **Overview**: What is this feature, which bug was fixed...
2. **Changelog**: list of the changes made.
3. **Resources**: links to requirements, design, planning, tasks, bug or documentation. Everything that will be relevant to understand the changes made.

## Code Review

### What it is NOT:

- **Reviewing is NOT looking for bugs 🐞!** working.
- **Reviewing is NOT tech design or planning!**, these happen before we start coding.

### What it is

Our main goal is to **improve the quality** of the code. So our comments will usually be:

- A question about code functionality or decision
- Suggestions to increase readability or clarity of code
- Something the developer did well
- Stating when you have difficulty understanding a block of code

### Code Review Etiquette

- Be courteous and respectful.
- Be clear and helpful.
- Explain your reasoning.
- Balance giving explicit directions with just pointing out problems and letting the developer decide.

## Now You!

1. Navigate to the pull-request:
2. Go to "files", highlight the relevant lines and add a comment

❗**PLEASE DO NOT SUBMIT THE REVIEW, SO OTHERS CAN REVIEW THE SAME CODEBASE**❗
