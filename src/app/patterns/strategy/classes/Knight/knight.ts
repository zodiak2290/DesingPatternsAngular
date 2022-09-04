import { KnightComponent } from "../../components/Knight/knight/knight.component";
import { WeaponBehavior } from "../../interfaces/WeaponBehavior/weapon-behavior";
import { Character } from "../Character/character";

export class Knight extends Character {

  getData() {
    return {
      type: this.getType(),
      name: 'Aragon'
    }
  }

  getComponentType() {
    return KnightComponent;
  }
  
  getType() {
    return 'Knight';
  }

  fight(): void {
    this.weapon.useWeapon();
  }

}
