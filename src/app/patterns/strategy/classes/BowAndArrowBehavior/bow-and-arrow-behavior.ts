import { WeaponBehavior } from "../../interfaces/WeaponBehavior/weapon-behavior";

export class BowAndArrowBehavior implements WeaponBehavior {
    useWeapon(): void {
      console.log("con arco")
    }
}
