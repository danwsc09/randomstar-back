export interface BaseMatch {
  playedOn: string;
  memo: string;
  summary: string;
  writtenBy: string;
  lastEditedBy: string;
  winner1Name: string;
  winner1Location: string;
  winner1Race: string;
  winner1AbilityId: number;
  winner2Name: string;
  winner2Location: string;
  winner2Race: string;
  winner2AbilityId: number;
  loser1Name: string;
  loser1Location: string;
  loser1Race: string;
  loser1AbilityId: number;
  loser2Name: string;
  loser2Location: string;
  loser2Race: string;
  loser2AbilityId: number;
}

export interface Match extends BaseMatch {
  id: number;
}
