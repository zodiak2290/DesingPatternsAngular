import { WeaponBehavior } from "../../interfaces/WeaponBehavior/weapon-behavior";

export class SwordBehavior implements WeaponBehavior {
    useWeapon(): void {
      console.log("con sword")
    }
}
