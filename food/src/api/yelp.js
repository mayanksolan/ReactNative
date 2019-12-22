import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer rS_BoZK6Z5N10iLMqLh8-xmpEtaPOSnBlkIwbNBjtrW6BbrxDRnU0VFL7tsrehijZZCorFWHfWpzUeNZ6VeSl6L6W2azJLdh2KgaD2trek-AMJ6iFJ5IhrYpDy7_XXYx"
  }
});
