import { INestApplication, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { initializeApp } from 'firebase-admin/app';
import { AppModule } from './app.module';
import { DocumentationType } from './database/db-models/documentation-type.model';
import { Games } from './database/db-models/games.entity';
import { RolePermissions } from './database/db-models/role-permissions.entity'
import { UserRole } from './database/db-models/user-role.entity';
import { User } from './database/db-models/user.entity';
import { DocumentationService } from './database/service/documentation/documentation.service';
import { GamesService } from './database/service/games/games.service';
import { RolePermissionsService } from './database/service/role-permissions/role-permissions.service';
import { UserRoleService } from './database/service/user-role/user-role.service';
import { UserService } from './database/service/user/user.service';
import { RoyalcasinologgerService } from './logger/royalcasinologger/royalcasinologger.service';
import { generateGameObj } from './phone/utils/utils';
import * as bcrypt from 'bcrypt';
import { ALL_ROLES, generateAboutUsArray, generateInitialPermissionObj, generateOnlineServiceArray, generatePermissionObj, generatePrivacyPolicyArray, generateRoleObj, generateTermsAndConditionsArray } from './web/utils/utils';

async function initializeGames(app: INestApplication){

  const gameService = app.get(GamesService);

  let dragonVTigerString:string = "Dragon Vs Tiger";
  let slotMachineString: string = "Slot Machine";
  let colorPredictionString:string = "Color Prediction";
  let carRouletteString: string = "Car Roulette";

  let gameArray: Games[] = [
    generateGameObj(dragonVTigerString),generateGameObj(slotMachineString),
    generateGameObj(colorPredictionString),generateGameObj(carRouletteString)
  ];
  
  for(let gameVal of gameArray){
    let selectedGame:Games = await gameService.findGame(gameVal.name);
    if(!selectedGame){
      await gameService.saveGame(gameVal);
    }
  }

}

async function initializeUserBasic(app: INestApplication){
  
  const permissionService = app.get(RolePermissionsService);
  const roleService = app.get(UserRoleService);
  const userService = app.get(UserService);

  //permissions
  let permissionArray: RolePermissions[] = generateInitialPermissionObj();

  for(let permissionVal of permissionArray){
    let selectedPermission: RolePermissions = await permissionService.findPermission(permissionVal.permissionName);
    if(!selectedPermission){
      await permissionService.savePermission(permissionVal);
    }
  }

  //roles
  //get permissions for admin
  let adminPermissions: RolePermissions[] = await permissionService.getAdminPermissions();
  let userPermissions: RolePermissions[] = await permissionService.getUserPermissions();

  let roleArray: UserRole[] = [
    generateRoleObj(ALL_ROLES[0], [...adminPermissions,...userPermissions]),
    generateRoleObj(ALL_ROLES[1],[...userPermissions])
  ];

  for(let roleVal of roleArray){
    let selectedRole: UserRole = await roleService.findUserRoleByName(roleVal.roleName);
    if(!selectedRole){
      await roleService.saveUserRole(roleVal);
    }
  }

  if(!userService.doesAdminExist()){
    //generate admin user
    let adminUser: User = new User();
    adminUser.name = 'admin';
    adminUser.email = 'admin1';
    adminUser.password = await bcrypt.hash('adminpassword', 10);
    adminUser.isActive = true;
    adminUser.role = await roleService.findUserRoleByName('ADMIN');
    adminUser.dateJoined = new Date();
    adminUser.createdOn = new Date();
    adminUser.modifiedOn = new Date();

    userService.saveUser(adminUser);
  }
}

async function initializeDocumentation(app: INestApplication){
  const documentationService = app.get(DocumentationService)

  //Online services
  for(let onlineDoc of generateOnlineServiceArray()){
    let selectedDoc = await documentationService.getSpecificDocumentation(onlineDoc.key,DocumentationType.ONLINE_SERVICES);
    if(!selectedDoc){
      await documentationService.saveDocumentation(onlineDoc);
    }
  }

  //About us
  for(let aboutDoc of generateAboutUsArray()){
    let selectedDoc = await documentationService.getSpecificDocumentation(aboutDoc.key,DocumentationType.ABOUT_US);
    if(!selectedDoc){
      await documentationService.saveDocumentation(aboutDoc);
    }
  }

  //Privacy Policy
  for(let policyDoc of generatePrivacyPolicyArray()){
    let selectedDoc = await documentationService.getSpecificDocumentation(policyDoc.key,DocumentationType.PRIVACY_POLICY);
    if(!selectedDoc){
      await documentationService.saveDocumentation(policyDoc);
    }
  }

  //Terms and Condition
  for(let tocDoc of generateTermsAndConditionsArray()){
    let selectedDoc = await documentationService.getSpecificDocumentation(tocDoc.key,DocumentationType.TERMS_AND_CONDITIONS);
    if(!selectedDoc){
      await documentationService.saveDocumentation(tocDoc);
    }
  }
}

async function bootstrap() {
  //initialize firebase
  initializeApp();

  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('port');
  if(configService.get<boolean>('log')){
    app.useLogger(app.get(RoyalcasinologgerService));
  }

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  await initializeGames(app);
  await initializeUserBasic(app);
  await initializeDocumentation(app);

  await app.listen(port);
}
bootstrap();
