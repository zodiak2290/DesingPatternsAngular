import { ComponentFactoryResolver } from "@angular/core";
import { WeaponBehavior } from "../../interfaces/WeaponBehavior/weapon-behavior";

export abstract class Character {
  weapon!: WeaponBehavior;

  abstract fight(): void;

  abstract getType(): string;

  abstract getComponentType(): any;

  abstract getData(): any;

  setWeapon(wb: WeaponBehavior): void {
    this.weapon = wb;
  }

}
