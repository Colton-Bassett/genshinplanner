// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateCharacter = /* GraphQL */ `
  subscription OnCreateCharacter {
    onCreateCharacter {
      id
      name
      type
      typeImage
      weapon
      stars
      description
      image
      abilityOne {
        name
        image
        description
      }
      abilityTwo {
        name
        image
        description
      }
      abilityThree {
        name
        image
        description
      }
      ascensionMats {
        matOne
        matTwo
        specialty
        commonMat
      }
      talentMats {
        talentMat
        bossMat
      }
    }
  }
`;
export const onUpdateCharacter = /* GraphQL */ `
  subscription OnUpdateCharacter {
    onUpdateCharacter {
      id
      name
      type
      typeImage
      weapon
      stars
      description
      image
      abilityOne {
        name
        image
        description
      }
      abilityTwo {
        name
        image
        description
      }
      abilityThree {
        name
        image
        description
      }
      ascensionMats {
        matOne
        matTwo
        specialty
        commonMat
      }
      talentMats {
        talentMat
        bossMat
      }
    }
  }
`;
export const onDeleteCharacter = /* GraphQL */ `
  subscription OnDeleteCharacter {
    onDeleteCharacter {
      id
      name
      type
      typeImage
      weapon
      stars
      description
      image
      abilityOne {
        name
        image
        description
      }
      abilityTwo {
        name
        image
        description
      }
      abilityThree {
        name
        image
        description
      }
      ascensionMats {
        matOne
        matTwo
        specialty
        commonMat
      }
      talentMats {
        talentMat
        bossMat
      }
    }
  }
`;
export const onCreateWeapon = /* GraphQL */ `
  subscription OnCreateWeapon {
    onCreateWeapon {
      id
      name
      type
      stars
      description
      image
      ascensionMats {
        matOne
        matTwo
        specialty
        commonMat
      }
    }
  }
`;
export const onUpdateWeapon = /* GraphQL */ `
  subscription OnUpdateWeapon {
    onUpdateWeapon {
      id
      name
      type
      stars
      description
      image
      ascensionMats {
        matOne
        matTwo
        specialty
        commonMat
      }
    }
  }
`;
export const onDeleteWeapon = /* GraphQL */ `
  subscription OnDeleteWeapon {
    onDeleteWeapon {
      id
      name
      type
      stars
      description
      image
      ascensionMats {
        matOne
        matTwo
        specialty
        commonMat
      }
    }
  }
`;
