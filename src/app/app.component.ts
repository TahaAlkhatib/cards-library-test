import { Component, VERSION } from "@angular/core";
import * as cards from "cards";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  constructor() {
    console.log(cards);
    var deck = new cards.decks.StandardDeck();
    // deck.shuffleAll();
    console.log(deck);
    const hand = deck.draw(13);
    const hand1 = deck.draw(13);
    const hand2 = deck.draw(13);
    const hand3 = deck.draw(13);
    // const hand4 = deck.draw(13);
    console.log(hand);
    console.log(hand.map(c => `${c.rank.shortName}-${c.suit.name}`));
    console.log(hand1.map(c => `${c.rank.shortName}-${c.suit.name}`));
    console.log(hand2.map(c => `${c.rank.shortName}-${c.suit.name}`));
    console.log(hand3.map(c => `${c.rank.shortName}-${c.suit.name}`));
    // console.log(hand4.map(c=>`${c.rank.shortName}-${c.suit.name}`));
  }
}
