import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
    restaurant_info:{
      name: 'Chef Masters',
      owner: 'Bordon Damsay',
      profile_pic: 'https://tinyurl.com/y5aljvpz',
      description: 'Es un chef, dueño de restaurantes y presentador de televisión británico. En toda su carrera gastronómica ha sido condecorado con 17 estrellas Michelin, de las que hoy mantiene. Además de sus facetas culinarias, Ramsay es conocido por presentar programas de televisión y espacios de telerrealidad sobre cocina, tanto en Reino Unido como en Estados Unidos.'
    }
    recipes: [
      {
        image: "http://forkgasm.com/images/carbonara.jpg",
        name: "Turnip Noodle Carbonara",
        id: "turnip-carbonara",
        description: "A healthier version of the classic dish that tastes just as good!",
        tag: [
          "Bacon"
        ],
        ingredient: [
          {
            amount: "16",
            unit: "oz",
            name: "turnip noodles"
          },
          {
            amount: "3",
            name: "rashers bacon"
          },
          {
            amount: "5",
            name: "eggs"
          },
          {
            amount: "0.5",
            unit: "cup",
            name: "parmesan",
            preparation: "grated"
          },
          {
            amount: "4",
            name: "cloves garlic",
            preparation: "chopped, optional"
          },
          {
            amount: "0.25",
            unit: "cup",
            name: "heavy cream"
          },
          {
            name: "Salt"
          },
          {
            name: "Pepper",
            preparation: "freshly ground"
          }
        ],
        ingredientGroup: [],
        step: [
          {
            description: "Cut the bacon into lardons and sauté until it's lightly cooked."
          },
          {
            description: "While the bacon is cooking, separate the yolks from 4 of the eggs. Whisk 4 yolks, 1 egg, the grated parmesan, the cream, and salt and pepper."
          },
          {
            description: "If using garlic, add it once the bacon is starting to get cooked and saute for a few more minutes until fragrant"
          },
          {
            description: "Stir in turnip noodles until they are cooked through to desired doneness"
          },
          {
            description: "Turn the heat down to very low and stir in the egg mixture. Stir well until it cooks."
          },
          {
            description: "Top with a little more ground pepper and serve!"
          }
        ],
        notes: "Turnip noodles are far closer to spaghetti than zucchini noodles that lose their shape. You can get them pre-spiralized from Whole Foods, or make them yourself with a spiralizer.",
        forked: "[Zucchini Noodle Carbonara Recipe](https://skinnyms.com/zucchini-noodle-carbonara-recipe/)"
      },
      {
        image: "http://forkgasm.com/images/40813912_2213541505597183_7740637805202109577_n.jpg",
        name: "Spiced lamb chops with mint-mango sauce",
        id: "spiced-lamb-chops-with-mint-mango-sauce",
        description: "Delicious, refreshing, and super quick to make!",
        tag: [
          "Lamb"
        ],
        ingredient: [
          {
            amount: "8",
            name: "lamb chops"
          },
          {
            amount: "0.25",
            unit: "cup",
            name: "olive oil"
          },
          {
            amount: "4",
            name: "garlic cloves"
          }
        ],
        ingredientGroup: [
          {
            name: "Mint-Mango Sauce",
            ingredient: [
              {
                amount: "1",
                name: "medium ripe mango"
              },
              {
                amount: "1",
                unit: "cup",
                name: "fresh mint"
              },
              {
                amount: "2",
                name: "green onions"
              },
              {
                amount: "1",
                unit: "tbsp",
                name: "fresh lime juice"
              },
              {
                amount: "1",
                name: "serrano chile",
                preparation: "halved and seeded"
              },
              {
                amount: "0.5",
                name: "ripe avocado"
              }
            ]
          },
          {
            name: "Spice mix",
            ingredient: [
              {
                amount: "1",
                unit: "tbsp",
                name: "cumin",
                preparation: "ground"
              },
              {
                amount: "2",
                unit: "tsp",
                name: "ground coriander"
              },
              {
                amount: "2",
                unit: "tsp",
                name: "ground cinammon"
              },
              {
                amount: "0.5",
                unit: "tsp",
                name: "turmeric"
              },
              {
                amount: "0.25",
                unit: "tsp",
                name: "cayenne pepper"
              },
              {
                amount: "0.25",
                unit: "tsp",
                name: "ground cardamom"
              },
              {
                amount: "0.125",
                unit: "tsp",
                name: "cloves",
                preparation: "ground"
              },
              {
                amount: "0.5",
                unit: "tbsp",
                name: "coarse kosher salt"
              }
            ]
          }
        ],
        step: [
          {
            description: "In a blender or mini food processor, blend all the sauce ingredients, and chill in the fridge."
          },
          {
            description: "Blend the olive oil and garlic and coat the lamb chops."
          },
          {
            description: "Make the spice mix, and coat the lamb chops well on both sides."
          },
          {
            description: "Grill the lamb chops on a very hot cast iron grill pan (or a BBQ if you have one!) for 2-3 minutes on each side for medium rare."
          },
          {
            description: "Done! Serve with the sauce on the side."
          }
        ],
        notes: "- If you’re out of green onions, you can substitute them in the sauce with 1 shallot\n- A good way to use the spice mix is to put it in an empty spice jar and use that to sprinkle it evenly on the lamb chops.\n- This spice mix is delicious and great on so many things! We've tried it on beef, duck, even carbonara! Might be a good idea to make more than is needed for this dish and keep it around.\n- If you have sauce leftovers, it keeps well in the fridge for days in an airtight container. It may darken a bit due to the avocado but it still tastes good.",
        forked: "[Spiced Lamb Chops with Mint-Mango Sauce](https://www.epicurious.com/recipes/food/views/spiced-lamb-chops-with-mint-mango-sauce-109587)"
      },
      {
        name: "Papoutsakia",
        id: "papoutsakia",
        description: "A traditional Greek dish that tastes very similar to moussaka, but is much quicker to cook. Fun fact: Papoutsakia in Greek means \"little shoes\" and a portion usually has two. However, when cooking with large American eggplants, you'll likely find that one per portion is enough.",
        tag: [
          "Greek"
        ],
        ingredient: [
          {
            amount: "3",
            name: "eggplants"
          },
          {
            unit: "extra virgin olive oil"
          },
          {
            name: "thyme"
          },
          {
            name: "salt, black pepper"
          }
        ],
        ingredientGroup: [
          {
            name: "Mince",
            ingredient: [
              {
                amount: "2",
                unit: "lbs",
                name: "beef or lamb",
                preparation: "minced"
              },
              {
                amount: "2",
                name: "yellow onions",
                preparation: "chopped"
              },
              {
                amount: "6",
                name: "garlic cloves",
                preparation: "chopped"
              },
              {
                amount: "500",
                unit: "g",
                name: "passata (Italian-style sieved tomato purée)"
              },
              {
                name: "cinammon",
                preparation: "ground"
              },
              {
                name: "cloves",
                preparation: "ground"
              },
              {
                name: "allspice"
              },
              {
                amount: "4",
                unit: "tsp",
                name: "Better than Bouillon or other beef bouillon base"
              },
              {
                amount: "0.5",
                unit: "cup",
                name: "Metaxa or other cognac"
              },
              {
                amount: "2",
                unit: "tbsp",
                name: "Sukrin Gold or brown sugar"
              },
              {
                amount: "4",
                name: "bay leaves"
              },
              {
                name: "butter"
              },
              {
                name: "black pepper"
              },
              {
                name: "Worcestershire sauce"
              }
            ]
          },
          {
            name: "Béchamel(ish)",
            ingredient: [
              {
                amount: "1",
                unit: "cup",
                name: "butter"
              },
              {
                amount: "0.5",
                unit: "cup",
                name: "coconut flour"
              },
              {
                name: "heavy cream"
              },
              {
                amount: "4",
                name: "egg yolks",
                preparation: "beaten"
              },
              {
                amount: "250",
                unit: "g",
                name: "hard cheese (we used Gruyère)",
                preparation: "grated"
              },
              {
                name: "nutmeg",
                preparation: "freshly ground"
              }
            ]
          }
        ],
        step: [
          {
            description: "Cut the eggplants in half and scoop out the center. Leave about 1-1.5cm of flesh. Carve the flesh crosswise."
          },
          {
            description: "Season the eggplants well with olive oil, salt, pepper, thyme. Use your hands to make sure it goes everywhere. Be fast, because they absorb the oil very quickly!"
          },
          {
            description: "Put eggplants on a large baking tray, cut side down and bake at 200C (392F) for 30-40 minutes."
          },
          {
            description: "**Mince**: \n1. Fry the onions in the butter on high heat.\n2. Once the onions have started to caramelize, add the garlic and fry for a few more minutes.\n3. Add the cinnamon, cloves, allspice, black pepper and give it a stir.\n4. Add the mince and bay leaves and reduce heat to medium.\n5. Once the meat has started to brown, pour in the Metaxa.\n6. Add the tomato pureé, Sukrin Gold, bouillon base, and Worcestershire sauce and stir well.\n5. Reduce heat and simmer for about half an hour or until the tomato tastes cooked and any liquids have been reduced."
          },
          {
            description: "**Béchamel:**\n1. Melt the butter in a small pot over low heat\n2. Whisk in the coconut flour, stirring continuously to make a roux\n3. When the roux ingredients are nicely combined, whisk in the cream, adding a little each time to avoid lumps\n4. Cook it over low heat, stirring continuously\n5. When it has thickened, add nutmeg, salt, pepper to taste\n6. Take it off the heat and stir in the yolks and grated cheese"
          },
          {
            description: "Scoop the minced meat into the eggplants, and top it with the béchamel. Bake for 10 minutes at 200C (392F), checking frequently because ovens vary. You may want to turn on the grill (US: broiler) for the last 5 minutes to give the cheese a nice golden brown."
          }
        ],
        forked: "[?ap??ts???a µe µpesaµ??](https://akispetretzikis.com/el/categories/kreas/melitzanes-papoytsakia-me-mpesamel),\nMaria’s moussaka recipe,\n[Low carb roux,  béchamel and souffle](http://www.fatisourfriend.com/roux-bechamel-and-souffle.html)",
        image: "http://forkgasm.com/images/6410429C-D04A-4624-9026-715C0A64A005.jpeg"
      },
      {
        image: "http://forkgasm.com/images/gambas.png",
        name: "Gambas al Ajillo",
        id: "gambas-al-ajillo",
        description: "Quick and garlicky!",
        tag: [
          "Seafood",
          "Spanish"
        ],
        ingredient: [
          {
            amount: "2",
            unit: "lbs",
            name: "shelled and deveined shrimp"
          },
          {
            amount: "1",
            unit: "head",
            name: "garlic",
            preparation: "thinly sliced"
          },
          {
            amount: "1.25",
            unit: "cup",
            name: "extra-virgin olive oil"
          },
          {
            amount: "1",
            name: "dried hot red chile",
            preparation: "seeded and crumbled"
          },
          {
            amount: "2",
            unit: "tbsp",
            name: "dry sherry"
          },
          {
            amount: "1",
            unit: "tsp",
            name: "lemon zest"
          },
          {
            name: "smoked paprika"
          },
          {
            name: "salt"
          }
        ],
        ingredientGroup: [],
        step: [
          {
            description: "In a large bowl, toss the shrimp with 1 teaspoon of kosher salt and let stand for 10 minutes. "
          },
          {
            description: "Meanwhile, in a 9- to 10-inch enameled cast-iron skillet, combine the garlic and olive oil and cook over moderately low heat, stirring occasionally, until the garlic is very fragrant and just starts to brown, 8 to ?10 minutes. "
          },
          {
            description: "Add the chile and smoked paprika and cook, stirring, until fragrant, 15 to 30 seconds. ?"
          },
          {
            description: "Add the shrimp to the skillet and cook over medium heat, stirring and turning the shrimp occasionally, until barely pink, about 5 minutes."
          },
          {
            description: "Stir in the parsley, sherry, lemon zest and a generous pinch of salt. Remove from the heat and let stand until the shrimp are cooked through, 3 to 5 minutes. Serve in the skillet, passing crusty bread at the table. ?"
          }
        ],
        forked: "[Gambas al Ajillo?](http://www.foodandwine.com/recipes/gambas-al-ajillo),\n[Sizzling Shrimp with Garlic (Gambas al Pil Pil)](https://www.williams-sonoma.com/recipe/sizzling-shrimp-with-garlic-gambas-al-pil-pil.html)"
      },
      {
        name: "Shakshuka",
        id: "shakshuka",
        description: "Breakfast of champions (one of them)",
        tag: [
          "Arabic",
          "Israeli",
          "Breakfast"
        ],
        ingredient: [
          {
            amount: "3",
            unit: "tbsp",
            name: "Olive oil"
          },
          {
            amount: "2",
            unit: "medium",
            name: "Yellow onions",
            preparation: "chopped"
          },
          {
            amount: "1.5",
            unit: "lb",
            name: "Miced lamb or beef"
          },
          {
            amount: "1",
            unit: "large",
            name: "Organic green bell pepper",
            preparation: "chopped"
          },
          {
            amount: "1",
            name: "Jalapeño chilli",
            preparation: "deseeded & chopped"
          },
          {
            amount: "1",
            unit: "head",
            name: "Garlic",
            preparation: "minced"
          },
          {
            amount: "1",
            unit: "7 oz jar",
            name: "Tomato concentrate"
          },
          {
            amount: "1",
            unit: "28 oz tin",
            name: "Chopped peeled tomatoes"
          },
          {
            amount: "1",
            unit: "cup",
            name: "Red wine"
          },
          {
            amount: "4",
            name: "Bay leaves"
          },
          {
            amount: "2",
            unit: "tbsp",
            name: "Erythritol"
          },
          {
            amount: "1",
            unit: "tbsp",
            name: "Beef stock concentrate"
          },
          {
            amount: "1",
            unit: "tbsp",
            name: "Smoked Paprika"
          },
          {
            amount: "1",
            unit: "tbsp",
            name: "Cumin seed",
            preparation: "ground"
          },
          {
            amount: "1.5",
            unit: "tsp",
            name: "Black pepper",
            preparation: "ground"
          },
          {
            amount: "1",
            unit: "tsp",
            name: "Caraway seed",
            preparation: "ground"
          },
          {
            amount: "0.5",
            unit: "bunch",
            name: "Swiss chard or kale",
            preparation: "destemmed"
          },
          {
            amount: "8",
            name: "Freerange eggs"
          }
        ],
        step: [
          {
            description: "Heat oil in a large, deep, preferably ceramic, frying pan on medium heat"
          },
          {
            description: "Cook onions until translucent, 5-10 min"
          },
          {
            description: "Add minced meat, stir until lightly browned"
          },
          {
            description: "Reduce heat a little, add jalapeño and bell pepper, cook until slightly soft. 3-4 min, do not overcook"
          },
          {
            description: "Add garlic and tomato concentrate, stir for 2 min until tomato tastes cooked not raw"
          },
          {
            description: "Add the wine. Tip: pour the wine into the tomato paste jar and shake it to get the last of the paste out."
          },
          {
            description: "Add canned tomatoes, cumin, caraway seeds, bay leaves, paprika, erythritol, concentrated stock, and pepper. Yes, that is a lot of cumin; it will be fine. Bring to low boil, reduce heat, simmer for 20 min"
          },
          {
            description: "Place de-stemmed Swiss chard leaves on top of cooked tomato mixture. Make 8 small depressions with a spoon"
          },
          {
            description: "Crack one egg into each depression. Cover (a transparent lid is ideal)"
          },
          {
            description: "Cook until egg white is _just_ set. Serve immediately, in the pan."
          }
        ],
        ingredientGroup: [],
        notes: "- The tomato sauce keeps for a couple of days in the fridge. If eating over two days, crack only 4 eggs. Next time, reheat sauce then make 4 more depressions and crack the other 4.\n- We use Sukrin Gold erythritol, which looks and tastes like light brown sugar. If not low-carbing, demarara or other sugar can be substituted.\n- Bell peppers are bad for absorbing pesticides, so we always use organic because the skin is eaten.\n- The type of red wine is not critical, honestly. We use small (187ml) “individual” bottles of fairly cheap red wine.",
        forked: "[Israeli Breakfast Of Champions: Shakshuka](http://www.foodrepublic.com/recipes/israeli-breakfast-of-champions-shakshuka/)",
        image: "http://forkgasm.com/images/shakshuka.jpg"
      },
      {
        name: "Real Caesar Salad",
        id: "real-caesar-salad",
        description: "Based on the original 1920's Italian-American table-side recipe",
        tag: [
          "Italian-American",
          "Salad"
        ],
        image: "https://instagram.fbed1-1.fna.fbcdn.net/t51.2885-15/e35/14712020_1147704851979954_5563654975441076224_n.jpg",
        ingredient: [
          {
            amount: "0.5",
            unit: "Head",
            name: "Garlic",
            preparation: "Minced"
          },
          {
            amount: "5",
            name: "Anchovies"
          },
          {
            amount: "3",
            name: "Free-range egg yolks"
          },
          {
            amount: "1",
            unit: "tsp",
            name: "Dijon Mustard"
          },
          {
            amount: "1",
            unit: "good splash",
            name: "Worcestershire sauce"
          },
          {
            amount: "1",
            unit: "cup",
            name: "Extra-virgin Greek olive oil"
          },
          {
            amount: "0.5",
            unit: "cup",
            name: "Parmesan",
            preparation: "Finely grated"
          },
          {
            name: "Black pepper",
            preparation: "Freshly grated"
          },
          {
            name: "Sea salt"
          },
          {
            amount: "2",
            unit: "tbsp",
            name: "Lemon juice"
          },
          {
            amount: "3",
            name: "Romaine hearts"
          }
        ],
        ingredientGroup: [],
        step: [
          {
            description: "Traditionally using a mortar and pestle (but a hand blender works just as well, we find) turn the garlic, anchovies and a pinch of salt into a fine paste."
          },
          {
            description: "Add the whisked egg yolks, lemon juice, Worcestershire sauce and mustard. This can be done in a bowl with a whisk, or if using a blender continue with that."
          },
          {
            description: "Gradually at first, add the oil and whisk/blend with each addition."
          },
          {
            description: "Add the Parmesan and mix well."
          },
          {
            description: "Taste, adjust with salt, pepper, lemon as desired."
          },
          {
            description: "Either shred the romaine hearts and toss with the sauce, or serve individual leaves for dipping."
          },
          {
            description: "If liked, garnish with more whole anchovies and/or Parmesan flakes"
          }
        ],
        forked: "[Classic Caesar Salad](https://www.bonappetit.com/recipe/classic-caesar-salad#recipe-ingredients)",
        notes: "We don't use croutons but if you want them, go ahead!\nSauce keeps well in a fridge for a few days.\n"
      },
      {
        image: "http://forkgasm.com/images/fathead-pineapple.jpg",
        name: "Fathead Pineapple Pizza",
        id: "fathead-pineapple-pizza",
        description: "Low carb and delicious!",
        tag: [],
        ingredient: [],
        step: [
          {
            description: "Mix two thirds of the grated mozzarella, the almond flour, and the nutritional yeast in a microwaveable bowl. Add the mascarpone. Microwave on HIGH for 1 minute."
          },
          {
            description: "Add cumin, garlic, salt, pepper."
          },
          {
            description: "Stir then microwave on HIGH for another minute. Repeat until it's soft, usually doesn’t need more than 2 minutes total."
          },
          {
            description: "Add the eggs and mix gently."
          },
          {
            description: "Put a piece of parchment paper over your pizza stone, add the dough on top of it and then another piece of parchment paper. Use a rolling pin to roll it as close as possible to the pizza stone shape and evenly around 5mm thick or less. Remove the top sheet of parchment paper."
          },
          {
            description: "Make fork holes all over the pizza base to ensure it cooks evenly."
          },
          {
            description: "Bake at 215C/420F for 15 minutes or until golden brown."
          },
          {
            description: "If you can manage to flip the pizza over without breaking it, flip it and bake a bit longer to make it crispy. If you’re worried it will break don't flip it, we never do and it’s fine!"
          },
          {
            description: "While the base is baking, make the tomato sauce: in a mini-blender of food processor blend the tomato paste, garlic wine, basil, Worcestershire sauce, oregano. Cook at medium-low heat for 5-10 minutes or until thickened a bit."
          },
          {
            description: "While the base is baking and the sauce simmering, cut the bacon into 5mm lardons and sauté with the mushrooms until almost (but not completely) cooked to your liking."
          },
          {
            description: "Once the pizza base is done, spread the sauce over it as evenly as you can (a brush or rubber spatula helps). Then add the remaining grated cheeses, the bacon, the mushrooms, the pepper, the pineapple."
          },
          {
            description: "Broil at 260C/500F for about 5 minutes, checking frequently because ovens vary. Enjoy!"
          }
        ],
        forked: "[Fat Head Pizza - The HOLY GRAIL Of Low Carb Pizzas ](https://www.ditchthecarbs.com/fat-head-pizza/)",
        ingredientGroup: [
          {
            name: "Dough",
            ingredient: [
              {
                amount: "130",
                unit: "g",
                name: "almond flour"
              },
              {
                amount: "40",
                unit: "g",
                name: "nutritional yeast"
              },
              {
                amount: "330",
                unit: "g",
                name: "mozarella",
                preparation: "grated"
              },
              {
                amount: "3",
                name: "eggs",
                preparation: "beaten"
              },
              {
                amount: "4",
                unit: "tbsp",
                name: "mascarpone"
              },
              {
                amount: "0.5",
                unit: "tsp",
                name: "cumin",
                preparation: "freshly ground"
              },
              {
                amount: "0.5",
                unit: "tsp",
                name: "garlic powder"
              }
            ]
          },
          {
            name: "Tomato sauce",
            ingredient: [
              {
                amount: "200",
                unit: "g",
                name: "tomato concentrate/paste"
              },
              {
                amount: "5",
                unit: "cloves",
                name: "garlic"
              },
              {
                amount: "1",
                unit: "tsp",
                name: "dried basil (or 1 tbsp fresh)"
              },
              {
                amount: "1",
                unit: "splash",
                name: "dry red wine"
              },
              {
                amount: "1",
                unit: "splash",
                name: "soy sauce "
              },
              {
                amount: "1",
                unit: "splash",
                name: "Worcestershire sauce "
              },
              {
                amount: "1",
                unit: "tsp",
                name: "Sukrin Gold "
              },
              {
                name: "oregano"
              }
            ]
          },
          {
            name: "Toppings",
            ingredient: [
              {
                amount: "170",
                unit: "g",
                name: "mozarella",
                preparation: "grated"
              },
              {
                amount: "250",
                unit: "g",
                name: "cheddar, gouda, gruyere or similar grated"
              },
              {
                amount: "5",
                unit: "oz",
                name: "bacon",
                preparation: "sliced and chopped in 1cm pieces"
              },
              {
                amount: "1",
                name: "green bell pepper "
              },
              {
                amount: "6",
                unit: "oz",
                name: "mushrooms",
                preparation: "sliced"
              },
              {
                amount: "200",
                unit: "g",
                name: "pineapple",
                preparation: "in small pieces"
              }
            ]
          }
        ]
      },
      {
        image: "http://forkgasm.com/images/mushrooms.jpg",
        name: "Garlic mushrooms a la crème with lardons and green pepper",
        id: "garlic-mushrooms-a-la-creme-with-lardons-and-green-pepper",
        description: "Not the most photogenic dish, but really easy, quick and delicious!",
        tag: [],
        ingredient: [
          {
            amount: "10",
            unit: "oz",
            name: "mushrooms",
            preparation: "sliced"
          },
          {
            amount: "7",
            unit: "oz",
            name: "thick cut smoked bacon"
          },
          {
            amount: "1",
            name: "green bell pepper",
            preparation: "chopped"
          },
          {
            amount: "10",
            unit: "cloves",
            name: "garlic",
            preparation: "finely chopped"
          },
          {
            amount: "1",
            unit: "cup",
            name: "cheddar",
            preparation: "grated"
          },
          {
            amount: "1",
            unit: "cup",
            name: "heavy cream"
          },
          {
            amount: "1",
            unit: "tbsp",
            name: "butter"
          },
          {
            amount: "1",
            unit: "tbsp",
            name: "coconut oil"
          },
          {
            amount: "1",
            unit: "pinch",
            name: "Thyme"
          },
          {
            amount: "0.2",
            name: "whole nutmeg"
          },
          {
            name: "Worcestershire sauce"
          },
          {
            name: "Salt, pepper",
            preparation: "to taste"
          }
        ],
        ingredientGroup: [],
        step: [
          {
            description: "Cut each strip of bacon into 4mm [lardons](https://en.wikipedia.org/wiki/Lardon)."
          },
          {
            description: "Fry the bacon in the butter on medium-high heat until starting to turn translucent"
          },
          {
            description: "Add sliced mushrooms. Season with black pepper."
          },
          {
            description: "Continue to fry until mushrooms release their liquid and are turning darker. "
          },
          {
            description: "In a separate pan, fry the pepper in the coconut oil until softened and just starting to turn brown."
          },
          {
            description: "Add garlic to the mushrooms and stir until fragrant."
          },
          {
            description: "Add thyme and stir. Then add a generous splash of Worcestershire sauce."
          },
          {
            description: "Pour the cream into the mushrooms, bring to a low boil, then reduce heat."
          },
          {
            description: "Add the green peppers"
          },
          {
            description: "When the cream reduces a bit, add the grated cheese and stir until melted."
          },
          {
            description: "Grate the nutmeg into the mixture and serve."
          }
        ],
        notes: "- If you can find smoked cheddar, use a mixture of 50% smoked cheddar and 50% normal cheddar (it's very strong so not 100%). \n- Don’t allow the cream to overcook or it will separate!\n- You can probably cook the pepper in with the mushrooms and ignore the coconut oil, if desired."
      },
      {
        image: "http://forkgasm.com/images/chicken-liver-pate.jpg",
        name: "Chicken Liver Pâté",
        id: "chicken-liver-pate",
        description: "Rich and creamy, delicious on bread or even on its own",
        tag: [
          "Chicken",
          "Offal"
        ],
        ingredient: [
          {
            amount: "500",
            unit: "g",
            name: "raw chicken liver",
            preparation: "cleaned"
          },
          {
            amount: "1",
            name: "large white onion"
          },
          {
            amount: "2",
            unit: "cloves",
            name: "garlic",
            preparation: "minced"
          },
          {
            amount: "150",
            unit: "ml",
            name: "Metaxa or other brandy/cognac"
          },
          {
            amount: "50",
            unit: "ml",
            name: "heavy cream"
          },
          {
            name: "Butter",
            amount: "50",
            unit: "g"
          },
          {
            name: "Salt, pepper",
            preparation: "to taste"
          },
          {
            name: "Parsley"
          },
          {
            name: "balsamic reduction"
          }
        ],
        step: [
          {
            description: "Chop most of the onion but set a little aside for garnish"
          },
          {
            description: "Sauté garlic and onion in a bit of butter."
          },
          {
            description: "Add the livers and sauté on both sides until they have a bit color but are still pink inside. Season with salt and pepper."
          },
          {
            description: "Add the Metaxa and let it steam away."
          },
          {
            description: "Put all in a tall blender glass and add the cream and remaining butter and blend until smooth"
          },
          {
            description: "Put aside in fridge for at least 4 hours and serve, garnishing with the balsamic reduction, parsley and the onion from step 1."
          }
        ],
        forked: "Original recipe by Lea Dam Jensen",
        ingredientGroup: [],
      },
      {
        image: "http://forkgasm.com/images/htapodi-krasato.jpg",
        name: "Octopus in Wine",
        id: "octopus-in-wine",
        description: "A traditional Greek dish (Htapodi Krasato).",
        tag: [
          "Greek",
          "Stew",
          "Seafood"
        ],
        ingredient: [
          {
            amount: "2",
            name: "whole raw octopus"
          },
          {
            amount: "1",
            unit: "bottle",
            name: "dry red cooking wine"
          },
          {
            amount: "6",
            name: "cloves"
          },
          {
            amount: "4",
            name: "bay leaves"
          },
          {
            name: "extra virgin olive oil"
          },
          {
            amount: "1",
            unit: "large",
            name: "potato or turnip",
            preparation: "in 1in cubes"
          },
          {
            amount: "0.5",
            unit: "cup",
            name: "Kalamata olives",
            preparation: "pitted"
          }
        ],
        step: [
          {
            description: "Wash the octopus, remove the eyes and beak, and separate the tentacles. Cut each tentacle in 2-3 pieces of roughly equal volume, same for the head."
          },
          {
            description: "Put tentacles and head in a large pot with nothing else and boil over medium heat."
          },
          {
            description: "You will notice that the octopus is releasing juices and slowly become redder. As the juices start to evaporate, slowly pour in the wine."
          },
          {
            description: "Once you've poured all wine, add cloves and bay leaves."
          },
          {
            description: "Simmer for about two hours. Half an hour before done, add the potatoes or turnips and the olives."
          },
          {
            description: "Once it's reduced and the octopus and vegetables are tender add 1tbsp olive oil, mix, and serve! Makes about 6 portions."
          }
        ],
        notes: "The original version uses potatoes, but we have used turnips, okra and other vegetables with good success. Turnips also make the dish low carb. The one in the photo uses okra.\n?tap?d? ??as?t? is the Greek name.",
        forked: "[?tap?d? ??as?t?: ?e????st?? µe??? µe t??a µ??? ?????!](https://www.cretangastronomy.gr/2013/04/%CF%87%CF%84%CE%B1%CF%80%CF%8C%CE%B4%CE%B9-%CE%BA%CF%81%CE%B1%CF%83%CE%AC%CF%84%CE%BF-%CE%BE%CE%B5%CF%87%CF%89%CF%81%CE%B9%CF%83%CF%84%CF%8C%CF%82-%CE%BC%CE%B5%CE%B6%CE%AD%CF%82-%CE%BC%CE%B5-%CF%84-2/)",
        ingredientGroup: []
      },
      {
        image: "http://forkgasm.com/images/salmon-sous-vide.jpg",
        name: "Sous Vide Salmon Teriyaki",
        id: "salmon-teriyaki",
        description: "Tender, refreshing and very easy to make",
        tag: [
          "Asian",
          "Seafood",
          "Sous Vide"
        ],
        ingredient: [
          {
            amount: "2",
            name: "half pound salmon fillets"
          },
          {
            amount: "1",
            unit: "lbs",
            name: "bean sprouts"
          },
          {
            amount: "0.25",
            unit: "cup",
            name: "soy sauce"
          },
          {
            amount: "1",
            unit: "tbsp",
            name: "erythritol"
          },
          {
            amount: "1",
            unit: "tsp",
            name: "fresh ginger"
          },
          {
            amount: "4",
            unit: "cloves",
            name: "garlic"
          },
          {
            amount: "2",
            unit: "tbsp",
            name: "mirin or dry sherry"
          },
          {
            amount: "2",
            unit: "tsp",
            name: "toasted sesame oil"
          },
          {
            amount: "1",
            name: "spring onion",
            preparation: "sliced"
          }
        ],
        step: [
          {
            description: "In a small saucepan over medium-high heat, combine the soy sauce, erythritol, ginger, garlic, mirin and sesame oil. Bring to a simmer, stirring until the erythritol has dissolved, about 1 minute. Let cool to room temperature. Reserve 1/4 cup (2 fl. oz./60 ml) of the sauce."
          },
          {
            description: "Place the salmon fillets in separate zip lock bags and pour the remaining sauce into the bags, dividing evenly. If you have time you can let them marinate for 1-4 hours, but you don’t have to."
          },
          {
            description: "Prepare a sous vide immersion circulator for use according to the manufacturer’s instructions. Preheat the water to 122°F (50°C). Place the bags into the circulating water and cook for 40 minutes for medium doneness."
          },
          {
            description: "5 minutes before the salmon is done, stir fry the bean sprouts in a large pan with a tsp of sesame oil and a splash of soy sauce. Divide evenly in two plates."
          },
          {
            description: "Once the salmon is done, sear the skin in the same pan for 30 seconds. Place each fillet on top of the bean sprouts and pour the saved sauce on it. Optionally, you can also use the sauce from the ziplock bags, but keep in mind it will be more watery (we did anyway)."
          },
          {
            description: "Garnish with the sliced spring onion and serve!"
          }
        ],
        notes: "Not low carbing? You can use brown sugar in place of erythritol.",
        forked: "[Sous Vide Salmon Teriyaki](https://www.williams-sonoma.com/recipe/sous-vide-salmon-teriyaki.html)",
        ingredientGroup: [],
      },
      {
        image: "http://forkgasm.com/images/sfouggato.png",
        name: "Sfouggato",
        description: "A Lesbian delicacy that is super easy to make and can be eaten hot or cold.",
        tag: [
          "Greek"
        ],
        id: "sfouggato",
        ingredient: [
          {
            amount: "7",
            name: "eggs"
          },
          {
            amount: "6",
            name: "zucchini",
            preparation: "grated"
          },
          {
            amount: "0.5",
            unit: "bunch",
            name: "parsley",
            preparation: "finely chopped"
          },
          {
            amount: "0.5",
            unit: "bunch",
            name: "dill",
            preparation: "finely chopped"
          },
          {
            amount: "1",
            unit: "tsp",
            name: "dried mint"
          },
          {
            amount: "0.5",
            unit: "cup",
            name: "graviera",
            preparation: "grated"
          },
          {
            amount: "0.5",
            unit: "cup",
            name: "feta",
            preparation: "crumbled"
          },
          {
            amount: "1",
            name: "red onion",
            preparation: "finely chopped"
          },
          {
            amount: "1",
            name: "spring onion",
            preparation: "finely chopped"
          },
          {
            amount: "0.5",
            unit: "cup",
            name: "olive oil"
          },
          {
            name: "salt"
          },
          {
            name: "pepper"
          }
        ],
        step: [
          {
            description: "Add a lot of salt to the grated zucchini and squeeze well with a towel or cheesecloth to remove moisture."
          },
          {
            description: "Beat the eggs in a bowl and set aside."
          },
          {
            description: "In a large bowl, mix the zucchini, parsley, dill, onion, spring onion, cheeses, pepper, eggs."
          },
          {
            description: "Add the olive oil to the mix."
          },
          {
            description: "Spread on a deep, oiled baking tray and bake at 180-200C (350-390F) for about 40 minutes or until golden."
          }
        ],
        ingredientGroup: [],
        notes: "- Graviera is a Greek hard light yellow cheese. Can’t find graviera? Use any yellow cheese that melts. The sfouggato in this photo was actually made with cheddar!\n- Don’t have all the ingredients? Worry not! This is a dish with many variations. Most of the ingredients are optional. What is absolutely mandatory is the eggs, zucchinis, some herbs (parsley, dill, and/or mint), some kind of cheese, and some kind of onion (only red onion or only spring onion is ok).",
        forked: "[Sf?????t? t? ??t??????](https://akispetretzikis.com/el/categories/almyres-pites-tartes/sfoyggato-to-mytilhnio), [Sf?????t? ??t?????? µe ??????????a](https://www.madameginger.com/syntages/syntages-mageirikis/ayga/sfouggato-mutilinis/)"
      },
      {
        name: "Khoresht Karafs",
        description: "A delicious Persian stew with beef and celery.",
        ingredient: [
          {
            amount: "1",
            name: "large yellow onion",
            preparation: "diced"
          },
          {
            amount: "4",
            unit: "cloves",
            name: "garlic",
            preparation: "finely chopped"
          },
          {
            amount: "1",
            unit: "bunch",
            name: "parsley"
          },
          {
            amount: "1",
            unit: "small bunch",
            name: "fresh mint"
          },
          {
            amount: "1.5",
            unit: "pound",
            name: "stew beef",
            preparation: "cut in 1in cubes"
          },
          {
            amount: "1",
            unit: "head",
            name: "celery",
            preparation: "trimmed and chopped in 1in slices"
          },
          {
            amount: "1",
            unit: "tsp",
            name: "ground turmeric"
          },
          {
            amount: "2",
            unit: "cup",
            name: "beef stock"
          },
          {
            amount: "0.5",
            name: "lemon",
            preparation: "juiced"
          },
          {
            name: "butter or oil"
          }
        ],
        step: [
          {
            description: "Wash the mint and parsley and make sure they are *completely dry*. A salad spinner helps, if you don’t have one you can use paper towels."
          },
          {
            description: "Finely chop the mint and parsley, then sauté until just starting to turn crispy. Set aside."
          },
          {
            description: "Sauté the onion with enough butter or oil until golden"
          },
          {
            description: "Add the garlic and sauté for 1-2 more minutes"
          },
          {
            description: "Add the turmeric and sauté for 2 more minutes"
          },
          {
            description: "Add the beef cubes and sauté until browned on the outside"
          },
          {
            description: "Pour in the beef stock and sautéed mint and parsley and simmer"
          },
          {
            description: "In a separate pan, sauté the celery until *just* starting to turn brown. Set aside."
          },
          {
            description: "After the stew has been simmering for 1.5 hour, pour in the sautéed celery and simmer for another 30 minutes. This is done so that the celery doesn’t become too mushy."
          },
          {
            description: "Finish with the lemon juice and serve."
          }
        ],
        image: "/images/khoresht-karafs.png",
        tag: [
          "Stew",
          "Persian",
          "Beef"
        ],
        notes: '',
        ingredientGroup: [],
        forked: "Elika’s family recipe",
        id: "khoresht-karafs"
      },
      {
        image: "http://forkgasm.com/images/cheesecake.png",
        name: "No-Bake Strawberry Cheesecake",
        description: "A delicious low carb treat!",
        tag: [
          "Dessert"
        ],
        ingredient: [],
        step: [
          {
            description: "**Base:** \n1. In a medium frying pan, melt the ghee under low heat. \n2. Add the almond and coconut flour and stir continuously. \n3. It will look very runny at first, that's normal. When it starts darkening and becoming more viscous, add the cinnamon and sweetener. \n4. When it's light brown and most of the the ghee has been absorbed, it's about done. At that point, add the vanilla extract. It will foam, that's ok. Stir until it goes down again.\n5. Press into a 9\" springform cake tray. Let it cool down in the fridge."
          },
          {
            description: "**Cream**: With a mixer beat the mascarpone on its own for a bit, then add icing sugar substitute to taste, then the rest of the ingredients. Blend until even. If you want the cheesecake to be extra fluffy, just beat it longer. Make sure the ghee in the bottom layer has solidified, then spread over the base in the cake tray. Put it back in the fridge."
          },
          {
            description: "**Topping**: Blend half of the fruits and cut the other half into slices. Using a small pot, heat up the blended strawberries, Sukrin Gold, lemon juice and stir frequently until all heated up and mixed well. Add the gelatin slowly by sprinkling and stirring so that it doesn't clump. Then add the sliced fruits and stir. Simmer for a bit, then take it off the heat and let it cool down a bit. Once it starts getting viscous, spread it over the cream and put it back in the fridge."
          },
          {
            description: "Chill in the fridge for at least 3 hours, then enjoy!"
          }
        ],
        notes: "- We use Sukrin Gold and Sukrin Icing for sweetening. We've tried many and think those are as close as it gets to the sugar equivalents and have no aftertaste.\n- You can use less mascarpone, the middle layer will just be less thick. Adjust the rest of the quantities accordingly in that case.",
        id: "cheesecake",
        ingredientGroup: [
          {
            name: "Base",
            ingredient: [
              {
                amount: "1.5",
                unit: "cup",
                name: "almond flour"
              },
              {
                amount: "200",
                unit: "g",
                name: "butter or ghee"
              },
              {
                amount: "A little",
                name: "coconut flour"
              },
              {
                name: "brown sugar substitute",
                amount: "3",
                unit: "tbsp"
              },
              {
                name: "vanilla extract",
                amount: "3",
                unit: "tbsp"
              },
              {
                name: "cinammon",
                amount: "1",
                unit: "tsp"
              }
            ]
          },
          {
            name: "Cream",
            ingredient: [
              {
                amount: "40",
                unit: "oz",
                name: "Mascarpone"
              },
              {
                name: "icing sugar substitute",
                amount: "4",
                unit: "tbsp"
              },
              {
                amount: "1",
                name: "lemon",
                preparation: "juiced"
              }
            ]
          },
          {
            name: "Topping",
            ingredient: [
              {
                amount: "1",
                unit: "lbs",
                name: "strawberries or other berries"
              },
              {
                name: "gelatin",
                amount: "0.5",
                unit: "scoop"
              },
              {
                amount: "1",
                name: "lemon",
                preparation: "juiced"
              },
              {
                name: "Sukrin Gold or similar",
                amount: "2",
                unit: "tbsp"
              }
            ]
          }
        ]
      },
      {
        image: "http://forkgasm.com/images/curried-beef-stew.jpg",
        name: "Curried Beef Stew",
        description: "Spicy, complex, and very flavorful, this Thai-inspired curry is perfect for cold winter nights.",
        tag: [
          "Thai",
          "Stew",
          "Beef"
        ],
        ingredient: [
          {
            amount: "2",
            unit: "pounds",
            name: "beef chuck",
            preparation: "trimmed and cut into 1.5-2\" cubes"
          },
          {
            amount: "1",
            unit: "cup",
            name: "shallots",
            preparation: "halved"
          },
          {
            amount: "6",
            unit: "tbsp",
            name: "unrefined coconut oil",
            preparation: "melted"
          },
          {
            amount: "3",
            unit: "tbsp",
            name: "soy sauce"
          },
          {
            amount: "9",
            unit: "cup",
            name: "beef broth"
          },
          {
            amount: "1",
            name: "medium turnip",
            preparation: "cut in 1\" cubes"
          },
          {
            amount: "0.125",
            unit: "tsp",
            name: "Kaffir lime leaf powder",
            preparation: "(or 6 leaves)"
          },
          {
            amount: "Some",
            name: "Fresh cilantro",
            preparation: "chopped"
          },
          {
            amount: "Some",
            name: "Thai basil"
          },
          {
            amount: "1",
            unit: "tbsp",
            name: "ground chipotle"
          }
        ],
        step: [
          {
            description: "**Curry paste**: In a mini blender or food processor, blend chiles and salt until pulverized. Add lemongrasss, ginger, galangal, turmeric, chopped shallots, garlic, shrimp paste one by one in order listed, fully pulverizing each before adding the next."
          },
          {
            description: "Combine curry paste, beef, soy sauce, and ground chipotle in a pot; stir to evenly coat beef. Add coconut oil and cook, stirring occasionally, over medium heat for 5 minutes. Add broth and bring to a boil. Cover, reduce heat to medium-low, and simmer, stirring occasionally, until beef is tender but not falling apart, 2-2 1/2 hours."
          },
          {
            description: "30 minutes before stew is done, stir in the turnip."
          },
          {
            description: "5 minutes before stew is done, add the halved shallots."
          },
          {
            description: "Garnish with cilantro and basil."
          }
        ],
        forked: "[Curried Beef Stew](https://www.epicurious.com/recipes/food/views/curried-beef-stew-380591)",
        notes: '',
        id: "curried-beef-stew",
        ingredientGroup: [
          {
            name: "Curry paste",
            ingredient: [
              {
                amount: "2",
                name: "dried guajillo chillies",
                preparation: "stemmed and seeded"
              },
              {
                amount: "0.5",
                unit: "tsp",
                name: "kosher salt"
              },
              {
                amount: "1",
                name: "lemongrass stalk",
                preparation: "bottom 4\" only, tough outer layer removed, cut into 1\" pieces"
              },
              {
                amount: "1",
                name: "garlic head"
              },
              {
                amount: "1",
                unit: "tbsp",
                name: "peeled fresh ginger"
              },
              {
                amount: "2",
                unit: "tsp",
                name: "galangal powder"
              },
              {
                amount: "2",
                unit: "tbsp",
                name: "peeled fresh turmeric"
              },
              {
                amount: "0.5",
                unit: "cup",
                name: "shallots",
                preparation: "chopped"
              },
              {
                amount: "1",
                unit: "tbsp",
                name: "Thai shrimp paste"
              }
            ]
          }
        ]
      }
    ]
  

  constructor() { }
  
}
