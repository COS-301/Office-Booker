import { Injectable } from '@nestjs/common';
import { PrismaService } from '@office-booker/api/shared/services/prisma/data-access';

@Injectable()
export class ApiDesksRepositoryDataAccessService {
    constructor(private prisma: PrismaService) {}

    // get all desks
    async getDesks() {
        return this.prisma.desk.findMany();
    }

    // get all desks in a room
    async getDesksInRoom(roomId: number) {
        return this.prisma.desk.findMany({
            where: {
                roomId: roomId,
            }, 
        });
    }
}
