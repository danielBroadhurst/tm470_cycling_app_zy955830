import { Profile } from './profile';
import { CyclingClub } from './cyclingClub';

export class User {

    constructor(
      public id: number,
      public first_name: string,
      public last_name: string,
      public email: string,
      public user_profile: Profile,
      public cycling_club_admin: Array<CyclingClub>
    ) {  }
  
  }
  