/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCharacterInput = {
  id?: string | null,
  name: string,
  type?: string | null,
  weapon?: string | null,
  stars?: string | null,
  description?: string | null,
  image?: string | null,
  abilityOne?: AbilityInput | null,
  abilityTwo?: AbilityInput | null,
  abilityThree?: AbilityInput | null,
  ascensionMats?: AscensionInput | null,
  talentMats?: TalentInput | null,
};

export type AbilityInput = {
  name?: string | null,
  image?: string | null,
  description?: string | null,
};

export type AscensionInput = {
  matOne?: string | null,
  matTwo?: string | null,
  specialty?: string | null,
  commonMat?: string | null,
};

export type TalentInput = {
  talentMat?: string | null,
  bossMat?: string | null,
};

export type ModelCharacterConditionInput = {
  name?: ModelStringInput | null,
  type?: ModelStringInput | null,
  weapon?: ModelStringInput | null,
  stars?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelCharacterConditionInput | null > | null,
  or?: Array< ModelCharacterConditionInput | null > | null,
  not?: ModelCharacterConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateCharacterInput = {
  id: string,
  name?: string | null,
  type?: string | null,
  weapon?: string | null,
  stars?: string | null,
  description?: string | null,
  image?: string | null,
  abilityOne?: AbilityInput | null,
  abilityTwo?: AbilityInput | null,
  abilityThree?: AbilityInput | null,
  ascensionMats?: AscensionInput | null,
  talentMats?: TalentInput | null,
};

export type DeleteCharacterInput = {
  id?: string | null,
};

export type ModelCharacterFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  type?: ModelStringInput | null,
  weapon?: ModelStringInput | null,
  stars?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelCharacterFilterInput | null > | null,
  or?: Array< ModelCharacterFilterInput | null > | null,
  not?: ModelCharacterFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CreateCharacterMutationVariables = {
  input: CreateCharacterInput,
  condition?: ModelCharacterConditionInput | null,
};

export type CreateCharacterMutation = {
  createCharacter:  {
    __typename: "Character",
    id: string,
    name: string,
    type: string | null,
    weapon: string | null,
    stars: string | null,
    description: string | null,
    image: string | null,
    abilityOne:  {
      __typename: "Ability",
      name: string | null,
      image: string | null,
      description: string | null,
    } | null,
    abilityTwo:  {
      __typename: "Ability",
      name: string | null,
      image: string | null,
      description: string | null,
    } | null,
    abilityThree:  {
      __typename: "Ability",
      name: string | null,
      image: string | null,
      description: string | null,
    } | null,
    ascensionMats:  {
      __typename: "Ascension",
      matOne: string | null,
      matTwo: string | null,
      specialty: string | null,
      commonMat: string | null,
    } | null,
    talentMats:  {
      __typename: "Talent",
      talentMat: string | null,
      bossMat: string | null,
    } | null,
  } | null,
};

export type UpdateCharacterMutationVariables = {
  input: UpdateCharacterInput,
  condition?: ModelCharacterConditionInput | null,
};

export type UpdateCharacterMutation = {
  updateCharacter:  {
    __typename: "Character",
    id: string,
    name: string,
    type: string | null,
    weapon: string | null,
    stars: string | null,
    description: string | null,
    image: string | null,
    abilityOne:  {
      __typename: "Ability",
      name: string | null,
      image: string | null,
      description: string | null,
    } | null,
    abilityTwo:  {
      __typename: "Ability",
      name: string | null,
      image: string | null,
      description: string | null,
    } | null,
    abilityThree:  {
      __typename: "Ability",
      name: string | null,
      image: string | null,
      description: string | null,
    } | null,
    ascensionMats:  {
      __typename: "Ascension",
      matOne: string | null,
      matTwo: string | null,
      specialty: string | null,
      commonMat: string | null,
    } | null,
    talentMats:  {
      __typename: "Talent",
      talentMat: string | null,
      bossMat: string | null,
    } | null,
  } | null,
};

export type DeleteCharacterMutationVariables = {
  input: DeleteCharacterInput,
  condition?: ModelCharacterConditionInput | null,
};

export type DeleteCharacterMutation = {
  deleteCharacter:  {
    __typename: "Character",
    id: string,
    name: string,
    type: string | null,
    weapon: string | null,
    stars: string | null,
    description: string | null,
    image: string | null,
    abilityOne:  {
      __typename: "Ability",
      name: string | null,
      image: string | null,
      description: string | null,
    } | null,
    abilityTwo:  {
      __typename: "Ability",
      name: string | null,
      image: string | null,
      description: string | null,
    } | null,
    abilityThree:  {
      __typename: "Ability",
      name: string | null,
      image: string | null,
      description: string | null,
    } | null,
    ascensionMats:  {
      __typename: "Ascension",
      matOne: string | null,
      matTwo: string | null,
      specialty: string | null,
      commonMat: string | null,
    } | null,
    talentMats:  {
      __typename: "Talent",
      talentMat: string | null,
      bossMat: string | null,
    } | null,
  } | null,
};

export type GetCharacterQueryVariables = {
  id: string,
};

export type GetCharacterQuery = {
  getCharacter:  {
    __typename: "Character",
    id: string,
    name: string,
    type: string | null,
    weapon: string | null,
    stars: string | null,
    description: string | null,
    image: string | null,
    abilityOne:  {
      __typename: "Ability",
      name: string | null,
      image: string | null,
      description: string | null,
    } | null,
    abilityTwo:  {
      __typename: "Ability",
      name: string | null,
      image: string | null,
      description: string | null,
    } | null,
    abilityThree:  {
      __typename: "Ability",
      name: string | null,
      image: string | null,
      description: string | null,
    } | null,
    ascensionMats:  {
      __typename: "Ascension",
      matOne: string | null,
      matTwo: string | null,
      specialty: string | null,
      commonMat: string | null,
    } | null,
    talentMats:  {
      __typename: "Talent",
      talentMat: string | null,
      bossMat: string | null,
    } | null,
  } | null,
};

export type ListCharactersQueryVariables = {
  filter?: ModelCharacterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCharactersQuery = {
  listCharacters:  {
    __typename: "ModelCharacterConnection",
    items:  Array< {
      __typename: "Character",
      id: string,
      name: string,
      type: string | null,
      weapon: string | null,
      stars: string | null,
      description: string | null,
      image: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateCharacterSubscription = {
  onCreateCharacter:  {
    __typename: "Character",
    id: string,
    name: string,
    type: string | null,
    weapon: string | null,
    stars: string | null,
    description: string | null,
    image: string | null,
    abilityOne:  {
      __typename: "Ability",
      name: string | null,
      image: string | null,
      description: string | null,
    } | null,
    abilityTwo:  {
      __typename: "Ability",
      name: string | null,
      image: string | null,
      description: string | null,
    } | null,
    abilityThree:  {
      __typename: "Ability",
      name: string | null,
      image: string | null,
      description: string | null,
    } | null,
    ascensionMats:  {
      __typename: "Ascension",
      matOne: string | null,
      matTwo: string | null,
      specialty: string | null,
      commonMat: string | null,
    } | null,
    talentMats:  {
      __typename: "Talent",
      talentMat: string | null,
      bossMat: string | null,
    } | null,
  } | null,
};

export type OnUpdateCharacterSubscription = {
  onUpdateCharacter:  {
    __typename: "Character",
    id: string,
    name: string,
    type: string | null,
    weapon: string | null,
    stars: string | null,
    description: string | null,
    image: string | null,
    abilityOne:  {
      __typename: "Ability",
      name: string | null,
      image: string | null,
      description: string | null,
    } | null,
    abilityTwo:  {
      __typename: "Ability",
      name: string | null,
      image: string | null,
      description: string | null,
    } | null,
    abilityThree:  {
      __typename: "Ability",
      name: string | null,
      image: string | null,
      description: string | null,
    } | null,
    ascensionMats:  {
      __typename: "Ascension",
      matOne: string | null,
      matTwo: string | null,
      specialty: string | null,
      commonMat: string | null,
    } | null,
    talentMats:  {
      __typename: "Talent",
      talentMat: string | null,
      bossMat: string | null,
    } | null,
  } | null,
};

export type OnDeleteCharacterSubscription = {
  onDeleteCharacter:  {
    __typename: "Character",
    id: string,
    name: string,
    type: string | null,
    weapon: string | null,
    stars: string | null,
    description: string | null,
    image: string | null,
    abilityOne:  {
      __typename: "Ability",
      name: string | null,
      image: string | null,
      description: string | null,
    } | null,
    abilityTwo:  {
      __typename: "Ability",
      name: string | null,
      image: string | null,
      description: string | null,
    } | null,
    abilityThree:  {
      __typename: "Ability",
      name: string | null,
      image: string | null,
      description: string | null,
    } | null,
    ascensionMats:  {
      __typename: "Ascension",
      matOne: string | null,
      matTwo: string | null,
      specialty: string | null,
      commonMat: string | null,
    } | null,
    talentMats:  {
      __typename: "Talent",
      talentMat: string | null,
      bossMat: string | null,
    } | null,
  } | null,
};
