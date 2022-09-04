import { WeaponBehavior } from "../../interfaces/WeaponBehavior/weapon-behavior";
import { Character } from "../Character/character";

export class Knight extends Character {
  
  getType() {
    return 'Knight';
  }

  fight(): void {
    this.weapon.useWeapon();
  }

}
