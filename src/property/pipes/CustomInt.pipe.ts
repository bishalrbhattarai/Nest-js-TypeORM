import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException, HttpException, HttpStatus } from '@nestjs/common';


@Injectable()
export class CustomIntPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): number {
        if(isNaN(value)){
            throw new HttpException('Validation failed', HttpStatus.BAD_REQUEST);
        }

        value = parseInt(value)
        return value

    }
}
