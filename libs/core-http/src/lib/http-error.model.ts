export interface HttpError {
  status: number;
  message: string;
  technicalMessage?: string;
}
