import { WeaponBehavior } from "../../interfaces/WeaponBehavior/weapon-behavior";

export abstract class Character {
  weapon!: WeaponBehavior;
  abstract fight(): void;

  abstract getType(): string;

  setWeapon(wb: WeaponBehavior): void {
    this.weapon = wb;
  }

}
