import { QueenComponent } from "../../components/Queen/queen/queen.component";
import { WeaponBehavior } from "../../interfaces/WeaponBehavior/weapon-behavior";
import { Character } from "../Character/character";

export class Queen extends Character {

  getData() {
    return {
      type: this.getType(),
      name: 'Isabel'
    }
  }

  getComponentType() {
    return QueenComponent;
  }

  getType() {
    return 'Queen';
  }

  fight(): void {
    this.weapon.useWeapon();
  }

}
