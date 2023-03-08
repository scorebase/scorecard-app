export interface IMatch {
    id?: number,
    home_team: IClub,
    away_team: IClub,
    away_score: number,
    home_score: number,
    is_complete: number
    date_time: string
}
export interface IClub {
    short_name: string,
    logo: string,
    r
}