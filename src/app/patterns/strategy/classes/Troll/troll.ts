import { TrollComponent } from "../../components/Troll/troll/troll.component";
import { WeaponBehavior } from "../../interfaces/WeaponBehavior/weapon-behavior";
import { Character } from "../Character/character";

export class Troll extends Character  {
  getData() {
    return {
      type: this.getType(),
      name: 'Tronchatoro'
    }
  }

  getComponentType() {
    return TrollComponent;
  }

  getType() {
    return 'Troll';
  }

  fight(): void {
    this.weapon.useWeapon();
  }

}
