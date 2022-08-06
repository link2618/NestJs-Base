import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

import { CreateCarDto, UpdateCarDto } from './dto'

@Controller('cars')
export class CarsController {

    constructor( private readonly carsService: CarsService) {}

    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById( @Param('id', new ParseUUIDPipe({ version: '4' })) id: string ) {
        return this.carsService.findOneById(id);
    }

    @Post()
    create(@Body() createCardDto: CreateCarDto) {
        return this.carsService.create( createCardDto );
    }

    @Patch(':id')
    update(@Body() updateCarDto: UpdateCarDto, @Param('id', ParseUUIDPipe) id: string) {
        return this.carsService.update( id, updateCarDto );
    }

    @Delete(':id')
    delete(@Param('id', ParseUUIDPipe) id: string) {
        return this.carsService.delete( id );
    }
    
}
