import { Article } from './article';

export class Response {
    articles: Article[];
    status: string;
    totalResults: number;
}
