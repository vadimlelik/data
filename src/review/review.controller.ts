import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { CreateReviewDto } from './create-review-dto';
import { ReviewService } from './review.service';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post('create')
  async create(@Body() dto: CreateReviewDto) {
    return this.reviewService.create(dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    console.log(id, '6581be0dab0567cccd34c6f0');

    const deletedDoc = await this.reviewService.delete(id);
    if (!deletedDoc) {
      throw new HttpException('Review not found', HttpStatus.NOT_FOUND);
    }
  }

  @Get('byProductId/:productId')
  async getByProductId(@Param('productId') productId: string) {
    return this.reviewService.findByProductId(productId);
  }
}
