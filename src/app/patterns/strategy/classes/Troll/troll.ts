import { WeaponBehavior } from "../../interfaces/WeaponBehavior/weapon-behavior";
import { Character } from "../Character/character";

export class Troll extends Character  {

  getType() {
    return 'Troll';
  }

  fight(): void {
    this.weapon.useWeapon();
  }

}
