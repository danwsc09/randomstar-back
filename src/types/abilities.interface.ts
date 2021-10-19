export interface BaseAbility {
  abilityname: string;
  explanation: string;
}

export interface Ability extends BaseAbility {
  id: number;
  removed: boolean;
}

export type Abilities = Ability[];
