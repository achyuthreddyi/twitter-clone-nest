import { IsString, IsInt } from 'class-validator';

export class CreateTweetDto {
    @IsString()
    tweet: String

    @IsString()
    name: String

    @IsString()
    email: string
}

