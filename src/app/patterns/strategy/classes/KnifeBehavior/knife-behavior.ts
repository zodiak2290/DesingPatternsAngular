import { WeaponBehavior } from "../../interfaces/WeaponBehavior/weapon-behavior";

export class KnifeBehavior implements WeaponBehavior {
    useWeapon(): void {
      console.log("con knife")
    }
}
