import { IsNotEmpty, MinLength, IsOptional, IsIn } from 'class-validator';
import { Taskstatus } from '../task.entity';
import { IsString } from 'class-validator/types/decorator/typechecker/IsString';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  tittle: string;
  @IsString()
  description: string;
}

export class updateTaskDto {
  @IsString()
  @IsOptional()
  tittle?: string;
  @IsString()
  @IsOptional()
  description?: string;
  @IsString()
  @IsOptional()
  @IsIn([Taskstatus.DONE, Taskstatus.IN_PROGRESS, Taskstatus.PENDING])
  status?: Taskstatus;
}
