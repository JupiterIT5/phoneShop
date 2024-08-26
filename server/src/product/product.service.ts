import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service'

@Injectable()
export class ProductService {
    constructor (private prisma: PrismaService) {}

    getAll() {
        return this.prisma.product.findMany()
    }

    getAllDiscount() {
        return this.prisma.product.findMany({
            where: {
                discount: 50
            }
        })
    }
}
