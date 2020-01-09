import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer rS_BoZK6Z5N10iLMqLh8-xmpEtaPOSnBlkIwbNBjtrW6BbrxDRnU0VFL7tsrehijZZCorFWHfWpzUeNZ6VeSl6L6W2azJLdh2KgaD2trek-AMJ6iFJ5IhrYpDy7_XXYx"
  }
});

// Interview Process consisted of -
// 1. Initial assignment (Mini Web Application) - Asked to create a SPA which allows a user to add youtube videos, verify the links added, autoplay, remove the completed videos, reorder the video list, how to make sure new tab open will keep the react state
// 2. Technical Round 1 - Asked more on the basics of web development and React framework, javascript trick questions
// 3. Technical Round 2 - More questions on Javascript, React
// 4. HR Round

// 1. What happens when you input a link in browser and press enter (How web works)
// 2. Describe the React component lifecycle methods, which component methods are de-scoped from newer React version
// 3. Trick questions in Javascript on the concatenation of strings, arrays
// 4. Higher-order components
// 5. State vs Props in React
// 6. jsonwebtoken - what it is comprised of and how it changes based on data (basics)
// 7. Closure in javascript
