import { Inject, Injectable } from '@nestjs/common';
import { DocumentationType } from 'src/database/db-models/documentation-type.model';
import { Documentation } from 'src/database/db-models/documentation.entity';
import { RoyalcasinologgerService } from 'src/logger/royalcasinologger/royalcasinologger.service';
import { Repository } from 'typeorm';

@Injectable()
export class DocumentationService {

}
