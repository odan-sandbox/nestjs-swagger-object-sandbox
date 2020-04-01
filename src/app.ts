import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

import { AppModule } from "./app.module";

process.on("unhandledRejection", reason => {
  console.error(reason);
  process.exit(1);
});

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder().setTitle("example").build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("api", app, document);

  await app.listen(3000);
}
bootstrap();
