import { WeaponBehavior } from "../../interfaces/WeaponBehavior/weapon-behavior";
import { Character } from "../Character/character";

export class King extends Character {

  getType() {
    return 'King';
  }

  fight(): void {
    this.weapon.useWeapon();
  }

}
