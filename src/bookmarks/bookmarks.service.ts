import { Injectable, NotFoundException } from '@nestjs/common';
import { Bookmark } from './bookmarks.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { ObjectId } from 'mongodb';
import { UpdateBookmarkDto } from './dto/update-bookmark-dto';

@Injectable()
export class BookmarksService {
  constructor(
    @InjectRepository(Bookmark)
    private readonly bookmarkRepo: MongoRepository<Bookmark>,
  ) {}

  async getAll(): Promise<Bookmark[]> {
    return await this.bookmarkRepo.find();
  }

  // to git rid of redundancy
  private async findBookmarkOrFail(id: string): Promise<Bookmark> {
    // the given id in the param is string so must be converted here to work
    const objectId = new ObjectId(id);
    const bookmark = await this.bookmarkRepo.findOneBy({ _id: objectId });
    if (!bookmark) {
      throw new NotFoundException(`Bookmark with id ${id} not found`);
    }
    return bookmark;
  }

  async getBookmarkById(id: string): Promise<Bookmark> {
    return this.findBookmarkOrFail(id);
  }

  async deleteBookmarkById(id: string) {
    const bookmark = await this.findBookmarkOrFail(id);
    await this.bookmarkRepo.delete(bookmark._id);
    return bookmark;
  }

  async updateBookmarkById(
    id: string,
    updateDto: UpdateBookmarkDto,
  ): Promise<Bookmark> {
    const bookmark = await this.findBookmarkOrFail(id);

    const updated = { ...bookmark, ...updateDto };

    await this.bookmarkRepo.save(updated);

    return updated;
  }

  createBookmark(createBookmarkDto: CreateBookmarkDto): Promise<Bookmark> {
    const bookmark = this.bookmarkRepo.create({
      ...createBookmarkDto,
      createdAt: new Date(),
    });
    return this.bookmarkRepo.save(bookmark);
  }
}
