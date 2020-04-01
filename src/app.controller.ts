import { Controller, Get, Post, Body } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";

class User {
  constructor(public readonly name: string) {}
}

type A = User["name"];

class CreateUserDto {
  @ApiProperty()
  name: A;

  constructor(args: typeof CreateUserDto.prototype) {
    this.name = args.name;
  }
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
