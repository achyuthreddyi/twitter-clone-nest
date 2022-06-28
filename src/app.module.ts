import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetModule } from './tweet/tweet.module';

@Module({
  imports: [TweetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
