import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BridgeService {
  constructor(private prisma: PrismaService) {}

  async createTracking(trackingId: string) {
    return await this.prisma.tracking.create({
      data: {
        trackingId,
        status: 'PROCESSING',
      },
    });
  }

  async getTrackingStatus(trackingId: string) {
    const tracking = await this.prisma.tracking.findUnique({
      where: {
        trackingId,
      },
    });

    if (!tracking) {
      throw new NotFoundException('Tracking not found');
    }

    return tracking;
  }

  async updateTrackingStatus(trackingId: string, data: string) {
    return await this.prisma.tracking.update({
      where: {
        trackingId,
      },
      data: {
        data,
        status: 'COMPLETED',
      },
    });
  }
}
