import { Module } from '@nestjs/common';
import { PaypalService } from './paypal.service';
import { PaypalController } from './paypal.controller';
import { PrismaService } from 'src/prisma.service';
import { StellarService } from 'src/stellar/stellar.service';

@Module({
  controllers: [PaypalController],
  providers: [PaypalService, StellarService, PrismaService],
})
export class PaypalModule {}
