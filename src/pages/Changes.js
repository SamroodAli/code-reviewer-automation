const review = `
Hi {name}, 

Good job so far!
There are some issues that you still need to work on to go to the next project but you are almost there!
<FEEL FREE TO CHANGE THIS MESSAGE TO YOUR PERSONAL WORDS>

## Required Changes ♻️
{requires}
_Check the comments under the review._

## Optional suggestions
_Every comment with the [OPTIONAL] prefix is not crucial enough to stop the approval of this PR. However, I strongly recommend you to take them into account as they can make your code better._

You can also consider:
{options}
Cheers and Happy coding!👏👏👏

Feel free to leave any questions or comments in the PR thread if something is not 100% clear.

**_Please, do not open a new Pull Request for re-reviews. You should use the same Pull Request submitted for the first review, either valid or invalid unless it is requested otherwise._**

------
_As described in the [Code reviews limits policy](https://microverse.zendesk.com/hc/en-us/articles/1500004088561) you have only 3 code reviews per project. If you think that the code review was not fair, you can request a second opinion using [this form](https://airtable.com/shrQAqnBwek5a0O0s)._
`;

export default review;
