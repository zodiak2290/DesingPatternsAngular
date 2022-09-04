import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { AxeBehavior } from './patterns/strategy/classes/AxeBehavior/axe-behavior';
import { BowAndArrowBehavior } from './patterns/strategy/classes/BowAndArrowBehavior/bow-and-arrow-behavior';
import { Character } from './patterns/strategy/classes/Character/character';
import { King } from './patterns/strategy/classes/King/king';
import { KnifeBehavior } from './patterns/strategy/classes/KnifeBehavior/knife-behavior';
import { Knight } from './patterns/strategy/classes/Knight/knight';
import { Queen } from './patterns/strategy/classes/Queen/queen';
import { SwordBehavior } from './patterns/strategy/classes/SwordBehavior/sword-behavior';
import { Troll } from './patterns/strategy/classes/Troll/troll';
import { WeaponBehavior } from './patterns/strategy/interfaces/WeaponBehavior/weapon-behavior';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.createCharacter();
  }
  title = 'patternsCourse';

  weaponStr = 'sword';
  characterStr = 'king';

  character!: Character;
  weapon!: WeaponBehavior;
  typeCharacter!: string;


  setWeapon(weapon: string) {
    this.weaponStr = weapon;
    this.createCharacter();
  }

  chooseCharacter(characterType: string) {
    this.characterStr = characterType;
    this.createCharacter();
  }

  createCharacter() {
    this.character = this.getCharacter();

    this.typeCharacter = this.character.getType();

    this.weapon = this.getWeapon();

    this.character.setWeapon(this.weapon);
    
  }

  getCharacter() {
    switch (this.characterStr) {
      case 'queen':
        return new Queen();
      case 'knight':
        return new Knight();
      case 'troll':
        return new Troll();
      default:
        return new King();
    }
  }

  getWeapon() {
    switch (this.weaponStr) {
      case 'axe':
        return new AxeBehavior();
      case 'knife':
        return new KnifeBehavior();
      case 'bowAndArrow':
        return new BowAndArrowBehavior();
      default:
        return new SwordBehavior();
    }
  }

  attack() {
    this.character.fight();
  }
}
