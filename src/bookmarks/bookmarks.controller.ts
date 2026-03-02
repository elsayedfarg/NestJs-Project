import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BookmarksService } from './bookmarks.service';
import { Bookmark } from './bookmarks.entity';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { UpdateBookmarkDto } from './dto/update-bookmark-dto';

@Controller('bookmarks')
export class BookmarksController {
  constructor(private bookmarksService: BookmarksService) {}

  @Get()
  getAll(): Promise<Bookmark[]> {
    return this.bookmarksService.getAll();
  }

  @Get('/:id')
  getBookmarkById(@Param('id') id: string): Promise<Bookmark> {
    return this.bookmarksService.getBookmarkById(id);
  }

  @Delete('/:id')
  deleteBookmarkById(@Param('id') id: string): Promise<Bookmark> {
    return this.bookmarksService.deleteBookmarkById(id);
  }

  @Patch(':id')
  updateBookmarkById(
    @Param('id') id: string,
    @Body() updateDto: UpdateBookmarkDto,
  ): Promise<Bookmark> {
    return this.bookmarksService.updateBookmarkById(id, updateDto);
  }

  @Post()
  createBookmark(
    @Body() createBookmarkDto: CreateBookmarkDto,
  ): Promise<Bookmark> {
    return this.bookmarksService.createBookmark(createBookmarkDto);
  }
}
