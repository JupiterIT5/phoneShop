import { Field, Float, Int, ObjectType } from '@nestjs/graphql'


@ObjectType()
export class ProductDTO {
    @Field(type => Int)
    id: number

    @Field()
    name: string

    @Field({defaultValue: "https://cdn-icons-png.flaticon.com/512/1178/1178479.png"})
    img: string

    @Field({nullable: true})
    desc: string

    @Field(type => Float, {nullable: true, defaultValue: 0})
    price: number

    @Field()
    details: string
}