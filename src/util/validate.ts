import { validate } from 'class-validator'
import { plainToInstance } from 'class-transformer'
import { type NextFunction, type Request, type Response } from 'express'
import { ErrorResponse } from '../dto/error'
import { ErrorCode } from '../types/error'

export function validateBody (schema: new() => any) {
  return async function (req: Request, res: Response, next: NextFunction): Promise<void> {
    const dto: typeof schema = plainToInstance(schema, req.body)

    const errors = await validate(dto, {
      whitelist: true,
      forbidNonWhitelisted: true,
      skipMissingProperties: false
    })

    if (errors.length > 0) {
      res.status(400).json(
        new ErrorResponse('요청을 확인해주세요!',
          ErrorCode.VALIDATION_ERROR.message,
          errors.map((e) => e.property)
        )
      )
    }

    req.body = dto
    next()
  }
}
