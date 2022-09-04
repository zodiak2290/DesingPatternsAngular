import { KingComponent } from "../../components/King/king/king.component";
import { WeaponBehavior } from "../../interfaces/WeaponBehavior/weapon-behavior";
import { Character } from "../Character/character";

export class King extends Character {
  getData() {
    return {
      type: this.getType(),
      name:'Jonh Snow'
    }
  }
  getComponentType() {
    return KingComponent;
  }

  getType() {
    return 'King';
  }

  fight(): void {
    this.weapon.useWeapon();
  }

}
