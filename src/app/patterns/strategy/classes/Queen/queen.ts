import { WeaponBehavior } from "../../interfaces/WeaponBehavior/weapon-behavior";
import { Character } from "../Character/character";

export class Queen extends Character {

  getType() {
    return 'Queen';
  }

  fight(): void {
    this.weapon.useWeapon();
  }

}
