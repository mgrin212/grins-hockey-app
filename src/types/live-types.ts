// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-empty-interface */
export interface Root {
    copyright: string
    gamePk: number
    link: string
    metaData: MetaData
    gameData: GameData
    liveData: LiveData
  }
  
  export interface MetaData {
    wait: number
    timeStamp: string
  }
  
  export interface GameData {
    game: Game
    datetime: Datetime
    status: Status
    teams: Teams
    players: Players
    venue: Venue3
  }
  
  export interface Game {
    pk: number
    season: string
    type: string
  }
  
  export interface Datetime {
    dateTime: string
    endDateTime: string
  }
  
  export interface Status {
    abstractGameState: string
    codedGameState: string
    detailedState: string
    statusCode: string
    startTimeTBD: boolean
  }
  
  export interface Teams {
    away: Away
    home: Home
  }
  
  export interface Away {
    id: number
    name: string
    link: string
    venue: Venue
    abbreviation: string
    triCode: string
    teamName: string
    locationName: string
    firstYearOfPlay: string
    division: Division
    conference: Conference
    franchise: Franchise
    shortName: string
    officialSiteUrl: string
    franchiseId: number
    active: boolean
  }
  
  export interface Venue {
    id: number
    name: string
    link: string
    city: string
    timeZone: TimeZone
  }
  
  export interface TimeZone {
    id: string
    offset: number
    tz: string
  }
  
  export interface Division {
    id: number
    name: string
    nameShort: string
    link: string
    abbreviation: string
  }
  
  export interface Conference {
    id: number
    name: string
    link: string
  }
  
  export interface Franchise {
    franchiseId: number
    teamName: string
    link: string
  }
  
  export interface Home {
    id: number
    name: string
    link: string
    venue: Venue2
    abbreviation: string
    triCode: string
    teamName: string
    locationName: string
    firstYearOfPlay: string
    division: Division2
    conference: Conference2
    franchise: Franchise2
    shortName: string
    officialSiteUrl: string
    franchiseId: number
    active: boolean
  }
  
  export interface Venue2 {
    id: number
    name: string
    link: string
    city: string
    timeZone: TimeZone2
  }
  
  export interface TimeZone2 {
    id: string
    offset: number
    tz: string
  }
  
  export interface Division2 {
    id: number
    name: string
    nameShort: string
    link: string
    abbreviation: string
  }
  
  export interface Conference2 {
    id: number
    name: string
    link: string
  }
  
  export interface Franchise2 {
    franchiseId: number
    teamName: string
    link: string
  }
  
  export interface Players {
    ID8480070: Id8480070
    ID8471817: Id8471817
    ID8477919: Id8477919
    ID8475797: Id8475797
    ID8475852: Id8475852
    ID8471677: Id8471677
    ID8476278: Id8476278
    ID8474870: Id8474870
    ID8478136: Id8478136
    ID8478413: Id8478413
    ID8478452: Id8478452
    ID8476473: Id8476473
    ID8475220: Id8475220
    ID8480980: Id8480980
    ID8479383: Id8479383
    ID8478493: Id8478493
    ID8480025: Id8480025
    ID8480267: Id8480267
    ID8480884: Id8480884
    ID8481557: Id8481557
    ID8474716: Id8474716
    ID8470594: Id8470594
    ID8476915: Id8476915
    ID8477503: Id8477503
    ID8473604: Id8473604
    ID8476931: Id8476931
    ID8476856: Id8476856
    ID8474141: Id8474141
    ID8476960: Id8476960
    ID8475750: Id8475750
    ID8478864: Id8478864
    ID8477495: Id8477495
    ID8471274: Id8471274
    ID8477450: Id8477450
    ID8479972: Id8479972
    ID8475692: Id8475692
    ID8476463: Id8476463
    ID8479351: Id8479351
    ID8478043: Id8478043
    ID8481147: Id8481147
    ID8479390: Id8479390
    ID8480798: Id8480798
  }
  
  export interface Id8480070 {
    id: number
    fullName: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: string
    birthDate: string
    currentAge: number
    birthCity: string
    birthStateProvince: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptain: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: CurrentTeam
    primaryPosition: PrimaryPosition
  }
  
  export interface CurrentTeam {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PrimaryPosition {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Id8471817 {
    id: number
    fullName: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: string
    birthDate: string
    currentAge: number
    birthCity: string
    birthStateProvince: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptain: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: CurrentTeam2
    primaryPosition: PrimaryPosition2
  }
  
  export interface CurrentTeam2 {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PrimaryPosition2 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Id8477919 {
    id: number
    fullName: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: string
    birthDate: string
    currentAge: number
    birthCity: string
    birthStateProvince: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptain: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: CurrentTeam3
    primaryPosition: PrimaryPosition3
  }
  
  export interface CurrentTeam3 {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PrimaryPosition3 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Id8475797 {
    id: number
    fullName: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: string
    birthDate: string
    currentAge: number
    birthCity: string
    birthStateProvince: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptain: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: CurrentTeam4
    primaryPosition: PrimaryPosition4
  }
  
  export interface CurrentTeam4 {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PrimaryPosition4 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Id8475852 {
    id: number
    fullName: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: string
    birthDate: string
    currentAge: number
    birthCity: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptain: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: CurrentTeam5
    primaryPosition: PrimaryPosition5
  }
  
  export interface CurrentTeam5 {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PrimaryPosition5 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Id8471677 {
    id: number
    fullName: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: string
    birthDate: string
    currentAge: number
    birthCity: string
    birthStateProvince: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptain: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: CurrentTeam6
    primaryPosition: PrimaryPosition6
  }
  
  export interface CurrentTeam6 {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PrimaryPosition6 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Id8476278 {
    id: number
    fullName: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: string
    birthDate: string
    currentAge: number
    birthCity: string
    birthStateProvince: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptain: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: CurrentTeam7
    primaryPosition: PrimaryPosition7
  }
  
  export interface CurrentTeam7 {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PrimaryPosition7 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Id8474870 {
    id: number
    fullName: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: string
    birthDate: string
    currentAge: number
    birthCity: string
    birthStateProvince: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptain: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: CurrentTeam8
    primaryPosition: PrimaryPosition8
  }
  
  export interface CurrentTeam8 {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PrimaryPosition8 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Id8478136 {
    id: number
    fullName: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: string
    birthDate: string
    currentAge: number
    birthCity: string
    birthStateProvince: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptain: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: CurrentTeam9
    primaryPosition: PrimaryPosition9
  }
  
  export interface CurrentTeam9 {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PrimaryPosition9 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Id8478413 {
    id: number
    fullName: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: string
    birthDate: string
    currentAge: number
    birthCity: string
    birthStateProvince: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptain: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: CurrentTeam10
    primaryPosition: PrimaryPosition10
  }
  
  export interface CurrentTeam10 {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PrimaryPosition10 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Id8478452 {
    id: number
    fullName: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: string
    birthDate: string
    currentAge: number
    birthCity: string
    birthStateProvince: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptain: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: CurrentTeam11
    primaryPosition: PrimaryPosition11
  }
  
  export interface CurrentTeam11 {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PrimaryPosition11 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Id8476473 {
    id: number
    fullName: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: string
    birthDate: string
    currentAge: number
    birthCity: string
    birthStateProvince: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptain: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: CurrentTeam12
    primaryPosition: PrimaryPosition12
  }
  
  export interface CurrentTeam12 {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PrimaryPosition12 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Id8475220 {
    id: number
    fullName: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: string
    birthDate: string
    currentAge: number
    birthCity: string
    birthStateProvince: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptain: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: CurrentTeam13
    primaryPosition: PrimaryPosition13
  }
  
  export interface CurrentTeam13 {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PrimaryPosition13 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Id8480980 {
    id: number
    fullName: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: string
    birthDate: string
    currentAge: number
    birthCity: string
    birthStateProvince: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptain: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: CurrentTeam14
    primaryPosition: PrimaryPosition14
  }
  
  export interface CurrentTeam14 {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PrimaryPosition14 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Id8479383 {
    id: number
    fullName: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: string
    birthDate: string
    currentAge: number
    birthCity: string
    birthStateProvince: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptain: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: CurrentTeam15
    primaryPosition: PrimaryPosition15
  }
  
  export interface CurrentTeam15 {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PrimaryPosition15 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Id8478493 {
    id: number
    fullName: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: string
    birthDate: string
    currentAge: number
    birthCity: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptain: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: CurrentTeam16
    primaryPosition: PrimaryPosition16
  }
  
  export interface CurrentTeam16 {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PrimaryPosition16 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Id8480025 {
    id: number
    fullName: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: string
    birthDate: string
    currentAge: number
    birthCity: string
    birthStateProvince: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptain: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: CurrentTeam17
    primaryPosition: PrimaryPosition17
  }
  
  export interface CurrentTeam17 {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PrimaryPosition17 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Id8480267 {
    id: number
    fullName: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: string
    birthDate: string
    currentAge: number
    birthCity: string
    birthStateProvince: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptain: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: CurrentTeam18
    primaryPosition: PrimaryPosition18
  }
  
  export interface CurrentTeam18 {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PrimaryPosition18 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Id8480884 {
    id: number
    fullName: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: string
    birthDate: string
    currentAge: number
    birthCity: string
    birthStateProvince: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptain: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: CurrentTeam19
    primaryPosition: PrimaryPosition19
  }
  
  export interface CurrentTeam19 {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PrimaryPosition19 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Id8481557 {
    id: number
    fullName: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: string
    birthDate: string
    currentAge: number
    birthCity: string
    birthStateProvince: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptain: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: CurrentTeam20
    primaryPosition: PrimaryPosition20
  }
  
  export interface CurrentTeam20 {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PrimaryPosition20 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Id8474716 {
    id: number
    fullName: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: string
    birthDate: string
    currentAge: number
    birthCity: string
    birthStateProvince: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptain: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: CurrentTeam21
    primaryPosition: PrimaryPosition21
  }
  
  export interface CurrentTeam21 {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PrimaryPosition21 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Id8470594 {
    id: number
    fullName: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: string
    birthDate: string
    currentAge: number
    birthCity: string
    birthStateProvince: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptain: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: CurrentTeam22
    primaryPosition: PrimaryPosition22
  }
  
  export interface CurrentTeam22 {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PrimaryPosition22 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Id8476915 {
    id: number
    fullName: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: string
    birthDate: string
    currentAge: number
    birthCity: string
    birthStateProvince: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptain: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: CurrentTeam23
    primaryPosition: PrimaryPosition23
  }
  
  export interface CurrentTeam23 {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PrimaryPosition23 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Id8477503 {
    id: number
    fullName: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: string
    birthDate: string
    currentAge: number
    birthCity: string
    birthStateProvince: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptain: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: CurrentTeam24
    primaryPosition: PrimaryPosition24
  }
  
  export interface CurrentTeam24 {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PrimaryPosition24 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Id8473604 {
    id: number
    fullName: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: string
    birthDate: string
    currentAge: number
    birthCity: string
    birthStateProvince: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptain: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: CurrentTeam25
    primaryPosition: PrimaryPosition25
  }
  
  export interface CurrentTeam25 {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PrimaryPosition25 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Id8476931 {
    id: number
    fullName: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: string
    birthDate: string
    currentAge: number
    birthCity: string
    birthStateProvince: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptain: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: CurrentTeam26
    primaryPosition: PrimaryPosition26
  }
  
  export interface CurrentTeam26 {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PrimaryPosition26 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Id8476856 {
    id: number
    fullName: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: string
    birthDate: string
    currentAge: number
    birthCity: string
    birthStateProvince: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptain: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: CurrentTeam27
    primaryPosition: PrimaryPosition27
  }
  
  export interface CurrentTeam27 {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PrimaryPosition27 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Id8474141 {
    id: number
    fullName: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: string
    birthDate: string
    currentAge: number
    birthCity: string
    birthStateProvince: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptain: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: CurrentTeam28
    primaryPosition: PrimaryPosition28
  }
  
  export interface CurrentTeam28 {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PrimaryPosition28 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Id8476960 {
    id: number
    fullName: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: string
    birthDate: string
    currentAge: number
    birthCity: string
    birthStateProvince: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptain: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: CurrentTeam29
    primaryPosition: PrimaryPosition29
  }
  
  export interface CurrentTeam29 {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PrimaryPosition29 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Id8475750 {
    id: number
    fullName: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: string
    birthDate: string
    currentAge: number
    birthCity: string
    birthStateProvince: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptain: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: CurrentTeam30
    primaryPosition: PrimaryPosition30
  }
  
  export interface CurrentTeam30 {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PrimaryPosition30 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Id8478864 {
    id: number
    fullName: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: string
    birthDate: string
    currentAge: number
    birthCity: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptain: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: CurrentTeam31
    primaryPosition: PrimaryPosition31
  }
  
  export interface CurrentTeam31 {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PrimaryPosition31 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Id8477495 {
    id: number
    fullName: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: string
    birthDate: string
    currentAge: number
    birthCity: string
    birthStateProvince: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptain: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: CurrentTeam32
    primaryPosition: PrimaryPosition32
  }
  
  export interface CurrentTeam32 {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PrimaryPosition32 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Id8471274 {
    id: number
    fullName: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: string
    birthDate: string
    currentAge: number
    birthCity: string
    birthStateProvince: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptain: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: CurrentTeam33
    primaryPosition: PrimaryPosition33
  }
  
  export interface CurrentTeam33 {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PrimaryPosition33 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Id8477450 {
    id: number
    fullName: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: string
    birthDate: string
    currentAge: number
    birthCity: string
    birthStateProvince: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptain: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: CurrentTeam34
    primaryPosition: PrimaryPosition34
  }
  
  export interface CurrentTeam34 {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PrimaryPosition34 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Id8479972 {
    id: number
    fullName: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: string
    birthDate: string
    currentAge: number
    birthCity: string
    birthStateProvince: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptain: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: CurrentTeam35
    primaryPosition: PrimaryPosition35
  }
  
  export interface CurrentTeam35 {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PrimaryPosition35 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Id8475692 {
    id: number
    fullName: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: string
    birthDate: string
    currentAge: number
    birthCity: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptain: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: CurrentTeam36
    primaryPosition: PrimaryPosition36
  }
  
  export interface CurrentTeam36 {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PrimaryPosition36 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Id8476463 {
    id: number
    fullName: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: string
    birthDate: string
    currentAge: number
    birthCity: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptain: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: CurrentTeam37
    primaryPosition: PrimaryPosition37
  }
  
  export interface CurrentTeam37 {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PrimaryPosition37 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Id8479351 {
    id: number
    fullName: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: string
    birthDate: string
    currentAge: number
    birthCity: string
    birthStateProvince: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptain: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: CurrentTeam38
    primaryPosition: PrimaryPosition38
  }
  
  export interface CurrentTeam38 {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PrimaryPosition38 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Id8478043 {
    id: number
    fullName: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: string
    birthDate: string
    currentAge: number
    birthCity: string
    birthStateProvince: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptain: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: CurrentTeam39
    primaryPosition: PrimaryPosition39
  }
  
  export interface CurrentTeam39 {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PrimaryPosition39 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Id8481147 {
    id: number
    fullName: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: string
    birthDate: string
    currentAge: number
    birthCity: string
    birthStateProvince: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptain: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: CurrentTeam40
    primaryPosition: PrimaryPosition40
  }
  
  export interface CurrentTeam40 {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PrimaryPosition40 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Id8479390 {
    id: number
    fullName: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: string
    birthDate: string
    currentAge: number
    birthCity: string
    birthStateProvince: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptain: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: CurrentTeam41
    primaryPosition: PrimaryPosition41
  }
  
  export interface CurrentTeam41 {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PrimaryPosition41 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Id8480798 {
    id: number
    fullName: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: string
    birthDate: string
    currentAge: number
    birthCity: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptain: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: CurrentTeam42
    primaryPosition: PrimaryPosition42
  }
  
  export interface CurrentTeam42 {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PrimaryPosition42 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Venue3 {
    id: number
    name: string
    link: string
  }
  
  export interface LiveData {
    plays: Plays
    linescore: Linescore
    boxscore: Boxscore
    decisions: Decisions
  }
  
  export interface Plays {
    allPlays: AllPlay[]
    scoringPlays: number[]
    penaltyPlays: number[]
    playsByPeriod: PlaysByPeriod[]
    currentPlay: CurrentPlay
  }
  
  export interface AllPlay {
    result: Result
    about: About
    coordinates: Coordinates
    players?: Player[]
    team?: Team
  }
  
  export interface Result {
    event: string
    eventCode: string
    eventTypeId: string
    description: string
    secondaryType?: string
    strength?: Strength
    gameWinningGoal?: boolean
    emptyNet?: boolean
    penaltySeverity?: string
    penaltyMinutes?: number
  }
  
  export interface Strength {
    code: string
    name: string
  }
  
  export interface About {
    eventIdx: number
    eventId: number
    period: number
    periodType: string
    ordinalNum: string
    periodTime: string
    periodTimeRemaining: string
    dateTime: string
    goals: Goals
  }
  
  export interface Goals {
    away: number
    home: number
  }
  
  export interface Coordinates {
    x?: number
    y?: number
  }
  
  export interface Player {
    player: Player2
    playerType: string
    seasonTotal?: number
  }
  
  export interface Player2 {
    id: number
    fullName: string
    link: string
  }
  
  export interface Team {
    id: number
    name: string
    link: string
    triCode: string
  }
  
  export interface PlaysByPeriod {
    startIndex: number
    plays: number[]
    endIndex: number
  }
  
  export interface CurrentPlay {
    result: Result2
    about: About2
    coordinates: Coordinates2
  }
  
  export interface Result2 {
    event: string
    eventCode: string
    eventTypeId: string
    description: string
  }
  
  export interface About2 {
    eventIdx: number
    eventId: number
    period: number
    periodType: string
    ordinalNum: string
    periodTime: string
    periodTimeRemaining: string
    dateTime: string
    goals: Goals2
  }
  
  export interface Goals2 {
    away: number
    home: number
  }
  
  export interface Coordinates2 {}
  
  export interface Linescore {
    currentPeriod: number
    currentPeriodOrdinal: string
    currentPeriodTimeRemaining: string
    periods: Period[]
    shootoutInfo: ShootoutInfo
    teams: Teams2
    powerPlayStrength: string
    hasShootout: boolean
    intermissionInfo: IntermissionInfo
    powerPlayInfo: PowerPlayInfo
  }
  
  export interface Period {
    periodType: string
    startTime: string
    endTime: string
    num: number
    ordinalNum: string
    home: Home2
    away: Away2
  }
  
  export interface Home2 {
    goals: number
    shotsOnGoal: number
    rinkSide: string
  }
  
  export interface Away2 {
    goals: number
    shotsOnGoal: number
    rinkSide: string
  }
  
  export interface ShootoutInfo {
    away: Away3
    home: Home3
  }
  
  export interface Away3 {
    scores: number
    attempts: number
  }
  
  export interface Home3 {
    scores: number
    attempts: number
  }
  
  export interface Teams2 {
    home: Home4
    away: Away4
  }
  
  export interface Home4 {
    team: Team2
    goals: number
    shotsOnGoal: number
    goaliePulled: boolean
    numSkaters: number
    powerPlay: boolean
  }
  
  export interface Team2 {
    id: number
    name: string
    link: string
    abbreviation: string
    triCode: string
  }
  
  export interface Away4 {
    team: Team3
    goals: number
    shotsOnGoal: number
    goaliePulled: boolean
    numSkaters: number
    powerPlay: boolean
  }
  
  export interface Team3 {
    id: number
    name: string
    link: string
    abbreviation: string
    triCode: string
  }
  
  export interface IntermissionInfo {
    intermissionTimeRemaining: number
    intermissionTimeElapsed: number
    inIntermission: boolean
  }
  
  export interface PowerPlayInfo {
    situationTimeRemaining: number
    situationTimeElapsed: number
    inSituation: boolean
  }
  
  export interface Boxscore {
    teams: Teams3
    officials: Official[]
  }
  
  export interface Teams3 {
    away: Away5
    home: Home5
  }
  
  export interface Away5 {
    team: Team4
    teamStats: TeamStats
    players: Players2
    goalies: number[]
    skaters: number[]
    onIce: number[]
    onIcePlus: OnIcePlu[]
    scratches: number[]
    penaltyBox: any[]
    coaches: Coach[]
  }
  
  export interface Team4 {
    id: number
    name: string
    link: string
    abbreviation: string
    triCode: string
  }
  
  export interface TeamStats {
    teamSkaterStats: TeamSkaterStats
  }
  
  export interface TeamSkaterStats {
    goals: number
    pim: number
    shots: number
    powerPlayPercentage: string
    powerPlayGoals: number
    powerPlayOpportunities: number
    faceOffWinPercentage: string
    blocked: number
    takeaways: number
    giveaways: number
    hits: number
  }
  
  export interface Players2 {
    ID8480070: Id84800702
    ID8476915: Id84769152
    ID8477503: Id84775032
    ID8473604: Id84736042
    ID8475797: Id84757972
    ID8475852: Id84758522
    ID8476931: Id84769312
    ID8471677: Id84716772
    ID8476278: Id84762782
    ID8474141: Id84741412
    ID8476960: Id84769602
    ID8474870: Id84748702
    ID8477495: Id84774952
    ID8478452: Id84784522
    ID8477450: Id84774502
    ID8476473: Id84764732
    ID8478043: Id84780432
    ID8479383: Id84793832
    ID8481147: Id84811472
    ID8480025: Id84800252
    ID8479390: Id84793902
    ID8480798: Id84807982
  }
  
  export interface Id84800702 {
    person: Person
    jerseyNumber: string
    position: Position
    stats: Stats
  }
  
  export interface Person {
    id: number
    fullName: string
    link: string
    shootsCatches: string
    rosterStatus: string
  }
  
  export interface Position {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Stats {}
  
  export interface Id84769152 {
    person: Person2
    jerseyNumber: string
    position: Position2
    stats: Stats2
  }
  
  export interface Person2 {
    id: number
    fullName: string
    link: string
    shootsCatches: string
    rosterStatus: string
  }
  
  export interface Position2 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Stats2 {
    skaterStats: SkaterStats
  }
  
  export interface SkaterStats {
    timeOnIce: string
    assists: number
    goals: number
    shots: number
    hits: number
    powerPlayGoals: number
    powerPlayAssists: number
    penaltyMinutes: number
    faceOffPct: number
    faceOffWins: number
    faceoffTaken: number
    takeaways: number
    giveaways: number
    shortHandedGoals: number
    shortHandedAssists: number
    blocked: number
    plusMinus: number
    evenTimeOnIce: string
    powerPlayTimeOnIce: string
    shortHandedTimeOnIce: string
  }
  
  export interface Id84775032 {
    person: Person3
    jerseyNumber: string
    position: Position3
    stats: Stats3
  }
  
  export interface Person3 {
    id: number
    fullName: string
    link: string
    shootsCatches: string
    rosterStatus: string
  }
  
  export interface Position3 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Stats3 {
    skaterStats: SkaterStats2
  }
  
  export interface SkaterStats2 {
    timeOnIce: string
    assists: number
    goals: number
    shots: number
    hits: number
    powerPlayGoals: number
    powerPlayAssists: number
    penaltyMinutes: number
    faceOffPct: number
    faceOffWins: number
    faceoffTaken: number
    takeaways: number
    giveaways: number
    shortHandedGoals: number
    shortHandedAssists: number
    blocked: number
    plusMinus: number
    evenTimeOnIce: string
    powerPlayTimeOnIce: string
    shortHandedTimeOnIce: string
  }
  
  export interface Id84736042 {
    person: Person4
    jerseyNumber: string
    position: Position4
    stats: Stats4
  }
  
  export interface Person4 {
    id: number
    fullName: string
    link: string
    shootsCatches: string
    rosterStatus: string
  }
  
  export interface Position4 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Stats4 {
    skaterStats: SkaterStats3
  }
  
  export interface SkaterStats3 {
    timeOnIce: string
    assists: number
    goals: number
    shots: number
    hits: number
    powerPlayGoals: number
    powerPlayAssists: number
    penaltyMinutes: number
    faceOffPct: number
    faceOffWins: number
    faceoffTaken: number
    takeaways: number
    giveaways: number
    shortHandedGoals: number
    shortHandedAssists: number
    blocked: number
    plusMinus: number
    evenTimeOnIce: string
    powerPlayTimeOnIce: string
    shortHandedTimeOnIce: string
  }
  
  export interface Id84757972 {
    person: Person5
    jerseyNumber: string
    position: Position5
    stats: Stats5
  }
  
  export interface Person5 {
    id: number
    fullName: string
    link: string
    shootsCatches: string
    rosterStatus: string
  }
  
  export interface Position5 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Stats5 {
    skaterStats: SkaterStats4
  }
  
  export interface SkaterStats4 {
    timeOnIce: string
    assists: number
    goals: number
    shots: number
    hits: number
    powerPlayGoals: number
    powerPlayAssists: number
    penaltyMinutes: number
    faceOffWins: number
    faceoffTaken: number
    takeaways: number
    giveaways: number
    shortHandedGoals: number
    shortHandedAssists: number
    blocked: number
    plusMinus: number
    evenTimeOnIce: string
    powerPlayTimeOnIce: string
    shortHandedTimeOnIce: string
  }
  
  export interface Id84758522 {
    person: Person6
    jerseyNumber: string
    position: Position6
    stats: Stats6
  }
  
  export interface Person6 {
    id: number
    fullName: string
    link: string
    shootsCatches: string
    rosterStatus: string
  }
  
  export interface Position6 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Stats6 {
    goalieStats: GoalieStats
  }
  
  export interface GoalieStats {
    timeOnIce: string
    assists: number
    goals: number
    pim: number
    shots: number
    saves: number
    powerPlaySaves: number
    shortHandedSaves: number
    evenSaves: number
    shortHandedShotsAgainst: number
    evenShotsAgainst: number
    powerPlayShotsAgainst: number
    decision: string
    savePercentage: number
    powerPlaySavePercentage: number
    shortHandedSavePercentage: number
    evenStrengthSavePercentage: number
  }
  
  export interface Id84769312 {
    person: Person7
    jerseyNumber: string
    position: Position7
    stats: Stats7
  }
  
  export interface Person7 {
    id: number
    fullName: string
    link: string
    shootsCatches: string
    rosterStatus: string
  }
  
  export interface Position7 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Stats7 {
    skaterStats: SkaterStats5
  }
  
  export interface SkaterStats5 {
    timeOnIce: string
    assists: number
    goals: number
    shots: number
    hits: number
    powerPlayGoals: number
    powerPlayAssists: number
    penaltyMinutes: number
    faceOffWins: number
    faceoffTaken: number
    takeaways: number
    giveaways: number
    shortHandedGoals: number
    shortHandedAssists: number
    blocked: number
    plusMinus: number
    evenTimeOnIce: string
    powerPlayTimeOnIce: string
    shortHandedTimeOnIce: string
  }
  
  export interface Id84716772 {
    person: Person8
    jerseyNumber: string
    position: Position8
    stats: Stats8
  }
  
  export interface Person8 {
    id: number
    fullName: string
    link: string
    shootsCatches: string
    rosterStatus: string
  }
  
  export interface Position8 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Stats8 {
    skaterStats: SkaterStats6
  }
  
  export interface SkaterStats6 {
    timeOnIce: string
    assists: number
    goals: number
    shots: number
    hits: number
    powerPlayGoals: number
    powerPlayAssists: number
    penaltyMinutes: number
    faceOffWins: number
    faceoffTaken: number
    takeaways: number
    giveaways: number
    shortHandedGoals: number
    shortHandedAssists: number
    blocked: number
    plusMinus: number
    evenTimeOnIce: string
    powerPlayTimeOnIce: string
    shortHandedTimeOnIce: string
  }
  
  export interface Id84762782 {
    person: Person9
    jerseyNumber: string
    position: Position9
    stats: Stats9
  }
  
  export interface Person9 {
    id: number
    fullName: string
    link: string
    shootsCatches: string
    rosterStatus: string
  }
  
  export interface Position9 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Stats9 {
    skaterStats: SkaterStats7
  }
  
  export interface SkaterStats7 {
    timeOnIce: string
    assists: number
    goals: number
    shots: number
    hits: number
    powerPlayGoals: number
    powerPlayAssists: number
    penaltyMinutes: number
    faceOffPct: number
    faceOffWins: number
    faceoffTaken: number
    takeaways: number
    giveaways: number
    shortHandedGoals: number
    shortHandedAssists: number
    blocked: number
    plusMinus: number
    evenTimeOnIce: string
    powerPlayTimeOnIce: string
    shortHandedTimeOnIce: string
  }
  
  export interface Id84741412 {
    person: Person10
    jerseyNumber: string
    position: Position10
    stats: Stats10
  }
  
  export interface Person10 {
    id: number
    fullName: string
    link: string
    shootsCatches: string
    rosterStatus: string
  }
  
  export interface Position10 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Stats10 {
    skaterStats: SkaterStats8
  }
  
  export interface SkaterStats8 {
    timeOnIce: string
    assists: number
    goals: number
    shots: number
    hits: number
    powerPlayGoals: number
    powerPlayAssists: number
    penaltyMinutes: number
    faceOffWins: number
    faceoffTaken: number
    takeaways: number
    giveaways: number
    shortHandedGoals: number
    shortHandedAssists: number
    blocked: number
    plusMinus: number
    evenTimeOnIce: string
    powerPlayTimeOnIce: string
    shortHandedTimeOnIce: string
  }
  
  export interface Id84769602 {
    person: Person11
    jerseyNumber: string
    position: Position11
    stats: Stats11
  }
  
  export interface Person11 {
    id: number
    fullName: string
    link: string
    shootsCatches: string
    rosterStatus: string
  }
  
  export interface Position11 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Stats11 {
    skaterStats: SkaterStats9
  }
  
  export interface SkaterStats9 {
    timeOnIce: string
    assists: number
    goals: number
    shots: number
    hits: number
    powerPlayGoals: number
    powerPlayAssists: number
    penaltyMinutes: number
    faceOffWins: number
    faceoffTaken: number
    takeaways: number
    giveaways: number
    shortHandedGoals: number
    shortHandedAssists: number
    blocked: number
    plusMinus: number
    evenTimeOnIce: string
    powerPlayTimeOnIce: string
    shortHandedTimeOnIce: string
  }
  
  export interface Id84748702 {
    person: Person12
    jerseyNumber: string
    position: Position12
    stats: Stats12
  }
  
  export interface Person12 {
    id: number
    fullName: string
    link: string
    shootsCatches: string
    rosterStatus: string
  }
  
  export interface Position12 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Stats12 {}
  
  export interface Id84774952 {
    person: Person13
    jerseyNumber: string
    position: Position13
    stats: Stats13
  }
  
  export interface Person13 {
    id: number
    fullName: string
    link: string
    shootsCatches: string
    rosterStatus: string
  }
  
  export interface Position13 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Stats13 {
    skaterStats: SkaterStats10
  }
  
  export interface SkaterStats10 {
    timeOnIce: string
    assists: number
    goals: number
    shots: number
    hits: number
    powerPlayGoals: number
    powerPlayAssists: number
    penaltyMinutes: number
    faceOffWins: number
    faceoffTaken: number
    takeaways: number
    giveaways: number
    shortHandedGoals: number
    shortHandedAssists: number
    blocked: number
    plusMinus: number
    evenTimeOnIce: string
    powerPlayTimeOnIce: string
    shortHandedTimeOnIce: string
  }
  
  export interface Id84784522 {
    person: Person14
    jerseyNumber: string
    position: Position14
    stats: Stats14
  }
  
  export interface Person14 {
    id: number
    fullName: string
    link: string
    shootsCatches: string
    rosterStatus: string
  }
  
  export interface Position14 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Stats14 {
    skaterStats: SkaterStats11
  }
  
  export interface SkaterStats11 {
    timeOnIce: string
    assists: number
    goals: number
    shots: number
    hits: number
    powerPlayGoals: number
    powerPlayAssists: number
    penaltyMinutes: number
    faceOffWins: number
    faceoffTaken: number
    takeaways: number
    giveaways: number
    shortHandedGoals: number
    shortHandedAssists: number
    blocked: number
    plusMinus: number
    evenTimeOnIce: string
    powerPlayTimeOnIce: string
    shortHandedTimeOnIce: string
  }
  
  export interface Id84774502 {
    person: Person15
    jerseyNumber: string
    position: Position15
    stats: Stats15
  }
  
  export interface Person15 {
    id: number
    fullName: string
    link: string
    shootsCatches: string
    rosterStatus: string
  }
  
  export interface Position15 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Stats15 {
    skaterStats: SkaterStats12
  }
  
  export interface SkaterStats12 {
    timeOnIce: string
    assists: number
    goals: number
    shots: number
    hits: number
    powerPlayGoals: number
    powerPlayAssists: number
    penaltyMinutes: number
    faceOffPct: number
    faceOffWins: number
    faceoffTaken: number
    takeaways: number
    giveaways: number
    shortHandedGoals: number
    shortHandedAssists: number
    blocked: number
    plusMinus: number
    evenTimeOnIce: string
    powerPlayTimeOnIce: string
    shortHandedTimeOnIce: string
  }
  
  export interface Id84764732 {
    person: Person16
    jerseyNumber: string
    position: Position16
    stats: Stats16
  }
  
  export interface Person16 {
    id: number
    fullName: string
    link: string
    shootsCatches: string
    rosterStatus: string
  }
  
  export interface Position16 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Stats16 {
    skaterStats: SkaterStats13
  }
  
  export interface SkaterStats13 {
    timeOnIce: string
    assists: number
    goals: number
    shots: number
    hits: number
    powerPlayGoals: number
    powerPlayAssists: number
    penaltyMinutes: number
    faceOffWins: number
    faceoffTaken: number
    takeaways: number
    giveaways: number
    shortHandedGoals: number
    shortHandedAssists: number
    blocked: number
    plusMinus: number
    evenTimeOnIce: string
    powerPlayTimeOnIce: string
    shortHandedTimeOnIce: string
  }
  
  export interface Id84780432 {
    person: Person17
    jerseyNumber: string
    position: Position17
    stats: Stats17
  }
  
  export interface Person17 {
    id: number
    fullName: string
    link: string
    shootsCatches: string
    rosterStatus: string
  }
  
  export interface Position17 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Stats17 {
    skaterStats: SkaterStats14
  }
  
  export interface SkaterStats14 {
    timeOnIce: string
    assists: number
    goals: number
    shots: number
    hits: number
    powerPlayGoals: number
    powerPlayAssists: number
    penaltyMinutes: number
    faceOffPct: number
    faceOffWins: number
    faceoffTaken: number
    takeaways: number
    giveaways: number
    shortHandedGoals: number
    shortHandedAssists: number
    blocked: number
    plusMinus: number
    evenTimeOnIce: string
    powerPlayTimeOnIce: string
    shortHandedTimeOnIce: string
  }
  
  export interface Id84793832 {
    person: Person18
    jerseyNumber: string
    position: Position18
    stats: Stats18
  }
  
  export interface Person18 {
    id: number
    fullName: string
    link: string
    shootsCatches: string
    rosterStatus: string
  }
  
  export interface Position18 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Stats18 {}
  
  export interface Id84811472 {
    person: Person19
    jerseyNumber: string
    position: Position19
    stats: Stats19
  }
  
  export interface Person19 {
    id: number
    fullName: string
    link: string
    shootsCatches: string
    rosterStatus: string
  }
  
  export interface Position19 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Stats19 {
    skaterStats: SkaterStats15
  }
  
  export interface SkaterStats15 {
    timeOnIce: string
    assists: number
    goals: number
    shots: number
    hits: number
    powerPlayGoals: number
    powerPlayAssists: number
    penaltyMinutes: number
    faceOffWins: number
    faceoffTaken: number
    takeaways: number
    giveaways: number
    shortHandedGoals: number
    shortHandedAssists: number
    blocked: number
    plusMinus: number
    evenTimeOnIce: string
    powerPlayTimeOnIce: string
    shortHandedTimeOnIce: string
  }
  
  export interface Id84800252 {
    person: Person20
    jerseyNumber: string
    position: Position20
    stats: Stats20
  }
  
  export interface Person20 {
    id: number
    fullName: string
    link: string
    shootsCatches: string
    rosterStatus: string
  }
  
  export interface Position20 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Stats20 {
    skaterStats: SkaterStats16
  }
  
  export interface SkaterStats16 {
    timeOnIce: string
    assists: number
    goals: number
    shots: number
    hits: number
    powerPlayGoals: number
    powerPlayAssists: number
    penaltyMinutes: number
    faceOffPct: number
    faceOffWins: number
    faceoffTaken: number
    takeaways: number
    giveaways: number
    shortHandedGoals: number
    shortHandedAssists: number
    blocked: number
    plusMinus: number
    evenTimeOnIce: string
    powerPlayTimeOnIce: string
    shortHandedTimeOnIce: string
  }
  
  export interface Id84793902 {
    person: Person21
    jerseyNumber: string
    position: Position21
    stats: Stats21
  }
  
  export interface Person21 {
    id: number
    fullName: string
    link: string
    shootsCatches: string
    rosterStatus: string
  }
  
  export interface Position21 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Stats21 {
    skaterStats: SkaterStats17
  }
  
  export interface SkaterStats17 {
    timeOnIce: string
    assists: number
    goals: number
    shots: number
    hits: number
    powerPlayGoals: number
    powerPlayAssists: number
    penaltyMinutes: number
    faceOffWins: number
    faceoffTaken: number
    takeaways: number
    giveaways: number
    shortHandedGoals: number
    shortHandedAssists: number
    blocked: number
    plusMinus: number
    evenTimeOnIce: string
    powerPlayTimeOnIce: string
    shortHandedTimeOnIce: string
  }
  
  export interface Id84807982 {
    person: Person22
    jerseyNumber: string
    position: Position22
    stats: Stats22
  }
  
  export interface Person22 {
    id: number
    fullName: string
    link: string
    shootsCatches: string
    rosterStatus: string
  }
  
  export interface Position22 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Stats22 {
    skaterStats: SkaterStats18
  }
  
  export interface SkaterStats18 {
    timeOnIce: string
    assists: number
    goals: number
    shots: number
    hits: number
    powerPlayGoals: number
    powerPlayAssists: number
    penaltyMinutes: number
    faceOffPct: number
    faceOffWins: number
    faceoffTaken: number
    takeaways: number
    giveaways: number
    shortHandedGoals: number
    shortHandedAssists: number
    blocked: number
    plusMinus: number
    evenTimeOnIce: string
    powerPlayTimeOnIce: string
    shortHandedTimeOnIce: string
  }
  
  export interface OnIcePlu {
    playerId: number
    shiftDuration: number
    stamina: number
  }
  
  export interface Coach {
    person: Person23
    position: Position23
  }
  
  export interface Person23 {
    fullName: string
    link: string
  }
  
  export interface Position23 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Home5 {
    team: Team5
    teamStats: TeamStats2
    players: Players3
    goalies: number[]
    skaters: number[]
    onIce: number[]
    onIcePlus: OnIcePlu2[]
    scratches: number[]
    penaltyBox: any[]
    coaches: Coach2[]
  }
  
  export interface Team5 {
    id: number
    name: string
    link: string
    abbreviation: string
    triCode: string
  }
  
  export interface TeamStats2 {
    teamSkaterStats: TeamSkaterStats2
  }
  
  export interface TeamSkaterStats2 {
    goals: number
    pim: number
    shots: number
    powerPlayPercentage: string
    powerPlayGoals: number
    powerPlayOpportunities: number
    faceOffWinPercentage: string
    blocked: number
    takeaways: number
    giveaways: number
    hits: number
  }
  
  export interface Players3 {
    ID8474716: Id84747162
    ID8471817: Id84718172
    ID8477919: Id84779192
    ID8470594: Id84705942
    ID8476856: Id84768562
    ID8475750: Id84757502
    ID8478136: Id84781362
    ID8478413: Id84784132
    ID8478864: Id84788642
    ID8471274: Id84712742
    ID8479972: Id84799722
    ID8475692: Id84756922
    ID8475220: Id84752202
    ID8476463: Id84764632
    ID8479351: Id84793512
    ID8480980: Id84809802
    ID8478493: Id84784932
    ID8480267: Id84802672
    ID8480884: Id84808842
    ID8481557: Id84815572
  }
  
  export interface Id84747162 {
    person: Person24
    jerseyNumber: string
    position: Position24
    stats: Stats23
  }
  
  export interface Person24 {
    id: number
    fullName: string
    link: string
    shootsCatches: string
    rosterStatus: string
  }
  
  export interface Position24 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Stats23 {
    skaterStats: SkaterStats19
  }
  
  export interface SkaterStats19 {
    timeOnIce: string
    assists: number
    goals: number
    shots: number
    hits: number
    powerPlayGoals: number
    powerPlayAssists: number
    penaltyMinutes: number
    faceOffWins: number
    faceoffTaken: number
    takeaways: number
    giveaways: number
    shortHandedGoals: number
    shortHandedAssists: number
    blocked: number
    plusMinus: number
    evenTimeOnIce: string
    powerPlayTimeOnIce: string
    shortHandedTimeOnIce: string
  }
  
  export interface Id84718172 {
    person: Person25
    jerseyNumber: string
    position: Position25
    stats: Stats24
  }
  
  export interface Person25 {
    id: number
    fullName: string
    link: string
    shootsCatches: string
    rosterStatus: string
  }
  
  export interface Position25 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Stats24 {
    skaterStats: SkaterStats20
  }
  
  export interface SkaterStats20 {
    timeOnIce: string
    assists: number
    goals: number
    shots: number
    hits: number
    powerPlayGoals: number
    powerPlayAssists: number
    penaltyMinutes: number
    faceOffWins: number
    faceoffTaken: number
    takeaways: number
    giveaways: number
    shortHandedGoals: number
    shortHandedAssists: number
    blocked: number
    plusMinus: number
    evenTimeOnIce: string
    powerPlayTimeOnIce: string
    shortHandedTimeOnIce: string
  }
  
  export interface Id84779192 {
    person: Person26
    jerseyNumber: string
    position: Position26
    stats: Stats25
  }
  
  export interface Person26 {
    id: number
    fullName: string
    link: string
    shootsCatches: string
    rosterStatus: string
  }
  
  export interface Position26 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Stats25 {
    skaterStats: SkaterStats21
  }
  
  export interface SkaterStats21 {
    timeOnIce: string
    assists: number
    goals: number
    shots: number
    hits: number
    powerPlayGoals: number
    powerPlayAssists: number
    penaltyMinutes: number
    faceOffPct: number
    faceOffWins: number
    faceoffTaken: number
    takeaways: number
    giveaways: number
    shortHandedGoals: number
    shortHandedAssists: number
    blocked: number
    plusMinus: number
    evenTimeOnIce: string
    powerPlayTimeOnIce: string
    shortHandedTimeOnIce: string
  }
  
  export interface Id84705942 {
    person: Person27
    jerseyNumber: string
    position: Position27
    stats: Stats26
  }
  
  export interface Person27 {
    id: number
    fullName: string
    link: string
    shootsCatches: string
    rosterStatus: string
  }
  
  export interface Position27 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Stats26 {
    goalieStats: GoalieStats2
  }
  
  export interface GoalieStats2 {
    timeOnIce: string
    assists: number
    goals: number
    pim: number
    shots: number
    saves: number
    powerPlaySaves: number
    shortHandedSaves: number
    evenSaves: number
    shortHandedShotsAgainst: number
    evenShotsAgainst: number
    powerPlayShotsAgainst: number
    decision: string
    savePercentage: number
    powerPlaySavePercentage: number
    evenStrengthSavePercentage: number
  }
  
  export interface Id84768562 {
    person: Person28
    jerseyNumber: string
    position: Position28
    stats: Stats27
  }
  
  export interface Person28 {
    id: number
    fullName: string
    link: string
    shootsCatches: string
    rosterStatus: string
  }
  
  export interface Position28 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Stats27 {
    skaterStats: SkaterStats22
  }
  
  export interface SkaterStats22 {
    timeOnIce: string
    assists: number
    goals: number
    shots: number
    hits: number
    powerPlayGoals: number
    powerPlayAssists: number
    penaltyMinutes: number
    faceOffWins: number
    faceoffTaken: number
    takeaways: number
    giveaways: number
    shortHandedGoals: number
    shortHandedAssists: number
    blocked: number
    plusMinus: number
    evenTimeOnIce: string
    powerPlayTimeOnIce: string
    shortHandedTimeOnIce: string
  }
  
  export interface Id84757502 {
    person: Person29
    jerseyNumber: string
    position: Position29
    stats: Stats28
  }
  
  export interface Person29 {
    id: number
    fullName: string
    link: string
    shootsCatches: string
    rosterStatus: string
  }
  
  export interface Position29 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Stats28 {
    skaterStats: SkaterStats23
  }
  
  export interface SkaterStats23 {
    timeOnIce: string
    assists: number
    goals: number
    shots: number
    hits: number
    powerPlayGoals: number
    powerPlayAssists: number
    penaltyMinutes: number
    faceOffWins: number
    faceoffTaken: number
    takeaways: number
    giveaways: number
    shortHandedGoals: number
    shortHandedAssists: number
    blocked: number
    plusMinus: number
    evenTimeOnIce: string
    powerPlayTimeOnIce: string
    shortHandedTimeOnIce: string
  }
  
  export interface Id84781362 {
    person: Person30
    jerseyNumber: string
    position: Position30
    stats: Stats29
  }
  
  export interface Person30 {
    id: number
    fullName: string
    link: string
    shootsCatches: string
    rosterStatus: string
  }
  
  export interface Position30 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Stats29 {
    skaterStats: SkaterStats24
  }
  
  export interface SkaterStats24 {
    timeOnIce: string
    assists: number
    goals: number
    shots: number
    hits: number
    powerPlayGoals: number
    powerPlayAssists: number
    penaltyMinutes: number
    faceOffWins: number
    faceoffTaken: number
    takeaways: number
    giveaways: number
    shortHandedGoals: number
    shortHandedAssists: number
    blocked: number
    plusMinus: number
    evenTimeOnIce: string
    powerPlayTimeOnIce: string
    shortHandedTimeOnIce: string
  }
  
  export interface Id84784132 {
    person: Person31
    jerseyNumber: string
    position: Position31
    stats: Stats30
  }
  
  export interface Person31 {
    id: number
    fullName: string
    link: string
    shootsCatches: string
    rosterStatus: string
  }
  
  export interface Position31 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Stats30 {
    skaterStats: SkaterStats25
  }
  
  export interface SkaterStats25 {
    timeOnIce: string
    assists: number
    goals: number
    shots: number
    hits: number
    powerPlayGoals: number
    powerPlayAssists: number
    penaltyMinutes: number
    faceOffWins: number
    faceoffTaken: number
    takeaways: number
    giveaways: number
    shortHandedGoals: number
    shortHandedAssists: number
    blocked: number
    plusMinus: number
    evenTimeOnIce: string
    powerPlayTimeOnIce: string
    shortHandedTimeOnIce: string
  }
  
  export interface Id84788642 {
    person: Person32
    jerseyNumber: string
    position: Position32
    stats: Stats31
  }
  
  export interface Person32 {
    id: number
    fullName: string
    link: string
    shootsCatches: string
    rosterStatus: string
  }
  
  export interface Position32 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Stats31 {
    skaterStats: SkaterStats26
  }
  
  export interface SkaterStats26 {
    timeOnIce: string
    assists: number
    goals: number
    shots: number
    hits: number
    powerPlayGoals: number
    powerPlayAssists: number
    penaltyMinutes: number
    faceOffWins: number
    faceoffTaken: number
    takeaways: number
    giveaways: number
    shortHandedGoals: number
    shortHandedAssists: number
    blocked: number
    plusMinus: number
    evenTimeOnIce: string
    powerPlayTimeOnIce: string
    shortHandedTimeOnIce: string
  }
  
  export interface Id84712742 {
    person: Person33
    jerseyNumber: string
    position: Position33
    stats: Stats32
  }
  
  export interface Person33 {
    id: number
    fullName: string
    link: string
    shootsCatches: string
    rosterStatus: string
  }
  
  export interface Position33 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Stats32 {}
  
  export interface Id84799722 {
    person: Person34
    jerseyNumber: string
    position: Position34
    stats: Stats33
  }
  
  export interface Person34 {
    id: number
    fullName: string
    link: string
    shootsCatches: string
    rosterStatus: string
  }
  
  export interface Position34 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Stats33 {
    skaterStats: SkaterStats27
  }
  
  export interface SkaterStats27 {
    timeOnIce: string
    assists: number
    goals: number
    shots: number
    hits: number
    powerPlayGoals: number
    powerPlayAssists: number
    penaltyMinutes: number
    faceOffPct: number
    faceOffWins: number
    faceoffTaken: number
    takeaways: number
    giveaways: number
    shortHandedGoals: number
    shortHandedAssists: number
    blocked: number
    plusMinus: number
    evenTimeOnIce: string
    powerPlayTimeOnIce: string
    shortHandedTimeOnIce: string
  }
  
  export interface Id84756922 {
    person: Person35
    jerseyNumber: string
    position: Position35
    stats: Stats34
  }
  
  export interface Person35 {
    id: number
    fullName: string
    link: string
    shootsCatches: string
    rosterStatus: string
  }
  
  export interface Position35 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Stats34 {
    skaterStats: SkaterStats28
  }
  
  export interface SkaterStats28 {
    timeOnIce: string
    assists: number
    goals: number
    shots: number
    hits: number
    powerPlayGoals: number
    powerPlayAssists: number
    penaltyMinutes: number
    faceOffPct: number
    faceOffWins: number
    faceoffTaken: number
    takeaways: number
    giveaways: number
    shortHandedGoals: number
    shortHandedAssists: number
    blocked: number
    plusMinus: number
    evenTimeOnIce: string
    powerPlayTimeOnIce: string
    shortHandedTimeOnIce: string
  }
  
  export interface Id84752202 {
    person: Person36
    jerseyNumber: string
    position: Position36
    stats: Stats35
  }
  
  export interface Person36 {
    id: number
    fullName: string
    link: string
    shootsCatches: string
    rosterStatus: string
  }
  
  export interface Position36 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Stats35 {
    skaterStats: SkaterStats29
  }
  
  export interface SkaterStats29 {
    timeOnIce: string
    assists: number
    goals: number
    shots: number
    hits: number
    powerPlayGoals: number
    powerPlayAssists: number
    penaltyMinutes: number
    faceOffWins: number
    faceoffTaken: number
    takeaways: number
    giveaways: number
    shortHandedGoals: number
    shortHandedAssists: number
    blocked: number
    plusMinus: number
    evenTimeOnIce: string
    powerPlayTimeOnIce: string
    shortHandedTimeOnIce: string
  }
  
  export interface Id84764632 {
    person: Person37
    jerseyNumber: string
    position: Position37
    stats: Stats36
  }
  
  export interface Person37 {
    id: number
    fullName: string
    link: string
    shootsCatches: string
    rosterStatus: string
  }
  
  export interface Position37 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Stats36 {
    skaterStats: SkaterStats30
  }
  
  export interface SkaterStats30 {
    timeOnIce: string
    assists: number
    goals: number
    shots: number
    hits: number
    powerPlayGoals: number
    powerPlayAssists: number
    penaltyMinutes: number
    faceOffWins: number
    faceoffTaken: number
    takeaways: number
    giveaways: number
    shortHandedGoals: number
    shortHandedAssists: number
    blocked: number
    plusMinus: number
    evenTimeOnIce: string
    powerPlayTimeOnIce: string
    shortHandedTimeOnIce: string
  }
  
  export interface Id84793512 {
    person: Person38
    jerseyNumber: string
    position: Position38
    stats: Stats37
  }
  
  export interface Person38 {
    id: number
    fullName: string
    link: string
    shootsCatches: string
    rosterStatus: string
  }
  
  export interface Position38 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Stats37 {
    skaterStats: SkaterStats31
  }
  
  export interface SkaterStats31 {
    timeOnIce: string
    assists: number
    goals: number
    shots: number
    hits: number
    powerPlayGoals: number
    powerPlayAssists: number
    penaltyMinutes: number
    faceOffPct: number
    faceOffWins: number
    faceoffTaken: number
    takeaways: number
    giveaways: number
    shortHandedGoals: number
    shortHandedAssists: number
    blocked: number
    plusMinus: number
    evenTimeOnIce: string
    powerPlayTimeOnIce: string
    shortHandedTimeOnIce: string
  }
  
  export interface Id84809802 {
    person: Person39
    jerseyNumber: string
    position: Position39
    stats: Stats38
  }
  
  export interface Person39 {
    id: number
    fullName: string
    link: string
    shootsCatches: string
    rosterStatus: string
  }
  
  export interface Position39 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Stats38 {
    skaterStats: SkaterStats32
  }
  
  export interface SkaterStats32 {
    timeOnIce: string
    assists: number
    goals: number
    shots: number
    hits: number
    powerPlayGoals: number
    powerPlayAssists: number
    penaltyMinutes: number
    faceOffPct: number
    faceOffWins: number
    faceoffTaken: number
    takeaways: number
    giveaways: number
    shortHandedGoals: number
    shortHandedAssists: number
    blocked: number
    plusMinus: number
    evenTimeOnIce: string
    powerPlayTimeOnIce: string
    shortHandedTimeOnIce: string
  }
  
  export interface Id84784932 {
    person: Person40
    jerseyNumber: string
    position: Position40
    stats: Stats39
  }
  
  export interface Person40 {
    id: number
    fullName: string
    link: string
    shootsCatches: string
    rosterStatus: string
  }
  
  export interface Position40 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Stats39 {
    skaterStats: SkaterStats33
  }
  
  export interface SkaterStats33 {
    timeOnIce: string
    assists: number
    goals: number
    shots: number
    hits: number
    powerPlayGoals: number
    powerPlayAssists: number
    penaltyMinutes: number
    faceOffPct: number
    faceOffWins: number
    faceoffTaken: number
    takeaways: number
    giveaways: number
    shortHandedGoals: number
    shortHandedAssists: number
    blocked: number
    plusMinus: number
    evenTimeOnIce: string
    powerPlayTimeOnIce: string
    shortHandedTimeOnIce: string
  }
  
  export interface Id84802672 {
    person: Person41
    jerseyNumber: string
    position: Position41
    stats: Stats40
  }
  
  export interface Person41 {
    id: number
    fullName: string
    link: string
    shootsCatches: string
    rosterStatus: string
  }
  
  export interface Position41 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Stats40 {
    skaterStats: SkaterStats34
  }
  
  export interface SkaterStats34 {
    timeOnIce: string
    assists: number
    goals: number
    shots: number
    hits: number
    powerPlayGoals: number
    powerPlayAssists: number
    penaltyMinutes: number
    faceOffWins: number
    faceoffTaken: number
    takeaways: number
    giveaways: number
    shortHandedGoals: number
    shortHandedAssists: number
    blocked: number
    plusMinus: number
    evenTimeOnIce: string
    powerPlayTimeOnIce: string
    shortHandedTimeOnIce: string
  }
  
  export interface Id84808842 {
    person: Person42
    jerseyNumber: string
    position: Position42
    stats: Stats41
  }
  
  export interface Person42 {
    id: number
    fullName: string
    link: string
    shootsCatches: string
    rosterStatus: string
  }
  
  export interface Position42 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Stats41 {
    skaterStats: SkaterStats35
  }
  
  export interface SkaterStats35 {
    timeOnIce: string
    assists: number
    goals: number
    shots: number
    hits: number
    powerPlayGoals: number
    powerPlayAssists: number
    penaltyMinutes: number
    faceOffWins: number
    faceoffTaken: number
    takeaways: number
    giveaways: number
    shortHandedGoals: number
    shortHandedAssists: number
    blocked: number
    plusMinus: number
    evenTimeOnIce: string
    powerPlayTimeOnIce: string
    shortHandedTimeOnIce: string
  }
  
  export interface Id84815572 {
    person: Person43
    jerseyNumber: string
    position: Position43
    stats: Stats42
  }
  
  export interface Person43 {
    id: number
    fullName: string
    link: string
    shootsCatches: string
    rosterStatus: string
  }
  
  export interface Position43 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Stats42 {
    skaterStats: SkaterStats36
  }
  
  export interface SkaterStats36 {
    timeOnIce: string
    assists: number
    goals: number
    shots: number
    hits: number
    powerPlayGoals: number
    powerPlayAssists: number
    penaltyMinutes: number
    faceOffPct: number
    faceOffWins: number
    faceoffTaken: number
    takeaways: number
    giveaways: number
    shortHandedGoals: number
    shortHandedAssists: number
    blocked: number
    plusMinus: number
    evenTimeOnIce: string
    powerPlayTimeOnIce: string
    shortHandedTimeOnIce: string
  }
  
  export interface OnIcePlu2 {
    playerId: number
    shiftDuration: number
    stamina: number
  }
  
  export interface Coach2 {
    person: Person44
    position: Position44
  }
  
  export interface Person44 {
    fullName: string
    link: string
  }
  
  export interface Position44 {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  
  export interface Official {
    official: Official2
    officialType: string
  }
  
  export interface Official2 {
    id: number
    fullName: string
    link: string
  }
  
  export interface Decisions {
    winner: Winner
    loser: Loser
    firstStar: FirstStar
    secondStar: SecondStar
    thirdStar: ThirdStar
  }
  
  export interface Winner {
    id: number
    fullName: string
    link: string
  }
  
  export interface Loser {
    id: number
    fullName: string
    link: string
  }
  
  export interface FirstStar {
    id: number
    fullName: string
    link: string
  }
  
  export interface SecondStar {
    id: number
    fullName: string
    link: string
  }
  
  export interface ThirdStar {
    id: number
    fullName: string
    link: string
  }
  