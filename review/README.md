# Review

Nice work on using `.gitignore` to avoid adding the JSMP and Node module folders. But do include the `package.json` and `config.js` files! Without them another developer will have a hell of a time figuring out what to install. But if they are there, then the dev only needs to run:

```sh
npm install
jspm install
```

To get the dependencies downloaded and installed and he or she is good to go. Fortunately, I know what needs installing, so I was able to re-create the two files.

The JS work is outstanding. It's clear that you've got Ramda all sussed out. That's great. Please jump in and help your teammates to understand when they're struggling. Helping teammates is a big part of being a senior developer. Why not get a head start on it now?

On accessibility, I think you've got a good grasp both of how hard accessibility can be (it wouldn't have been if we'd designed the web with accessibility in mind from the getgo, but tacking it on as an afterthought has been quite painful . . . lesson learned?) and of how difficult it is to design a good tool for testing accessibility. A lot of it really requires direct human participation. Maybe when we have AI? Don't hold your breath.

What's up with searchenginewatch.com and accesslint? Can't believe that site is still around! I haven't really used it in almost 20 years!

Good point on the occasional tension between accessibility and, believe it or not, marketing. In the old days, a common spamming trick was to hide long lists of "keywords" by making them white on white or some such thing. Of course, they weren't hidden to screen readers! I can't imagine how much annoyance that caused to users with visual disabilities.

Nice work on the form, but placeholders are visual, so you probably want "Given name" rather than "nameGiven". Did you notice how we're using "given" and "family" rather than "first" and "last"? This throws a lot of Westerners at first who are used to the latter, but in China and some Asian countries, the surname comes *first*. So this is about sensitivity to the international nature of the Internet (and the diversity of cultures even within the West).

For form names, stick to camelCase as opposed to UpperCamelCase, also called BumpyCase or PascalCase, though lots of developers are confused about this. True camelCase begins with a lowercase letter. In JavaScript PascalCase is used for constants and anything that takes the `new` operator. For variables and functions, use camelCase. If you were using Ruby on the back end, you might use snake_case.

(Sometimes in JS we use SCREAMING_SNAKE_CASE for constants.)

Watch the empty placeholders. Actually, in the usability section, you should have learned that placeholders, while beloved of designers, have some significant usability issues. Use them sparingly.

You didn't use the HTML validator (*always* validate your code), so you missed quite a few errors. For example, you need a `<head>` element and it must have a `<title>` element that can't be empty. You misspelled "placeholder" several times (copy and paste bites us often). Also, `<input>` is always an empty element. You cannot add content to it. The "I accept" goes in the `<label>`. This is a bit confusing at times, I admit. I always have to mess with it to get it right.

Also, you cannot use a / in a class name. Use a - instead.

HTML is a bit trickier than you might expect, no?

Outstanding feedback on IA and IxD. *Don't Make Me Think* is an excellent book. I learned a lot from it. On bad affordances, a very common one in the physical world (look and you'll see it everywhere) is a handle on a door that requires you to *push* to open it. The proper affordance for push is a flat plate. A handle says "pull". If you sit by such a door and watch, you'll see people pulling first all day long despite a sign saying "push". The affordance comes *first*. Users assume that they understand it, and only look for the sign when it fails to work. Often you'll see people switch doors thinking it's locked and still not realize that they need to push.

A good question is why, more than a decade after this was made clear, architects continue to put handles on doors that are push only. Do they just not give a damn? Does "look trump usability? I really don't get it.

Everything else is excellent. On usability, isn't it amazing how awful so many forms are? It's so easy to make your form break the CC number into four quads. So why do so few sites get this right? And here's something else that drives me almost to apoplexy: why oh why do they ask you whether it is a visa, mastercard, etc.? That information is *encoded into the number*!

And on address forms, why does it ask for the postal code last? Why bother asking for city/province/state at all *if you have the postal code*? After all, a postal code in almost all cases gives you the city and province. In fact, you can probably send mail to a street and a postal code and it will get to the recipient. I actually tried this in the U.S. and it worked fine.  So why do we make users add all that extra information?

Also, when you get to learn about *normalization* of data, you'll find that having two sources of data doubles the possibility of getting one wrong and ending up with confusing input. What if my card is a Visa but I click AmEx instead? You can still get the double check by having the interface show a Visa, AmEx, etc. logo *after the number is entered* (it's only the first four digits that count).

Same thing with the city vs. postal code. When the user enters the postal code, the city should be displayed as a double check. If there are multiple possible cites (the code overlaps two), then only those two cities should be displayed in a dropdown or equivalent. It's clearly superior. But ever see a form that works this way?

Great work again this week! Keep it up. Also, if you have anything you'd like to see in upcoming lessons, drop me a line on Slack. I'm happy to consider suggestions if they fit.
