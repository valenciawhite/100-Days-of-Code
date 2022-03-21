# ✨ Day 2/100 - React.js Event Handlers (onChange + onFocus + onBlur) ✨

- [Tweet for Day 2](https://twitter.com/artificiallyval/status/1505689993666256900)

## ☆.｡.:* Unexpeded Wins! .｡.:*☆

Today for my challenge, event handlers were the star of the show and they did not disappoint. I'm writing this post over two days as I have to go to work soon and I hate cramming last-minute thoughts into a post.

On Day 2 Part I, I began laying the groundwork for event handlers in my "Keypad" file. This concept of the event handler in React was fairly easy for me to grasp and being that I completed this deliverable first, I felt confident enough in my abilities going into the second challenge. Setting up onFocus and onBlur event handlers.

If only I knew the emotional rollercoaster I was about to enter onto taking these two on. Nowhere in any of the readings my boot camp provided went over the two, so at the beginning of me solving this, I just took a guess as to what I was supposed to do. I thought "hey, these are event handlers, so they probably work about the same as onChange..." and with that hunch, I troughed through the rocky terrain that is coding and debugging.

After tweaking my code format and syntax, the same results would render- I could get the first event to fire once the button was clicked, but for the life of me, trying to get the onBlur event to fire afterward was proving to be a nightmare as I was growing tired from me choosing to get up earlier than planned to get some coursework out of the way and the lingering fact, that work was approaching and it was going to be a long night.

Article after, article, video after video, there I was still stuck on what felt like lilypad 2. No matter what logic from the informative resources I tried to jump on and implement, none of it seemed to work and I was growing frustrated knowing I was steps away from shore. It seemed like it should have been so simple and I KNEW I was so close, so just what was I missing?

That would be an answer I wouldn't know until now, my Day 2 Part II. After finagling with my code and setting it up in a way that I thought made sense, I left my VS Code open on another window. Prepared to ask my classmates come Monday for some of their insight into my code. I took another look at my code as I began setting my screen up to record, and to my surprise, I saw the console message for my onBlur event log. Part of me thought it was some sick illusion my brain was playing on me, rubbed my eyes, not that. "Too good to be true..." I thought, so I overlooked my code again and assumed I forgot to erase brackets after calling back the function, meaning it would run on load regardless if I did anything or not. In my initial testing phase, I knew that wasn't proper, but just seeing the message in the console helped give me a little morale boost into seeing what was possible. It wasn't that. Nope, no mind games and no false function invoking happening here, my code was working like it was supposed to all along.

What was missing this whole time was my role to play in my code firing off correctly. The whole time I was clicking the "Eyes on me" button my first condition was going off, a "Good!" in the console, I didn't think to click off the element to make the second condition of onBlur go off, and once I did, the glorious console log of "Hey!, Eyes on me!" graced my screen. I had done it after all! I was ready to express my displeasure in not being able to figure these events out, but now I have a success story to share!

Moral of the story: Click off the element for your onBlur to fire 😅

https://user-images.githubusercontent.com/21699614/159123915-398b49b6-fe94-49ad-a815-a2e403ac04b5.mov

## ☆.｡.:* DEV.to Community Surprises .｡.:*☆

Over the past few days, I've been beefing up my tech community profiles and reaching out in the community. My goal has been to genuinely express myself whenever I am moved by certain content and cultivate active communication whenever I can. In such a short time frame, already I'm experiencing great feedback from my efforts. I even got a mention in a blog post by a senior software engineer after he felt inspired to write after reading my comment to ANOTHER community member.

From DEV to Twitter, the tech communities I've come across have been nothing short of welcoming and knowledgeable to those who show genuine interest. This is the impact I aspire to provide for others, making tech inclusive and digestible for all.

## Resources

- [Offical React Synthetic Events Documentation](https://reactjs.org/docs/events.html)
