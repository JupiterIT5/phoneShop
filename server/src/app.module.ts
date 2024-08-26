import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { PrismaService } from 'prisma/prisma.service'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { AppController } from './app.controller'

@Module({
  imports: [
    ProductModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql'
    })
  ],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
