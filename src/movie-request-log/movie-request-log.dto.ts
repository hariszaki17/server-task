export class MovieRequestLogDto {
    requestTimestamp: Date;
    method: string;
    pathname: string;
    query: string;
  }