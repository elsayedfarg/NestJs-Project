import { Module } from '@nestjs/common';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bookmark } from './bookmarks/bookmarks.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://SayedMohamed:E1iLNVOkQUHwlntk@thefirstcluster.wjb73br.mongodb.net/BookMark',
      synchronize: true,
      entities: [Bookmark],
    }),
    BookmarksModule,
  ],
})
export class AppModule {}
