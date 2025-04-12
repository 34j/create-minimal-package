import { describe, expect, it } from 'vitest'
import { myPackage, mySubmodule } from '../src'

describe('index', () => {
  describe('myPackage', () => {
    it('should return a string containing the message', () => {
      const message = 'Hello'
      const result = myPackage(message)
      expect(result).toMatch(message)
    })
  })
  describe('mySubmodule', () => {
    it('should return a string containing the message', () => {
      const message = 'Hello'
      const result = mySubmodule(message)
      expect(result).toMatch(message)
    })
  })
})
