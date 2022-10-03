import { DocumentationType } from "src/database/db-models/documentation-type.model";
import { Documentation } from "src/database/db-models/documentation.entity";
import { RolePermissions } from "src/database/db-models/role-permissions.entity";
import { UserRole } from "src/database/db-models/user-role.entity";
import { User } from "src/database/db-models/user.entity";
import { RegisterAdminDto } from "../dtos/register-admin.dto";
import * as bcrypt from 'bcrypt';

