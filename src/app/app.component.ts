import { ComponentRef, ElementRef, ViewContainerRef } from '@angular/core';
import { OnInit, ViewChild } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';
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
import { KingComponent } from './patterns/strategy/components/King/king/king.component';
import { KnightComponent } from './patterns/strategy/components/Knight/knight/knight.component';
import { QueenComponent } from './patterns/strategy/components/Queen/queen/queen.component';
import { TrollComponent } from './patterns/strategy/components/Troll/troll/troll.component';
import { DynamicallyComponentDirective } from './patterns/strategy/directives/DynamicallyComponent/dynamically-component.directive';
import { WeaponBehavior } from './patterns/strategy/interfaces/WeaponBehavior/weapon-behavior';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  @ViewChild(DynamicallyComponentDirective, { static: true }) container!: DynamicallyComponentDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

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

    const viewContainerRef = this.container.viewContainerRef;
    viewContainerRef.clear();
    const componentRef: ComponentRef<any> = viewContainerRef.createComponent(this.character.getComponentType());
    componentRef.instance.data = this.character.getData();
  }

  getCharacter() {
    let componentFactory;
    let clase: Character;
    switch (this.characterStr) {
      case 'queen':
        clase = new Queen();
        break;
      case 'knight':
        clase = new Knight();
        break;
      case 'troll':
        clase = new Troll();
        break;
      default:
        clase = new King();
        break;
    }
    return clase;
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
