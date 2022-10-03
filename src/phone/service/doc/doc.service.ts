import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DocumentationType } from 'src/database/db-models/documentation-type.model';
import { Documentation } from 'src/database/db-models/documentation.entity';
import { DocumentationService } from 'src/database/service/documentation/documentation.service';
import { RoyalcasinologgerService } from 'src/logger/royalcasinologger/royalcasinologger.service';
import { DocumentDto } from 'src/phone/dtos/document.dto';

@Injectable()
export class DocService {
    
}
