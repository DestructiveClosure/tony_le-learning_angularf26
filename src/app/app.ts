import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Recipe } from './shared/models/recipe';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected title = "Recipe Finder";

  protected recipeArray: Recipe[] = [
    // {
    //   id: 1,
    //   name: "Chicken and Potato Roti",
    //   country: "Canada",
    //   description: "Spiced chicken and potato mixture",
    //   rating: 2,
    //   onMenu: true,
      
    // },
    // {
    //   id: 2,
    //   name: "Honey Balsamic Chicken with Crispy Broccoli",
    //   country: "America",
    //   description: "Sweet browned and cooked through",
    //   rating: 5,
    //   onMenu: true
    // },
    // {
    //   id: 3,
    //   name: "Katsu Chicken curry",
    //   country: "Canada",
    //   description: "Fried with aromatic white rice",
    //   rating: 6,
    // },
    // {
    //   id: 4,
    //   name: "Baked salmon with fennel",
    //   country: "Canada",
    //   description: "It's an easy, flavorful dish",
    //   rating: 7,
    //   onMenu: false
    // },
    // {
    //   id: 5,
    //   name: "Cajun spiced fish tacos",
    //   country: "Canada",
    //   description: "Meet our best ever, easy spicy fish tacos",
    //   rating: 10,
    //   onMenu: true
    // },
  ]

  toggleFoodMenu(recipe: Recipe): void{
    recipe.onMenu = !recipe.onMenu;
  }


}
