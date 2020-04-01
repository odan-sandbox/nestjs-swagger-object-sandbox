import { Controller, Get, Post, Body } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

class User {
  constructor(public readonly name: string) {}
}

type A = User["name"];

// class-validator で値があることは担保しているので、non-null assertion は許容
class CreateUserDto {
  @ApiProperty()
  @IsString()
  name!: A;
}

@Controller()
export class AppController {
  @Get("/health")
  health(): { ok: boolean } {
    return { ok: true };
  }

  @Post("/user")
  create(@Body() createUserDto: CreateUserDto): { ok: boolean } {
    console.log(createUserDto);
    return { ok: true };
  }
}
