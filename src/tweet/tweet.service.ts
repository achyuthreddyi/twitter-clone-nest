import { Injectable } from '@nestjs/common';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';
const tweetsList = [];
@Injectable()
export class TweetService {
 

  create(createTweetDto: CreateTweetDto) {
    tweetsList.push(createTweetDto)
    return 'This action adds a new tweet';
  }

  findAll() {
   return tweetsList;
  }

  findOne(id: number) {
    return `This action returns a #${id} tweet`;
  }

  update(id: number, updateTweetDto: UpdateTweetDto) {
    return `This action updates a #${id} tweet`;
  }

  remove(id: number) {
    return `This action removes a #${id} tweet`;
  }
}
