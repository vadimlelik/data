import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { getMongoConfig } from './configs/mongo.config';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
import { TopPageModule } from './top-page/top-page.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypegooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoConfig,
    }),
    AuthModule,
    ProductModule,
    ReviewModule,
    TopPageModule,
  ],
})
export class AppModule {}
