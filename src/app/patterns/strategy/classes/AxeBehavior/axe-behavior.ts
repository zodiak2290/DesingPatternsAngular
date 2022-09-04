import { WeaponBehavior } from "../../interfaces/WeaponBehavior/weapon-behavior";

export class AxeBehavior implements WeaponBehavior{
    useWeapon(): void {
        console.log("con hacha")
    }
}
