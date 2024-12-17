import assertUuid from '#utils/assertUuid.js';
import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UuidValidationPipe implements PipeTransform<string> {
  transform(value: string, metadata: ArgumentMetadata) {
    assertUuid(value);

    return value;
  }
}
