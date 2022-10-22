import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { concatObject } from 'src/common/utils/index';
import { TEMPLATE_TYPE } from 'src/common/utils/type/template';

export class SendMailReqDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  from: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  to: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ default: concatObject(TEMPLATE_TYPE) })
  @IsString()
  @IsNotEmpty()
  mail_template_type: string;

  @ApiPropertyOptional()
  @IsOptional()
  body: string;

  @ApiPropertyOptional()
  @IsOptional()
  code: string;
}
