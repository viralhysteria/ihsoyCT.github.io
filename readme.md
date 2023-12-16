This is a barebones, Bootstrap-driven frontend for searching archived submission and comment data on Reddit using the [*PullPush API*](https://pullpush.io/). The service provides access to data originally retained by PushShift, including content that may have been quarantined or banned in the past by Reddit admins/moderators.

The web app can be self-hosted by cloning this repository and hosting the directory as is, with **index.html** being the entry point.

Note that the data for populating subreddits in the header nav modal has been omitted from this repository due to the presence of unsavory terminology in the JSON file. This measure ensures the safety of my account and compliance with GitHub's terms of service.

You can easily replicate this data by copying a list of subreddits from the [retained source link](https://www.reddit.com/r/reclassified/comments/fg3608/updated_list_of_all_known_banned_subreddits) and appending it into a file called **subreddits.json** inside of the project root with a simple template as follows:
```
{ 
    "<subreddit_category>": {
        "<subreddit_name>",
        ...
    }
}
```

While this can technically be used to fetch newer submission data from reddit, you may notice issues with sorting filter functionality (e.g. you may receive numerous 0-comment results if filtering for >0) and it should primarily be relied on for viewing older, generally inaccessible content.

If you would like an alternative search for Reddit outright, I can suggest [Samac](https://samac.io/) or [Redditle](https://redditle.com/)