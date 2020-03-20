1. What problem does the context API help solve?

A: It solves the problem of prop drilling. 

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

A: The store is where we store our state. The actions is where we define the actions we wish to take. The reducers is where we check for the action and apply the correct one. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

A: Application state is global state. Component state is local to just that component. If you only need a form, component state is a good one to use. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

A: redux-thunk is middleware designed to process asynchronous operations, like API calls. It changes our action creators by operating asynchronously. 

1. What is your favorite state management system you've learned and this sprint? Please explain why!

A: Favorite would probably be Redux, since it is capable of high-level operations. 