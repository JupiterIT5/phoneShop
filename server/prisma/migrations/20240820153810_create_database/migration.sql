-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "img" TEXT[] DEFAULT ARRAY['https://cdn-icons-png.flaticon.com/512/1178/1178479.png']::TEXT[],
    "price" DOUBLE PRECISION NOT NULL,
    "discount" INTEGER NOT NULL,
    "desc" TEXT NOT NULL,
    "details" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Parametr" (
    "id" SERIAL NOT NULL,
    "screenDiagonal" DOUBLE PRECISION NOT NULL,
    "screenResolution" TEXT NOT NULL,
    "screenRefresh" INTEGER NOT NULL,
    "pixelDensity" INTEGER NOT NULL,
    "screenType" TEXT NOT NULL,
    "additionally" TEXT[],
    "CPU" TEXT NOT NULL,
    "numberOfCores" INTEGER NOT NULL,
    "mainCamera" TEXT NOT NULL,
    "frontCamera" INTEGER NOT NULL,
    "battery" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "Parametr_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Parametr_productId_key" ON "Parametr"("productId");

-- AddForeignKey
ALTER TABLE "Parametr" ADD CONSTRAINT "Parametr_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
