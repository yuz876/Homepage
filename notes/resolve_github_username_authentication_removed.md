# How to resolve github "password authentication was removed" issue

If you meet the problem with the error message liek this when you ```git push```:

```shell
$ git push
Username for 'https://github.com': xxx
Password for 'https://xxx@github.com': 
remote: Support for password authentication was removed on August 13, 2021. Please use a personal access token instead.
remote: Please see https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/ for more information.
fatal: Authentication failed for 'https://github.com/xxx/xxx.git/'
```

Then you need to use github personal access token instead of password.

# How to generate a GitHub personal access token

To generate a personal access token in GitHub and fix the ‘support for password authentication removed’ error, follow these steps:

1. Log into GitHub with your username and password
2. Navigate to your GitHub account settings
3. Scroll down and click ‘Developer settings’ in the list of links to the left
4. Click the Personal access tokens link
5. Click the ‘Generate new token’ button
6. Add a ‘Note’ to describe the tokens usage
7. Set an expiration date for the GitHub personal access token
8. Select the appropriate authentication scope
9. Click the ‘Generate token’ button
10. Then copy your personal access token before you navigate away from the page, as the token’s alphanumeric value will not be displayed again. The next time you push to GitHub, provide the personal access token instead of the password, and you will have fixed the ‘support for password authentication was removed’ error.

Reference:
[1](https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/Fix-GitHubs-support-for-password-authentication-was-removed-error)